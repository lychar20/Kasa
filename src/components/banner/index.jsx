import './banner.scss'

function Banner({img, txt}) {
	return (
     
        <div className='banner'> 
            <img className='banner_image' src={img} alt="banner" />
            <div className='banner_Filter'></div>


            {txt != null ?
                <div className='banner_txt'> {txt} </div>
            :
            ""    
            }
            
        </div>
    ) 
}

export default Banner





//---------------------------------------test-------------------------------------------

/* function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
    
} */



/* function Banner({img, txt}) {
	return (
     
        <div className='banner'> 
            <img className='banner_image' src={img} alt="banner" />
            <div className='banner_Filter'></div>

            
            <div className='banner_txt'> {txt} </div>
            
        </div>
    ) 
} */