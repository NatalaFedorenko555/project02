import {  useEffect, useState } from "react"


export default function EffeczExample() {
    const[connt,setCount]=useState(0);
    const[random,setRandom]=useState(10);


    function handlePlus(){
        setCount((prev)=>prev+1);
    }

    function generateRandom(){
        setRandom(Math.random()*10);
    }
    useEffect(()=>{
        console.log("Use effect 1 no dependency array");
        //при первом рендере всегда и при каждом обновлении компонента

    });
    useEffect(()=>{
        console.log("Use effect 2,empty dipendency array");
        //только при первом рендере компонента при изменении не вызывается
    },[]);

    useEffect(()=>{
        console.log("Use effect 3,with dependency array");
        //при первом рендере и при изменении зависимостей в массиве
    },[random]);//зависимостью является random можно несколько 
    // зависимостей через запятую






  return (
    <div>
      <h2>EffectExample</h2>
      <p>Count:{connt}</p>
      <p>Random:{random}</p>
      <button type="button" onClick={handlePlus}>
        +1
      </button>
      <button type="button" onClick={generateRandom}>
        Generate Random
      </button>

    </div>
  );
}
     

// Component lificycle - жизненный цикл 
// 1. mount - рождения - устанивливается на экране первый раз - первый рендер
// 2. update - когда компонент изменяется
// 3. unmount - когда перестает отображться на экран