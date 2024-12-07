import { Navbar } from "./components/Navbar/Navbar";
import style from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { About } from "./components/About/About";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const App = () => {
  return (
    <div dir="rtl" className={style.container}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};
