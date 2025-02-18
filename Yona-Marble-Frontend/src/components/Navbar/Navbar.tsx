import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { NavBarButton } from "./NavBarButton/NavBarButton";
import MenuIcon from "@mui/icons-material/Menu"; // Import the menu icon
import { useState } from "react";

export const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:720px)"); // Custom breakpoint
  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer open/close

  const linkMap: Map<string, string> = new Map([
    ["/", "ראשי"],
    ["/about", "אודות"],
    ["/catalog", "קטלוג"],
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
      sx={{ width: 250 }}
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
          height: "8vh", // Apply dynamic height to the navbar
        }}
      >
        {isSmallScreen ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: "6vh" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
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
            src={"/assets/images/Logo/YONA_MARBLE_Heebo.png"}
            alt="Logo"
            style={{
              objectFit: "contain",
              marginTop: "1vh",
            }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
