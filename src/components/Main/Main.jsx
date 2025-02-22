// import React, { useContext } from "react";
// import { Context } from "../../context/Context";
// import "./Main.css";
// import { assets } from "../../assets/assets";

// const Main = () => {
//   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } =
//     useContext(Context);

//   return (
//     <div className="main">
//       {/* Navigation Bar */}
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="" />
//       </div>

//       <div className="main-container">
//         {/* Greeting and Suggestion Cards */}
//         {!showResult ? (
//           <>
//             <div className="greet">
//               <p>
//                 <span>Hello Vaibhav</span>
//               </p>
//               <p>How can I help you?</p>
//             </div>

//             <div className="cards">
//               {[
//                 { text: "Suggest beautiful places to see on an upcoming road trip", icon: assets.compass_icon },
//                 { text: "Briefly summarize this concept: urban planning", icon: assets.bulb_icon },
//                 { text: "Brainstorm team bonding activities for our work retreat", icon: assets.message_icon },
//                 { text: "Improve the readability of the following code", icon: assets.code_icon },
//               ].map((card, index) => (
//                 <div className="card" key={index}>
//                   <p>{card.text}</p>
//                   <img src={card.icon} alt="" />
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           // Show Result Section
//           <div className="result">
//             <div className="result-title">
//               <img src={assets.user_icon} alt="" />
//               <p>{recentPrompt}</p>
//             </div>
//             <div className="result-data">
//               <img src={assets.gemini_icon} alt="" />
//               {loading ? (
//                 <div className="loader">
//                   <hr />
//                   <hr />
//                   <hr />
//                 </div>
//               ) : (
//                 <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Input Box */}
//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Enter a prompt here"
//               onKeyDown={(e) => e.key === "Enter" && input.trim() && onSent(input)} // 🔥 Enter key support
//             />
//             <div>
//               <img src={assets.gallery_icon} alt="" />
//               <img src={assets.mic_icon} alt="" />
//               <img
//                 onClick={() => input.trim() && onSent(input)} // 🚀 Prevent empty input submission
//                 src={assets.send_icon}
//                 alt=""
//               />
//             </div>
//           </div>

//           <p className="bottom-info">
//             Gemini may display inaccurate info, including about people, so double-check its responses.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

// import React, { useState,useContext } from "react";
// import { Context } from "../../context/Context";
// import "./Main.css";
// import { assets } from "../../assets/assets";

// const Main = () => {
//   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={`main ${darkMode ? "dark" : ""}`}>
//       <div className="nav">
//         <p>Gemini</p>
//         <div className="nav-icons">
//           <img src={assets.theme_icon} alt="Theme" onClick={() => setDarkMode(!darkMode)} />
//           <img src={assets.user_icon} alt="User" />
//         </div>
//       </div>

//       <div className="main-container">
//         {!showResult ? (
//           <>
//             <div className="greet">
//               <p><span>Hello Vaibhav</span></p>
//               <p>How can I help you?</p>
//             </div>

//             <div className="cards">
//               {[
//                 { text: "Suggest beautiful places to visit", icon: assets.compass_icon },
//                 { text: "Summarize urban planning", icon: assets.bulb_icon },
//                 { text: "Brainstorm team activities", icon: assets.message_icon },
//                 { text: "Improve this code", icon: assets.code_icon },
//               ].map((card, index) => (
//                 <div className="card" key={index} onClick={() => onSent(card.text)}>
//                   <p>{card.text}</p>
//                   <img src={card.icon} alt="" />
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="result">
//             <div className="result-title">
//               <img src={assets.user_icon} alt="User" />
//               <p>{recentPrompt}</p>
//             </div>
//             <div className="result-data">
//               <img src={assets.gemini_icon} alt="Gemini" />
//               {loading ? (
//                 <div className="loader"><hr /><hr /><hr /></div>
//               ) : (
//                 <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//               )}
//             </div>
//           </div>
//         )}

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Enter a prompt"
//               onKeyDown={(e) => e.key === "Enter" && input.trim() && onSent(input)}
//             />
//             <div>
//               <img src={assets.gallery_icon} alt="Gallery" />
//               <img src={assets.mic_icon} alt="Mic" />
//               <img onClick={() => input.trim() && onSent(input)} src={assets.send_icon} alt="Send" />
//             </div>
//           </div>
//           <p className="bottom-info">Gemini may display inaccurate info. Double-check its responses.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;


// import React, { useContext } from "react";
// import { Context } from "../../context/Context";
// import "./Main.css";
// import { assets } from "../../assets/assets";

// const Main = () => {
//   const { darkMode, toggleDarkMode, onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

//   return (
//     <div className={`main ${darkMode ? "dark" : ""}`}>
//       {/* Navigation Bar */}
//       <div className="nav">
//         <p>Gemini</p>
//         <div className="nav-icons">
//           {/* Toggle Dark Mode with Sun/Moon Icon */}
//           <img
//             src={darkMode ? assets.sun_icon : assets.moon_icon} 
//             alt="Toggle Theme"
//             onClick={toggleDarkMode}
//             className="theme-toggle"
//           />
//           <img src={assets.user_icon} alt="User" />
//         </div>
//       </div>

