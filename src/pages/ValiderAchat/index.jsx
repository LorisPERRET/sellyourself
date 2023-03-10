// Import
import './validation.css';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Validation from '../../components/PageValider';
import HeaderCustom from '../../components/HeaderCustom';

// Page pour valider un achat
function ValiderAchat() {
  // Variables
  const [annonce, setAnnonce] = useState([]);
  const params = useParams();

  useEffect(() => {
    getAnnonce();
  }, [])

  // Fonction pour récupérer une annonce
  const getAnnonce = async () => {
      let result = await fetch(`https://api.sellyourself.fr/api/annonce/${params.annonce}`, {
				method: "Get",
				headers: {
					'Content-Type': 'Application/json',
					authorization: `bearer ${JSON.parse(sessionStorage.getItem('token'))}`
				}
			});
      result = await result.json();
      setAnnonce(result);
  }

  // Affichage HTML
  return(
    <div className="Achat">
      <HeaderCustom title="valid" className="Achat-header"/>
      <div className='Achat-bas'>
        <div className='Achat-formulaire'>
          <Validation className="Achat-form" annonce={annonce}/>
        </div>
        <div className="Achat-image">
          <img className="Achat-img-login" src={require('../../assets/Credit.png')} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default ValiderAchat;
