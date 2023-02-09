import './card.scss'

function Card({img, txt}) {
	return (
     
        <div className='card'> 
            <img className='card_image' src={img} alt="card" />

            <div className='card_txt'> {txt} </div>
           
        </div>
    ) 
}

export default Card