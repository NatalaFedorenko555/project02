import {  useEffect, useState } from "react";



export default function RandomJoke() {
    const[joke,setjoke]= useState("");
    async function fetchJoke(){

        const res=await fetch(" https://official-joke-api.appspot.com/jokes/programming/random");

        //деструктуризация массива и объекта
        const [{setup,punchline}]= await res.json();

        setjoke(setup + punchline);
        }

        useEffect(() => {
            fetchJoke();
        },[]);


        




  return (<div>RandomJoke
    <p>{joke}</p>
  </div>
  );
    
  
}
