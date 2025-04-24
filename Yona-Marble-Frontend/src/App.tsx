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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              scrollSnapType: "y mandatory",
              overflowY: "scroll",
              height: "100vh",
              backgroundColor: "#fff",
            }}
          >
            <Box sx={{ bgcolor: "#ffffff" }}>
              <MainPage />
            </Box>
            <Box sx={{ bgcolor: "#ffffff" }}>
              <About />
            </Box>
            <Box sx={{ bgcolor: "#ffffff" }}>
              <ContactUs />
            </Box>
            <Box sx={{ bgcolor: "#ffffff" }}>
              <Kitchen />
            </Box>
            <Box sx={{ bgcolor: "#ffffff" }}>
              <Bath />
            </Box>
            <Box sx={{ bgcolor: "#ffffff" }}>
              <HomeDecor />
            </Box>
            <Box sx={{ bgcolor: "#ffffff" }}>
              <Sink />
            </Box>
          </motion.div>
        </Router>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};
