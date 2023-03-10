// Import
import "./Messages.css";
import { useEffect, useState } from 'react';
import HeaderCustom from "../../components/HeaderCustom";
import Message from "../../components/Message";
import LeftBar from "../../components/LeftBar";
import { Link } from "react-router-dom";

// Page message
function Messages() {

    // Variables
    let connectedUser = sessionStorage.getItem("user");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getUserConv();
    }, [])

    // Fonction pour récupérer les annonces de l'utilisateur
    const getUserConv = async () => {
        let listAds = [];
        for(let i = 0; i < (JSON.parse(connectedUser).conversations).length; i++){
            let a = await fetch(`https://api.sellyourself.fr/api/chat/${JSON.parse(connectedUser).conversations[i]}/${JSON.parse(connectedUser).pseudo}`, {
                method: "Get",
                headers: {
                    'Content-Type': 'Application/json',

                    authorization: `bearer ${JSON.parse(sessionStorage.getItem('token'))}`
                }
            });
            a = await a.json().then(a => listAds.push(a));
        }
        setMessages(listAds)
    }

    // fonction pour afficher 1 annonce de l'utilisateur
    const displayConv = (item, index) => {
        const annonce = item;
        return (
            <Link className="Messages-link" to={`/chat/${annonce.idAnnonce}/${annonce.vendeur}/${annonce.acheteur}`}>
            <Message
                photo={annonce.otherPhoto}
                pseudo={annonce.otherPseudo}
                text={annonce.nomAnnonce}
            />
            </Link>
        )
    }
    

    // Affichage HTML
    return (
        <div className='Messages'>
            <LeftBar/>
            <div className='Messages-center'>
                <div className="Messages-header">
                    <HeaderCustom title="Messages"/>
                </div>
                <div className="Messages-info">
                    {messages.map((item, index) => (
                        displayConv(item, index)
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Messages;