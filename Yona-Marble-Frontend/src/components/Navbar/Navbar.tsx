import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { NavBarButton } from "./NavBarButton/NavBarButton";
import { AccessibilityButton } from "../AccessibilityButton/AccessibilityButton";
export const Navbar = () => {
  const linkMap: Map<string, string> = new Map([
    ["/", "ראשי"],
    ["/about", "אודות"],
    ["/marbleKitchen", "שיש למטבח"],
    ["/marbleBath", "שיש לאמבטיה"],
  ]);

  return (
    <AppBar position="static" className={style.container}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display={"flex"}>
          {[...linkMap.keys()].map((key) => (
            <Box mr={"1vw"}>
              <NavBarButton to={key} text={linkMap.get(key) ?? ""} />
            </Box>
          ))}
        </Box>

        <Typography variant="h6">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "wrap",
            }}
          >
            MyLogo
          </Link>
        </Typography>
        <AccessibilityButton />
      </Toolbar>
    </AppBar>
  );
};
