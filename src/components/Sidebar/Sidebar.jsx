// import React,{useContext, useState} from 'react'
// import './Sidebar.css' ;
// import { assets } from '../../assets/assets';
// import { Context } from '../../context/Context';
// const Sidebar = () => {

//   const [extended,setExtended]= useState(false);//for hiding and showing the sidebar
//   const {onSent,prevPrompts,setRecentPrompt,newChat}= useContext(Context)

//   const loadPrompt= async(prompt) => {
//     setRecentPrompt(prompt)
//     await onSent(prompt)
//   }
//   return (
//     <div className='sidebar'>                 {/*The sidebar section->under that:top and bottom section
//     under that->new chat,recent components    similarly for bottom section*/}
//       <div className='top'>
//         <img onClick={()=>setExtended(prev=>!prev)}src={assets.menu_icon} alt=''/>
//         <div onClick={()=>newChat()} className='new-chat'>
//           <img src={assets.plus_icon} alt=""/>
//           {extended?<p>New Chat</p>:null}  {/*hide the new chat in case of false and show in case of true */}
//         </div>
//         {extended?
//         <div className='recent'>
//         <p className='recent-title'>Recent</p>
//         {prevPrompts.map((item,index)=>{
//           return(
//             <div onClick={()=>loadPrompt(item)} className='recent-entry'>
//             <img src={assets.message_icon} alt=''/>
//             <p>{item.slice(0,18)}...</p>
//           </div>
//           )
//         })}
       
//       </div>
//       :null
//         }
        

//       </div>
//       <div className='bottom'>
//         <div className='bottom-item recent-entry'>
//           <img src={assets.question_icon} alt=''/>
//           {extended?<p>Help</p>:null}
//         </div>
//         <div className='bottom-item recent-entry'>
//           <img src={assets.history_icon} alt=''/>
//           {extended?<p>Activity</p>:null}
//         </div>
//         <div className='bottom-item recent-entry'>
//           <img src={assets.setting_icon} alt=''/>
//           {extended?<p>Settings</p>:null}
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default Sidebar

// import React, { useContext, useState } from 'react';
// import './Sidebar.css';
// import { assets } from '../../assets/assets';
// import { Context } from '../../context/Context';

// const Sidebar = () => {
//   const [extended, setExtended] = useState(false);
//   const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

//   const loadPrompt = async (prompt) => {
//     setRecentPrompt(prompt);
//     await onSent(prompt);
//   };

//   return (
//     <div className={`sidebar ${extended ? 'expanded' : ''}`}>
//       <div className="top">
//         <img
//           onClick={() => setExtended((prev) => !prev)}
//           src={assets.menu_icon}
//           alt="Menu"
//           className="menu-icon"
//         />
//         <div onClick={() => newChat()} className="new-chat">
//           <img src={assets.plus_icon} alt="New Chat" />
//           {extended && <p>New Chat</p>}
//         </div>
//         {extended && prevPrompts.length > 0 && (
//           <div className="recent">
//             <p className="recent-title">Recent</p>
//             {prevPrompts.map((item, index) => (
//               <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
//                 <img src={assets.message_icon} alt="" />
//                 <p>{item.slice(0, 18)}...</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="bottom">
//         <div className="bottom-item">
//           <img src={assets.question_icon} alt="Help" />
//           {extended && <p>Help</p>}
//         </div>
//         <div className="bottom-item">
//           <img src={assets.history_icon} alt="Activity" />
//           {extended && <p>Activity</p>}
//         </div>
//         <div className="bottom-item">
//           <img src={assets.setting_icon} alt="Settings" />
//           {extended && <p>Settings</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import React, { useContext, useState } from "react";
// import "./Sidebar.css";
// import { assets } from "../../assets/assets";
// import { Context } from "../../context/Context";

// const Sidebar = () => {
//   const [extended, setExtended] = useState(false);
//   const { darkMode, onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

//   const loadPrompt = async (prompt) => {
//     setRecentPrompt(prompt);
//     await onSent(prompt);
//   };

//   return (
//     <div className={`sidebar ${extended ? "expanded" : ""} ${darkMode ? "dark" : ""}`}>
//       {/* Sidebar Top Section */}
//       <div className="top">
//         <img
//           onClick={() => setExtended((prev) => !prev)}
//           src={assets.menu_icon}
//           alt="Menu"
//           className="menu-icon"
//         />
//         <div onClick={() => newChat()} className="new-chat">
//           <img src={assets.plus_icon} alt="New Chat" />
//           {extended && <p>New Chat</p>}
//         </div>

//         {/* Recent Chats */}
//         {extended && prevPrompts.length > 0 && (
//           <div className="recent">
//             <p className="recent-title">Recent</p>
//             {prevPrompts.map((item, index) => (
//               <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
//                 <img src={assets.message_icon} alt="Chat" />
//                 <p>{item.slice(0, 18)}...</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Sidebar Bottom Section */}
//       <div className="bottom">
//         <div className="bottom-item">
//           <img src={assets.question_icon} alt="Help" />
//           {extended && <p>Help</p>}
//         </div>
//         <div className="bottom-item">
//           <img src={assets.history_icon} alt="Activity" />
//           {extended && <p>Activity</p>}
//         </div>
//         <div className="bottom-item">
//           <img src={assets.setting_icon} alt="Settings" />
//           {extended && <p>Settings</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { darkMode, onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`sidebar ${extended ? 'expanded' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt="Menu"
          className="menu-icon"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="New Chat" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && prevPrompts.length > 0 && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => (
              <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="Help" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} alt="Activity" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="Settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
