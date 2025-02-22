// import { createContext, useState } from "react";
// import run from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompts, setPrevPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [resultData, setResultData] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Function to add a delay effect when displaying words (Optional)
//   const delayPara = (index, nextWord) => {
//     setTimeout(() => {
//       setResultData((prev) => prev + " " + nextWord);
//     }, index * 100); // Adjust delay as needed
//   };

//   const newChat = () => {
//     setLoading(false);
//     setShowResult(false);
//     setRecentPrompt("");
//     setResultData("");
//     setInput("");
//   };

//   const onSent = async (prompt) => {
//     let finalPrompt = prompt?.trim() || input.trim();
//     if (!finalPrompt) return; // Prevent empty API calls

//     setResultData("");
//     setLoading(true);
//     setShowResult(true);
//     setRecentPrompt(finalPrompt);
//     setPrevPrompts((prev) => [...prev, finalPrompt]);

//     try {
//       const response = await run(finalPrompt);

//       // Process response formatting
//       let formattedResponse = response
//         .split("**")
//         .map((part, index) => (index % 2 === 1 ? `<b>${part}</b>` : part))
//         .join("");

//       formattedResponse = formattedResponse.split("*").join("<br>");

//       setResultData(formattedResponse);
//     } catch (error) {
//       setResultData("An error occurred while fetching the response.");
//     }

//     setLoading(false);
//     setInput("");
//   };

//   const contextValue = {
//     prevPrompts,
//     setPrevPrompts,
//     onSent,
//     setRecentPrompt,
//     recentPrompt,
//     showResult,
//     loading,
//     resultData,
//     input,
//     setInput,
//     newChat,
//   };

//   return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
// };

// export default ContextProvider;


// import { createContext, useState, useEffect } from "react";
// import run from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = ({ children }) => {
//   // Load dark mode state from localStorage (default: false)
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("darkMode") === "true";
//   });

//   // Apply dark mode to body and sidebar
//   useEffect(() => {
//     document.body.classList.toggle("dark-mode", darkMode);
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode]);

//   // Toggle dark mode state
//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   // Chat states
//   const [input, setInput] = useState("");
//   const [recentPrompt, setRecentPrompt] = useState("");
//   const [prevPrompts, setPrevPrompts] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [resultData, setResultData] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Starts a new chat session
//   const newChat = () => {
//     setLoading(false);
//     setShowResult(false);
//     setRecentPrompt("");
//     setResultData("");
//     setInput("");
//   };

//   // Handles sending a user prompt to the AI
//   const onSent = async (prompt) => {
//     const finalPrompt = prompt?.trim() || input.trim();
//     if (!finalPrompt) return;

//     // Update UI before sending request
//     setLoading(true);
//     setShowResult(true);
//     setRecentPrompt(finalPrompt);
//     setPrevPrompts((prev) => [...prev, finalPrompt]);
//     setResultData("");

//     try {
//       const response = await run(finalPrompt);
//       const formattedResponse = response
//         .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold **text**
//         .replace(/\*(.*?)\*/g, "<br>$1"); // Line breaks for *text*

//       setResultData(formattedResponse);
//     } catch (error) {
//       setResultData("⚠️ An error occurred while fetching the response.");
//       console.error("API Error:", error);
//     }

//     setLoading(false);
//     setInput("");
//   };

//   return (
//     <Context.Provider
//       value={{
//         darkMode,
//         toggleDarkMode,
//         prevPrompts,
//         setPrevPrompts,
//         onSent,
//         setRecentPrompt,
//         recentPrompt,
//         showResult,
//         loading,
//         resultData,
//         input,
//         setInput,
//         newChat,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;


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
