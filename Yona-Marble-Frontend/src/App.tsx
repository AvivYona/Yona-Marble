import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
import React, { useEffect } from "react";
import { Sink } from "./components/Sink/sink";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { IconsBox } from "./components/ContactUs/IconsBox/IconsBox";
import { WhatsappIcon } from "./components/WhatsappIcon/WhatsappIcon";
import { Reviews } from "./components/Reviews/Reviews";

export const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  };
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
              position: "relative",
            }}
          >
            <AppBar
              position="fixed"
              sx={{ background: "transparent", boxShadow: "none" }}
            >
              <Toolbar sx={{ justifyContent: "flex-end" }}>
                <IconButton
                  edge="start"
                  color="primary"
                  sx={{
                    right: 0,
                    position: "fixed",
                  }}
                  onClick={openDrawer}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={closeDrawer}
                  PaperProps={{
                    sx: {
                      backgroundColor: "rgba(250,250,250,0.95)",
                      color: "#222",
                      width: 220,
                      height: "auto",
                    },
                    dir: "rtl",
                  }}
                >
                  <List sx={{ direction: "rtl" }}>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleScrollTo("about")}>
                        <ListItemText>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ textAlign: "right" }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ p: 1, textAlign: "right" }}
                            >
                              אודותינו
                            </Typography>
                          </motion.div>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleScrollTo("kitchen")}>
                        <ListItemText>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ textAlign: "right" }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ p: 1, textAlign: "right" }}
                            >
                              שיש למטבח
                            </Typography>
                          </motion.div>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleScrollTo("bath")}>
                        <ListItemText>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ textAlign: "right" }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ p: 1, textAlign: "right" }}
                            >
                              שיש לאמבט
                            </Typography>
                          </motion.div>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleScrollTo("homedecor")}
                      >
                        <ListItemText>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ textAlign: "right" }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ p: 1, textAlign: "right" }}
                            >
                              עיצוב הבית
                            </Typography>
                          </motion.div>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleScrollTo("sink")}>
                        <ListItemText>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ textAlign: "right" }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ p: 1, textAlign: "right" }}
                            >
                              כיורים
                            </Typography>
                          </motion.div>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleScrollTo("contactus")}
                      >
                        <ListItemText>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ textAlign: "right" }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ p: 1, textAlign: "right" }}
                            >
                              צרו קשר
                            </Typography>
                          </motion.div>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => handleScrollTo("reviews")}>
                        <ListItemText>
                          <motion.div
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ textAlign: "right" }}
                          >
                            <Typography
                              variant="h6"
                              sx={{ p: 1, textAlign: "right" }}
                            >
                              ביקורות
                            </Typography>
                          </motion.div>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Drawer>
              </Toolbar>
            </AppBar>
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
