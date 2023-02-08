import * as React from "react";
import './home.scss'
import Banner from 'components/banner/index'
import IMG from 'assets/image/IMG.png'


function Home() {

  const bannerTxt = "Chez vous partout et ailleurs"

    return (
      <div>
        

        <Banner img={IMG} txt={bannerTxt} />
        
        
      </div>
    )
  }
  
  export default Home

  


/*   return (
    <div>
      

      <Banner><img src={IMG} alt='montagne' className='montagne' /> <h1 className="txt">{bannerTxt}</h1>  </Banner>
      
      
    </div>
  ) */