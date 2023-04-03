
// function App() {
//   const theme = useMemo(() => createTheme(themeSettings()), []);

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Navbar />
//         <Toaster />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/summary" element={<Summary />} />
//           <Route path="/paragraph" element={<Paragraph />} />
//           <Route path="/chatbot" element={<ChatBot />} />
//           <Route path="/js-converter" element={<JsConverter />} />
//           <Route path="/scifi-image" element={<ScifiImage />} />
//         </Routes>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

// import { Route, Navigate, Routes } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Navbar from "./components/Navbar";
// import Toaster from "./components/Toaster";
// import Homepage from "./pages/Homepage";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Summary from "./pages/Summary";
// import Paragraph from "./pages/Paragraph";
// import ChatBot from "./pages/ChatBot";
// import JsConverter from "./pages/JsConverter";
// import ScifiImage from "./pages/ScifiImage";
// import { createTheme } from "./theme";
// import { themeSettings } from "./settings";


import "./App.css";
import { useState} from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { themeSettings } from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer"
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import ChatBot from "./pages/ChatBot";
import JsConverter from "./pages/JsConverter";
import ScifiImage from "./pages/ScifiImage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const theme = useMemo(() => createTheme(themeSettings()), []);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    return <Navigate to="/" />;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />

        <Toaster />
        <Routes>
          <Route
            path="/" element={<Homepage />} 
            // element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />}
          />
          <Route
            path="/register"
            element={<Register handleAuthentication={handleAuthentication} />}
          />
          <Route
            path="/login"
            element={<Login handleAuthentication={handleAuthentication} />}
          />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
