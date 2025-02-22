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
