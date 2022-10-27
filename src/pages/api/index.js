const express = require("express");
const cors = require('cors');
var bcrypt = require('bcryptjs');
const { User } = require("./configuration/models");
const Jwt = require("jsonwebtoken");

// Création de l'API
const app = express();
app.use(express.json());
app.use(cors());


// Connexion à la BDD
require('./configuration/connexion');

// Requete d'inscription
app.post("/api/inscription", async (req, resp) => {
    let isPseudoAlreadyTaken = await User.findOne({pseudo: req.body.pseudo});
    let isEmailAlreadyTaken = await User.findOne({email: req.body.email});
    
    if(isPseudoAlreadyTaken) resp.send({result:"Cet identifiant est déjà pris"});
    else if(isEmailAlreadyTaken) resp.send({result:"Cette adresse e-mail est déjà prise"});
    else {
        let user = new User(req.body);
        let result = await user.save();

        result = result.toObject();
        delete result.password;

        Jwt.sign({result}, process.env.JWTKEY, {expiresIn: "2h"}, (err, token) => {
            if(err){
                resp.send({result:"Une erreur est survenue, attendez un peu"});
            }
            resp.send({user: result, authToken:token});   
        });
    }

})

// Requete de connexion
app.post("/api/connexion", async (req, resp) => {
    if(req.body.pseudo && req.body.password){
        let user = await User.findOne({pseudo: req.body.pseudo});
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                let result = user.toObject();
                delete result.password;
                
                Jwt.sign({result}, process.env.JWTKEY, {expiresIn: "2h"}, (err, token) => {
                    if(err){
                        resp.send({result:"Une erreur est survenue, attendez un peu"});
                    }
                    resp.send({user: result, authToken:token});   
                });

            }else resp.send({result:"Mot de passe incorrect"});
        }else {
            resp.send({result:"Utilisateur introuvable"});
        }
    }else {
        resp.send({result:"Veuillez remplir tous les champs ci-dessous"});
    }
})


function verifyToken(req, resp, next) {
    let token = req.headers['authorization'];
    if(token){

        token = token.split(" ")[1];
        Jwt.verify(token, process.env.JWTKEY,(err, success) => {
            if(err) resp.status(401).send({result: "Veuillez renseigner un token valide"});
            else next();
        });
    
    }else{
        resp.status(403).send({result: "Veuillez renseigner un token"});
    }
}

// Lancement de l'API
app.listen(5000);

module.exports = app;