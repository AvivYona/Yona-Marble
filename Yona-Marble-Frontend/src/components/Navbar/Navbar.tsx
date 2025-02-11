import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { NavBarButton } from "./NavBarButton/NavBarButton";

export const Navbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Breakpoint for responsiveness

  const navbarHeight = isSmallScreen ? "8vh" : "6vh"; // Dynamic navbar height
  const logoHeight = `calc(${navbarHeight} * 0.8)`; // Set logo height relative to navbar height

  const linkMap: Map<string, string> = new Map([
    ["/", "ראשי"],
    ["/about", "אודות"],
    ["/catalog", "קטלוג"],
    ["/contact", "צור קשר"],
  ]);

  return (
    <AppBar
      position="sticky"
      className={style.container}
      sx={{ bgcolor: theme.palette.background.paper }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          height: navbarHeight, // Apply dynamic height to the navbar
        }}
      >
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
              height: logoHeight, // Adjust logo height based on navbar height
              objectFit: "contain",
            }}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};
