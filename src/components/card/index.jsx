import './card.scss'

function Card({cover, title}) {
	return (
     
        <div className='card'> 
            { <img src={cover} alt="location" className='card_pic' /> }
            

            <div className='card_txt'> {title} </div>
           
        </div>
    ) 
}

export default Card