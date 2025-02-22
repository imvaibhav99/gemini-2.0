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
