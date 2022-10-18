import './infoAnnonce.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBookmark, faStar} from '@fortawesome/free-solid-svg-icons';

function Utilisateur({nom, note, description, localisation, image}){
    return(
        <Link className='InfoAnnonce-InfoEtPhotoVendeur' to="/vendeur">
            <img src={require('../../assets/DefaultPP.jpeg')} alt="" className='InfoAnnonce-PhotoVendeur'/>
            <div className='InfoAnnonce-InfosVendeur'>
                    <p className='InfoAnnonce-NomVendeur'>{nom}</p>
                    <div className='InfoAnnonce-NoteVendeur'>
                        <p className='InfoAnnonce-Note'>Note : {note}/5</p>
                        <FontAwesomeIcon className='InfoAnnonce-Star' icon={faStar}/>
                    </div>
                    <p className='InfoAnnonce-DescriptionVendeur'>{description}</p>
                    <p className='InfoAnnonce-LocalisationVendeur'>{localisation}</p>
            </div>
        </Link>
    )
}

function Annonce({titre, description, photos}){
    return(
        <div className='InfoAnnonce-Annonce'>
            <p className='InfoAnnonce-NomAnnonce'>{titre}</p>
            <p className='InfoAnnonce-DescriptionAnnonce'>{description}</p>
            <div className='InfoAnnonce-PhotosAnnonce'>
                <img src={require('../../assets/annonce1.jpg')} alt="" />
                <img src={require('../../assets/annonce2.jpg')} alt="" />
                <img src={require('../../assets/annonce3.jpg')} alt="" />
            </div>
        </div>
    )
}

function InfoAnnonce({nom, note, descriptionVendeur, localisation, image, titre, descriptionAnnonce, photos, prix}) {
    return (
        <div className='InfoAnnonce'>
            <div className='InfoAnnonce-Haut'>
                <Utilisateur nom={nom} note={note} description={descriptionVendeur} localisation={localisation} image={image}/>
                <p className='InfoAnnonce-PrixAnnonce'> {prix} €</p>
                <div className='InfoAnnonce-Boutons'>
                    <input type='submit' value="Acheter" className="InfoAnnonce-Achat"/>
                    <Link className='InfoAnnonce-BoutonMessage' to={'/conversation'}>Contacter</Link>
                </div>
            </div>
            <Annonce titre={titre} description={descriptionAnnonce} photos={photos}/>
            <button className='InfoAnnonce-AjoutFav'>
                <FontAwesomeIcon className='InfoAnnonce-Icon' icon={faBookmark} />
                <p>Ajout au favoris</p>
            </button>
        </div>
    )
}

export default InfoAnnonce;