//import * as React from "react"; 
import {useState,useEffect, useNavigate} from "react";
import { useParams } from "react-router-dom";
//import axios from "axios";
import Rate from "components/rate/index";
import Carousel from "components/Carousel/index";

//import logements2 from "assets/data/logements2.json";
//import Error from 'components/Error/index'
import Tag from "components/Tags/tag";


function Housing() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [data,setData]= useState([]);

  const getDatas=()=> {
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
    });
  }
  useEffect(()=>{
    getDatas()
  },[])

  

  return (

    <div>
    <Rate rate={data.rating} className="rate" />
    {data.title}

    
    <Carousel photo={data.pictures}  />
    <Tag des= {data.tags} />


    

    


    
    
   

    
</div>

    
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