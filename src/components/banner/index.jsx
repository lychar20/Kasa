import './banner.scss'

function Banner({children, txt}) {
	return (
     
        <div className='banner'> 
            <div className='banner_image'>{children}
                <div className='banner_Filter'></div>
                <div className='banner_txt'> {txt} </div>
            </div>
        </div>
    ) 
}

export default Banner





//---------------------------------------test-------------------------------------------

/* function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
    
} */