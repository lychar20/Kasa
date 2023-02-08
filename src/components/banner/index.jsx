import './banner.scss'

function Banner({img, txt}) {
	return (
     
        <div className='banner'> 
            <div className='banner_image' alt="" src= "{img}"/>
            <div className='banner_Filter'></div>
            <div className='banner_txt'> {txt} </div>
            
        </div>
    ) 
}

export default Banner





//---------------------------------------test-------------------------------------------

/* function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
    
} */