//       <div className="main-container">
//         {!showResult ? (
//           <>
//             <div className="greet">
//               <p><span>Hello Vaibhav</span></p>
//               <p>How can I help you?</p>
//             </div>

//             <div className="cards">
//               {[
//                 { text: "Suggest beautiful places to visit", icon: assets.compass_icon },
//                 { text: "Summarize urban planning", icon: assets.bulb_icon },
//                 { text: "Brainstorm team activities", icon: assets.message_icon },
//                 { text: "Improve this code", icon: assets.code_icon },
//               ].map((card, index) => (
//                 <div className="card" key={index} onClick={() => onSent(card.text)}>
//                   <p>{card.text}</p>
//                   <img src={card.icon} alt="" />
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="result">
//             <div className="result-title">
//               <img src={assets.user_icon} alt="User" />
//               <p>{recentPrompt}</p>
//             </div>
//             <div className="result-data">
//               <img src={assets.gemini_icon} alt="Gemini" />
//               {loading ? (
//                 <div className="loader"><hr /><hr /><hr /></div>
//               ) : (
//                 <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//               )}
//             </div>
//           </div>
//         )}

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Enter a prompt"
//               onKeyDown={(e) => e.key === "Enter" && input.trim() && onSent(input)}
//             />
//             <div>
//               <img src={assets.gallery_icon} alt="Gallery" />
//               <img src={assets.mic_icon} alt="Mic" />
//               <img onClick={() => input.trim() && onSent(input)} src={assets.send_icon} alt="Send" />
//             </div>
//           </div>
//           <p className="bottom-info">Gemini may display inaccurate info. Double-check its responses.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;


// import React, { useContext } from "react";
// import { Context } from "../../context/Context";
// import "./Main.css";
// import { assets } from "../../assets/assets";

// const Main = () => {
//   const { darkMode, toggleDarkMode, onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

//   return (
//     <div className={`main ${darkMode ? "dark" : ""}`}>
//       {/* Navigation Bar */}
//       <div className="nav">
//         <p>Gemini</p>
//         <div className="nav-icons">
//           {/* Theme Toggle Icon */}
//           <img
//             src={darkMode ? assets.sun_icon : assets.moon_icon} 
//             alt="Toggle Theme"
//             onClick={toggleDarkMode}
//             className="theme-toggle"
//           />
//           {/* User Icon */}
//           <img src={assets.user_icon} alt="User" />
//         </div>
//       </div>

//       <div className="main-container">
//         {!showResult ? (
//           <>
//             <div className="greet">
//               <p><span>Hello Vaibhav</span></p>
//               <p>How can I help you?</p>
//             </div>

//             <div className="cards">
//               {[
//                 { text: "Suggest beautiful places to visit", icon: assets.compass_icon },
//                 { text: "Summarize urban planning", icon: assets.bulb_icon },
//                 { text: "Brainstorm team activities", icon: assets.message_icon },
//                 { text: "Improve this code", icon: assets.code_icon },
//               ].map((card, index) => (
//                 <div className="card" key={index} onClick={() => onSent(card.text)}>
//                   <p>{card.text}</p>
//                   <img src={card.icon} alt="" />
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="result">
//             <div className="result-title">
//               <img src={assets.user_icon} alt="User" />
//               <p>{recentPrompt}</p>
//             </div>
//             <div className="result-data">
//               <img src={assets.gemini_icon} alt="Gemini" />
//               {loading ? (
//                 <div className="loader"><hr /><hr /><hr /></div>
//               ) : (
//                 <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
//               )}
//             </div>
//           </div>
//         )}

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               onChange={(e) => setInput(e.target.value)}
//               value={input}
//               type="text"
//               placeholder="Enter a prompt"
//               onKeyDown={(e) => e.key === "Enter" && input.trim() && onSent(input)}
//             />
//             <div>
//               <img src={assets.gallery_icon} alt="Gallery" />
//               <img src={assets.mic_icon} alt="Mic" />
//               <img onClick={() => input.trim() && onSent(input)} src={assets.send_icon} alt="Send" />
//             </div>
//           </div>
//           <p className="bottom-info">Gemini may display inaccurate info. Double-check its responses.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;


import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  const { darkMode, toggleDarkMode, onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className={`main ${darkMode ? "dark" : ""}`}>
      {/* Navigation Bar */}
      <div className="nav">
        <p>Gemini</p>
        <div className="nav-icons">
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <img src={assets.user_icon} alt="User" />
        </div>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello Vaibhav</span></p>
              <p>How can I help you?</p>
            </div>

            <div className="cards">
              {[
                { text: "Suggest beautiful places to visit", icon: assets.compass_icon },
                { text: "Summarize urban planning", icon: assets.bulb_icon },
                { text: "Brainstorm team activities", icon: assets.message_icon },
                { text: "Improve this code", icon: assets.code_icon },
              ].map((card, index) => (
                <div className="card" key={index} onClick={() => onSent(card.text)}>
                  <p>{card.text}</p>
                  <img src={card.icon} alt="" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini" />
              {loading ? (
                <div className="loader"><hr /><hr /><hr /></div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt"
              onKeyDown={(e) => e.key === "Enter" && input.trim() && onSent(input)}
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img onClick={() => input.trim() && onSent(input)} src={assets.send_icon} alt="Send" />
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info. Double-check its responses.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
