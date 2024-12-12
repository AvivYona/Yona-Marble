import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  to: string;
}

export const NavBarButton = (props: Props) => {
  return (
    <Button
      color="inherit"
      component={NavLink}
      to={props.to}
      sx={{
        fontSize: { xs: "0.8rem", sm: "1rem", lg: "1.2rem" }, // Responsive font sizes
        position: "relative",
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "0.3rem",
          backgroundColor: "white",
          transform: "scaleX(0)",
          transformOrigin: "bottom right",
          transition: "transform 0.3s ease, transform-origin 0.3s ease",
        },
        "&:hover:after": {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
        "&.active:after": {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      }}
    >
      {props.text}
    </Button>
  );
};
