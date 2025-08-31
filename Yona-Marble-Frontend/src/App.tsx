import style from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { About } from "./components/About/About";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Kitchen } from "./components/Kitchen/Kitchen";
import { Bath } from "./components/Bath/Bath";
import { HomeDecor } from "./components/HomeDecor/HomeDecor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Accessibility } from "accessibility";
import { useEffect } from "react";
import { Sink } from "./components/Sink/sink";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { IconsBox } from "./components/ContactUs/IconsBox/IconsBox";
import { WhatsappIcon } from "./components/WhatsappIcon/WhatsappIcon";
import { Reviews } from "./components/Reviews/Reviews";
import { NavSideBar } from "./components/NavSideBar/NavSideBar";

export const App = () => {
  useEffect(() => {
    const accessibilityOptions = {
      labels: {
        resetTitle: "איפוס הגדרות",
        closeTitle: "סגירת תפריט הנגישות",
        menuTitle: "תפריט נגישות",
        increaseText: "הגדלת טקסט",
        decreaseText: "הקטנת טקסט",
        increaseTextSpacing: "הגדלת ריווח בין אותיות",
        decreaseTextSpacing: "הקטנת ריווח בין אותיות",
        invertColors: "היפוך צבעים",
        grayHues: "גווני אפור",
        bigCursor: "סמן עכבר גדול",
        readingGuide: "מדריך קריאה",
        underlineLinks: "הדגשת קישורים",
        textToSpeech: "המרת טקסט לדיבור",
        speechToText: "המרת דיבור לטקסט",
        disableAnimations: "ביטול אנימציות",
        increaseLineHeight: "הגדלת ריווח בין שורות",
        decreaseLineHeight: "הקטנת ריווח בין שורות",
        hotkeyPrefix: "קיצור מקשים",
      },
      textToSpeechLang: "he-IL",
      speechToTextLang: "he-IL",
      textPixelMode: true,
      textSizeFactor: 4,

      session: {
        persistent: true,
      },
    };

    new Accessibility(accessibilityOptions);
  }, []);

  return (
    <div dir="rtl" className={style.container}>
      <ThemeProvider theme={theme}>
        <Router>
          <Analytics />
          <SpeedInsights />
          <NavSideBar />
          <Box
            sx={{
              backgroundRepeat: "repeat-y",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                scrollSnapType: "y mandatory",
                overflowY: "scroll",
                overflowX: "hidden",
                height: "100vh",
                backgroundImage:
                  "url('/images/backgrounds/elegant_hand_painted_alcohol_ink_background_with_gold_glitter_0609-min_Edited.webp')",
              }}
            >
              <div id="mainpage">
                <MainPage />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="kitchen">
                <Kitchen />
              </div>
              <div id="bath">
                <Bath />
              </div>
              <div id="homedecor">
                <HomeDecor />
              </div>
              <div id="sink">
                <Sink />
              </div>
              <div id="contactus">
                <ContactUs />
              </div>
              <div id="reviews">
                <Reviews />
              </div>
            </motion.div>
            <WhatsappIcon />
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                width: "100vw",
                zIndex: 1200,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <IconsBox />
            </Box>
          </Box>
        </Router>
        <ToastContainer rtl />
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};
