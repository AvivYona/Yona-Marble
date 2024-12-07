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
        fontSize: "1.2rem",
        position: "relative", // To position the underline
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "0.3rem", // Adjust thickness of the underline
          backgroundColor: "white", // Set the underline color
          transform: "scaleX(0)", // Initially scale the underline to 0 (invisible)
          transformOrigin: "bottom right",
          transition: "transform 0.3s ease, transform-origin 0.3s ease", // Fade effect
        },
        "&:hover:after": {
          transform: "scaleX(1)", // On hover, scale the underline to 1 (visible)
          transformOrigin: "bottom left",
        },
        // Make the underline persist when the link is active
        "&.active:after": {
          transform: "scaleX(1)", // Keep the underline visible when active
          transformOrigin: "bottom left",
        },
      }}
    >
      {props.text}
    </Button>
  );
};
