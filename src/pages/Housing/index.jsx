//import * as React from "react"; 
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
//import axios from "axios";
import Rate from "components/rate/index";
import Carousel from "components/Carousel/index";
import { useNavigate } from "react-router-dom";
import Title from "components/title";
//import Error from 'components/Error/index'
import Tag from "components/Tags";
import Host from "components/host";
import './housing.scss'
import Collapse from "components/collapse";


function Housing() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [data,setData]= useState([]);

  const getData=()=> {
    fetch('/logements.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(data){
      console.log(data);
      const apart = data.find((item) => item.id ===id);

      
      
      if (!apart) navigate("components/Error/index")
      setData(apart);
    })

    .catch(function(err) {
  
    })

  }
  useEffect(()=>{
    getData()
  },[])

  

  return (

    <div className="Page_entiere">
    
    <main className="main"> {data.pictures? <Carousel photo={data.pictures}  /> : ""    } </main>
    
    
    <section className="section">

      <div className="bloc_one">
        <Title  name= {data.title}  city= {data.location} />
        <Tag des= {data.tags} />
      </div>

      <div className="bloc_two">
        {data.pictures? <Host nickname={data.host.name} avatar={data.host.picture } /> : ""    }
        <Rate rate={data.rating} className="rate" />
      </div>

    </section>

    
    <article className="article">

      <div className="bloc_three">
          <Collapse 
            key={id} 
            aboutTitle={"Description"}
            aboutText={data.description}
          />

      </div>


      <div className="bloc_four">
        <Collapse aboutTitle={"Equipements"} aboutText={data.equipments?.map((equip, furn) => (
          <p key={furn}>  {equip} </p>
        ))} />

      </div>


    </article>
    
    

    
    </div> //fin de div page entiere

    
  );
};
  
  
 
  
  export default Housing






/* 
function Housing() {

  const  { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement]= useState([]);

  useEffect(()=>{
    const getData=()=> {
      const res = axios.get('./logements.json')
      const picked = res.data.find(({id}) => id === params.id)
      res.data.map(() => setLogement(picked))
      if (picked === undefined) {
        navigate("components/Error/index")
      }
     
      
    }

    getData()
    },[])

   



 
  
  }
  
  export default Housing

 */


  //------------------------------test-------------------------

  
  /*  const getData=()=> {
    axios.get('./logements.json')
    .then((res) => console.log (res.data))
    .catch((err) => console.log(err))
    
  }
  useEffect(()=>{
    getData()
    },[])
 */

    //------------------------------------------------------

   /*  function Housing() {

      const { id } = useParams();
      const navigate = useNavigate();
      const [data,setData]= useState([]);
    
      const getData=()=> {
        fetch('./logements.json'
        ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson){
          console.log(myJson);
          const getID = myJson.find((item) => item.id ===id);
          setData(getID);
          if (!getID) navigate("components/Error/index")
        });
      }
      useEffect(()=>{
        getData()
      },[])
    
    
    
    return (
    
      <div> shiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiit   </div>
      
      
    )
    
      
      }
      
      export default Housing
     */

    //--------------------------------------------

   /*  const { id } = useParams();
  
    //const logementId =logements2.find((data) => data.id === id);
  
    const index = logements2.findIndex( i => i.id === id)
    console.log("INDEX", index);
    //en cas de mauvaise id on affiche la page 404
    //if (!logementId) return <Error />;
  
    if (index === -1) return <Error />;
    //sinon on retourne la fiche logement */