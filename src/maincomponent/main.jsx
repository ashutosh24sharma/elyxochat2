import { useContext } from "react";
import { assets } from "../assets/assets";
import "./main.css"
import { Context } from "../context/context";
function Main() {

     const {onSent,recentPromt,showResult,loading,resultdata,setInput,input}=useContext(Context)

    return ( <div className="main">
        <div className="nav">
            <p>Elyxo Chat</p>
            <img src={assets.image} alt="" />
        </div>
        <div className="main-container">
            {!showResult ?
            <>
            <div className="greet  ">
                <p><span className="text-[56px]"  >hello, Dev.</span></p>
                <p className="text-40px tb:text-[56px]">How Can I Help You Today?</p>
            </div>
            <div className="cards tb:h-[200px] ">
                <div className="card ">
                    <p>suggest beautifull places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>solve this mathmatical euation,using lagrenge's theorem</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card ">
                    <p>write an program to sort an array in java </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            
               
            </> : <div className="result ">
                <div className="result-title">
                    <img  src={assets.image} alt="" />
                    <p>{recentPromt}</p>
                  
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className="loader">
                       <hr />
                       <hr />
                       <hr />
                    </div>:
                    <p dangerouslySetInnerHTML={{__html:resultdata}}></p>}
                </div>
            </div>
            }
              <div className="main-bottom tb:absolute bottom-[10px] ">
                <div className="search-box  ">
                    <input className="text-[black] text-[17px] " onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a promt here"/> 
                    <div>
                        <img className="" src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />         
                       {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null} 
                    </div>
                    </div>
           
                <p className="bottom-info">
                    Elyxo Chat may display inaccurate info,including about people, so double-check its respnse.
                </p>
            </div>
        </div>
    </div> );
}

export default Main;