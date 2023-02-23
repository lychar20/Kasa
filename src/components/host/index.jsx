import './host.scss'

function Host({nickname, avatar}) {
	return (
     <div className='host'>

        <span className='name'> {nickname} </span>
        
        { <img src={avatar} alt="photo_avatar" className='avatar' /> }
        
        </div>
        
    ) 
}

export default Host