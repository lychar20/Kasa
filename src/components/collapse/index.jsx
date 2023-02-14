import React, {useState} from "react";
import './collapse.scss'
import Vectorup from 'assets/image/Vectorup.png'
import Vector from 'assets/image/Vector.png'

function Collapse (props) {

    const [isOpen, setIsOpen] = useState(true)
    /* const display=() => {
        setIsOpen(!isOpen);
    } */ 



    return isOpen ? (
        <div className="collapse">
            <button
                className="collapse_button"
                onClick={() => setIsOpen(false)}
            >
              <h2 className="collapse_titre"> {props.aboutTitle} LE TITRE</h2>  <img src={Vectorup} alt='chevronup' className='chevron' />
            </button>

            <div className="collapse_text">{props.aboutText}
                Voici le texte
            </div>

        </div>
    ) : (
        <div className="collapse_close">
            <button
            className="collapse_close_button"
            onClick={() => setIsOpen(true)}
        >
            A ouvrir <img src={Vector} alt='chevronup' className='chevron' />
        </button>
        </div>
    )

}

export default Collapse