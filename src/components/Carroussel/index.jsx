import './carroussel.scss'
import React,{useState,useEffect} from "react";

function Carroussel(pictures) {

    const [data,setData]= useState([0]);
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
      setData(myJson)
    });
  }
  useEffect(()=>{
    getData()
  },[])

    return (

        <div className='carroussel'> 
        {data.map((photo, id) => (

<div className='clik' onClick={() => setData(data + 1)}> <img src={photo.pictures} alt='photo_appartement' className='pic' />  key={id}</div>
      
      
      ))}
        
       </div>
    ) 
}

export default Carroussel




