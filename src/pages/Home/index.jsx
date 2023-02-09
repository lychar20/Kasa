import * as React from "react";
import './home.scss'
import Banner from 'components/banner/index'
import IMG from 'assets/image/IMG.png'
import Card from "components/card";


function Home() {

  const bannerTxt = "Chez vous partout et ailleurs"
  const cardTxt = "Titre de la location "

    return (
      <div>
        

        <Banner img={IMG} txt={bannerTxt} />
        <Card txt={cardTxt} />
        
        
      </div>
    )
  }
  
  export default Home

  


/*   return (
    <div>
      

      <Banner><img src={IMG} alt='montagne' className='montagne' /> <h1 className="txt">{bannerTxt}</h1>  </Banner>
      
      
    </div>
  ) */