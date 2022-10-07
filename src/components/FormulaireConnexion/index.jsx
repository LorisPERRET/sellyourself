import './FormulaireConnexion.css'
import { Link } from 'react-router-dom';

function FormulaireConnexion() {
    return (
        <div className="form">
            <h1>CONNEXION</h1>
            <form method="post">
                <div className="input">
                    <input type="text" name="login" placeholder="IDENTIFIANT" required/>
                    <input type="password" name="password" placeholder="MOT DE PASSE" required/>
                </div>
                <div className="buttons">
                    <div className="other">
                        <input type="submit" name="submit" value="SE CONNECTER"/>
                    </div>
                </div>
            </form>
            <div className="signup-div">
                Pas encore inscrit ?
                <Link className="signup" to="/inscription">S'inscrire</Link>
            </div>
        </div>
    );
}

export default FormulaireConnexion;