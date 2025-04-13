import { Navbar } from "./components/Navbar/Navbar";
import style from "./App.module.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { About } from "./components/About/About";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Kitchen } from "./components/Kitchen/Kitchen";
import { Bath } from "./components/Bath/Bath";
import { HomeDecor } from "./components/HomeDecor/HomeDecor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Accessibility } from "accessibility";
export const App = () => {
  window.addEventListener(
    "load",
    function () {
      new Accessibility({});
    },
    false
  );
  return (
    <div dir="rtl" className={style.container}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Analytics />
          <SpeedInsights />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/bath" element={<Bath />} />
            <Route path="/homeDecor" element={<HomeDecor />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};
