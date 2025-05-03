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
          <Box
            sx={{
              backgroundRepeat: "repeat-y",
              backgroundSize: "cover",
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
                  "url('/images/backgrounds/elegant_hand_painted_alcohol_ink_background_with_gold_glitter_0609-min.jpg')",
              }}
            >
              <MainPage />
              <About />
              <Kitchen />
              <Bath />
              <HomeDecor />
              <Sink />
              <ContactUs />
            </motion.div>
          </Box>
        </Router>
        <ToastContainer rtl />
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};
