import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Fade,
} from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { NavBarButton } from "./NavBarButton/NavBarButton";
import MenuIcon from "@mui/icons-material/Menu"; // Import the menu icon
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon
import { useState } from "react";
export const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:720px)"); // Custom breakpoint
  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer open/close
  const navBarHeight = "8vh";
  const linkMap: Map<string, string> = new Map([
    ["/", "ראשי"],
    ["/about", "אודות"],
    ["/kitchen", "שיש למטבח"],
    ["/bath", "שיש לאמבט"],
    ["/homeDecor", "עיצוב הבית"],
    ["/contact", "צור קשר"],
  ]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: "100%" }} // Updated marginTop
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[...linkMap.keys()].map((key) => (
          <ListItem
            key={linkMap.get(key)}
            component={Link}
            to={key}
            sx={{
              textAlign: "right",
              "&:hover": {
                backgroundColor: theme.palette.action.hover, // Use theme's hover color
                cursor: "pointer", // Change cursor to pointer on hover
                transform: "translateX(-5px)", // Optional: Add a slight movement on hover
                transition: "transform 0.2s ease, background-color 0.2s ease", // Smooth transition
              },
            }}
          >
            <ListItemText primary={linkMap.get(key)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      className={style.container}
      sx={{ bgcolor: theme.palette.background.paper }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: navBarHeight, // Apply dynamic height to the navbar
        }}
      >
        {isSmallScreen ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(!drawerOpen)} // Updated toggle logic
              sx={{
                transition: "transform 0.3s ease-in-out",
                position: "relative",
                width: "6vh",
                height: "6vh",
              }}
            >
              <Fade in={!drawerOpen} timeout={300} unmountOnExit>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: !drawerOpen ? "scale(1)" : "scale(0)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <MenuIcon sx={{ fontSize: "6vh" }} />
                </Box>
              </Fade>
              <Fade in={drawerOpen} timeout={300} unmountOnExit>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: drawerOpen ? "scale(1)" : "scale(0)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <CloseIcon
                    sx={{ fontSize: "6vh", transform: "rotate(180deg)" }}
                  />
                </Box>
              </Fade>
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              disableBackdropTransition={false}
              disableDiscovery={false}
              ModalProps={{
                BackdropProps: {
                  invisible: true,
                },
              }}
              SlideProps={{
                timeout: 400,
                easing: {
                  enter: "ease-in-out",
                  exit: "ease-in-out",
                },
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(18, 18, 18, 0.7)",
                  color: "#fff",
                  transition: "transform 0.4s ease-in-out",
                  mt: navBarHeight, // offset to start below the navbar
                  width: "27vw", // not full width
                  marginLeft: "auto",
                  height: "100vh", // Updated to make sidebar full height
                  borderRadius: 2,
                  boxShadow: 3,
                },
              }}
            >
              {list()}
            </SwipeableDrawer>
          </>
        ) : (
          <Box display="flex" flexWrap={isSmallScreen ? "wrap" : "nowrap"}>
            {[...linkMap.keys()].map((key) => (
              <Box
                mr={{ xs: "0.5vw", sm: "1vw" }} // Adjust spacing based on screen size
                key={linkMap.get(key)}
              >
                <NavBarButton to={key} text={linkMap.get(key) ?? ""} />
              </Box>
            ))}
          </Box>
        )}

        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={"/images/yona-marble-logo.png"}
            alt="Logo"
            style={{
              objectFit: "contain",
              paddingTop: "2vh",
              paddingBottom: "1vh",
              width: isSmallScreen ? "60vw" : "auto",
            }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
