const mongoose = require("mongoose");

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
    conversations: {type: [String] }
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
    annonceId: {type: String, required: true},
    note: {type: Number, required: true}
});

const notificationSchema = new mongoose.Schema({
    type: {type: String, required: true},
    content: {type: String, required: true}
});

const achatSchema = new mongoose.Schema({
    acheteur: {type: String, required: true},
    annonce: {type: String, required: true}
});

const conversationSchema = new mongoose.Schema({
    acheteur: {type: String, required: true},
    vendeur: {type: String, required: true},
    annonce: {type: String, required: true},
    messages: []
});

const messageSchema = new mongoose.Schema({
    author: {type: String, required: true},
    content: {type: String, required: true},
});

module.exports = {
    User: mongoose.model("users", userSchema),
    Annonce: mongoose.model("annonces", annonceSchema),
    Note: mongoose.model("notes", noteSchema),
    Notification: mongoose.model("notifications", notificationSchema),
    Achat: mongoose.model("achats", achatSchema),
    Conversation: mongoose.model("conversations", conversationSchema),
    Message: mongoose.model("messages", messageSchema)
}