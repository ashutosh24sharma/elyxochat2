import './sidebar.css'
import React, { useState } from 'react';
import {assets} from '../assets/assets'
import { Context } from '../context/context';
import { useContext } from 'react';

function Sidebar() {

  const[extended,setExtended]=useState(false)

  const {onSent,prevPromt,setRecentpromt,newChat}=useContext(Context);
   
  const loadPrompt=async (prompt)=>{
    setRecentpromt(prompt)
    await onSent(prompt)
  }
    return ( <div className='sidebar'>
        <div className="top">
          <img onClick={()=>setExtended(preview=>!preview)} className="menu" src={assets.menu_icon} alt="" />
          <div onClick={()=>newChat()} className="new-chat ">
            <img src={assets.plus_icon} alt="" />
          {extended?<p>new chat</p>:null}
          </div>
          {extended?
          <div className="recent">
            <p className='recent-title'>Recent</p>

            {prevPromt.map((item,index)=>{
               return(
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                {extended?<p key={index}>{item.slice(0,16)}...</p>:null}
            </div>
               );
            })}
           
           
          </div>:null}
        </div>
        <div className="bottom">
             <div className="bottom-itom recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
             </div>
             <div className="bottom-itom recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
             </div>
             <div className="bottom-itom recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
             </div>
        </div>
    </div> );
}

export default Sidebar;