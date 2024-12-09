import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { NavBarButton } from "./NavBarButton/NavBarButton";
export const Navbar = () => {
  const linkMap: Map<string, string> = new Map([
    ["/", "ראשי"],
    ["/about", "אודות"],
    ["/marbleKitchen", "שיש למטבח"],
    ["/marbleBath", "שיש לאמבטיה"],
  ]);

  return (
    <AppBar position="static" className={style.container}>
      <Toolbar sx={{ justifyContent: "space-between", height: "6vh" }}>
        <Box display={"flex"}>
          {[...linkMap.keys()].map((key) => (
            <Box mr={"1vw"} key={linkMap.get(key)}>
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
            <img
              src={"/assets/images/Logo/YONA_MARBLE_Heebo.png"}
              alt="Logo"
              style={{
                height: "7vh", // Adjust the size to fit your navbar
                marginTop: "1vh",
                objectFit: "contain",
              }}
            />
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
