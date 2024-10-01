import { createContext, useState } from "react";
import run from "../config/gimini";

export const Context=createContext();

const ContextProvider=(props)=>{

  const [input,setInput]=useState("");
  const [recentPromt,setRecentpromt]=useState("");
  const [prevPromt,setPrevpromt]=useState([]);
  const [showResult,setShowResult]= useState(false);
  const [loading,setLoading]=useState(false);
  const [resultdata,setResultdata]=useState("");

  const delayapara=(index,nextWord)=>{
       setTimeout(function (){
        setResultdata(prev=>prev+nextWord)
       },75*index)
  }

const newChat=()=>{
  setLoading(false);
  setShowResult(false)

}

 const onSent=async (prompt)=>{
  setResultdata("")
  setLoading(true)
  setShowResult(true)
  let response;
if(prompt!== undefined){
  response=await run(prompt);
  setRecentpromt(prompt)
}

 else{
  
    setPrevpromt(prev => [...prev, input]); 
    setRecentpromt(input)
    response=await run(input)
 }
   
   
   let responseArray=response.split("**");
   let newResponse="";
   for(let i=0; i< responseArray.length;i++){
    if(i==0 || i%2 !==1){
           newResponse+=responseArray[i];
    }
    else {
      newResponse +="<b>"+responseArray[i]+"</b>";
    }
   }
   let newResponse2 = newResponse.split("*").join("</br>")
  let newResponseArray=newResponse2.split(" ");
  for(let i=0; i<newResponseArray.length;i++){
    const nextWord= newResponseArray[i];
    delayapara(i,nextWord+" ")
  }
   setLoading(false)
   setInput("")
 }



    const contextValue={
          prevPromt,
          setPrevpromt,
          onSent,
          setRecentpromt,
          showResult,
          loading,
          resultdata,
          input,
          setInput,
          recentPromt,
          setShowResult,
          setLoading,
          setResultdata,
          newChat
    }

    return(
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}

export default ContextProvider;