import { Button } from "@mui/material";

interface Props {
  handleTogle: () => void;
}
export const ShowMoreButton = (props: Props) => {
  return (
    <Button
      variant="text"
      sx={{
        color: "black",
        px: 0,
        minWidth: 0,
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "1rem",
        display: "inline-flex",
        alignItems: "center",
        borderBottom: "2px solid #181A20", // קו תחתון
        borderRadius: 0,
      }}
      onClick={props.handleTogle}
    >
      קרא עוד
    </Button>
  );
};
