// Import
import { Link } from "react-router-dom";
import "./Erreur.css";

// Page d'erreur : erreur 404
function Erreur(){
    // Affichage HTML
    return (
        <div className="Erreur">
            <img className="Erreur-img" src={require("../../assets/404.png")} alt=""/>
            <Link className="Erreur-lien" to="/">Retour à l'accueil</Link>
        </div>
    )
}

export default Erreur;