import { Box, IconButton } from "@mui/material";
import theme from "../../../../theme";

interface Props {
  href: string;
  Icon: React.ElementType;
  additionalInfo: string;
}
export const IconBox = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        width: "15%",
      }}
    >
      <IconButton
        href={props.href}
        target="_blank"
        rel="noopener"
        sx={{
          color: theme.palette.primary.contrastText,
        }}
      >
        <props.Icon sx={{ fontSize: "calc(2vh + 2vw)" }} />
      </IconButton>
    </Box>
  );
};
