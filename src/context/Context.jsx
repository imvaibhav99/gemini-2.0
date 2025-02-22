import { createContext, useState, useEffect } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  // Load dark mode state from localStorage (default: false)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Apply dark mode to entire document
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Chat states
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState("");
  const [loading, setLoading] = useState(false);

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setRecentPrompt("");
    setResultData("");
    setInput("");
  };

  const onSent = async (prompt) => {
    let finalPrompt = prompt?.trim() || input.trim();
    if (!finalPrompt) return;

    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(finalPrompt);
    setPrevPrompts((prev) => [...prev, finalPrompt]);

    try {
      const response = await run(finalPrompt);
      let formattedResponse = response
        .split("**")
        .map((part, index) => (index % 2 === 1 ? `<b>${part}</b>` : part))
        .join("")
        .split("*")
        .join("<br>");

      setResultData(formattedResponse);
    } catch (error) {
      setResultData("An error occurred while fetching the response.");
    }

    setLoading(false);
    setInput("");
  };

  return (
    <Context.Provider
      value={{
        darkMode,
        toggleDarkMode,
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
