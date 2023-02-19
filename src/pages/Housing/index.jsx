//import * as React from "react"; 
// import { title } from "process";
import {useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
//import axios from "axios";


function Housing() {

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