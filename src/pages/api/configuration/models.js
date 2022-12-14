const mongoose = require("mongoose");
const { bool } = require("prop-types");

const ImageSchema = new mongoose.Schema({
    nom: {type: String},
    image: {data: Buffer, contentType: String}
});



const userSchema = new mongoose.Schema({
    pseudo: {type: String, index: { unique: true }},
    email: {type: String, index: { unique: true }},
    password: {type: String},
    prenom: {type: String, default: ""},
    description: {type: String, default: ""},
    nom: {type: String, default: ""},
    ville: {type: String, default: ""},
    profilPic: {type: String},
    paypal: {type: String, default: ""},
    note: {Type: Number},
    noteList: [],
    notifications: [],
    annonces: {type: [String] },
    favoris: [],
});

const annonceSchema = new mongoose.Schema({
    utilisateur: {type: String, require: true},
    titre: {type: String, require: true },
    description: {type: String },
    image: {type: [String] },
    prix: {type: Number, require: true},
    type: {type: String },
    categorie: {type: String },
    vendu: {type: Boolean, default: false}
});

const noteSchema = new mongoose.Schema({
    utilisateurId: {type: String, required: true},
    note: {type: Number, required: true},
});

const notificationSchema = new mongoose.Schema({
    type: {type: String, required: true},
    content: {type: String, required: true}
});


module.exports = {
    User: mongoose.model("users", userSchema),
    Annonce: mongoose.model("annonces", annonceSchema),
    Note: mongoose.model("notes", noteSchema),
    Notification: mongoose.model("notifications", notificationSchema),
    Image: mongoose.model("images", ImageSchema)
}