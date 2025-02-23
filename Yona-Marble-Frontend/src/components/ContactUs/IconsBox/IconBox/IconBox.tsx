import {
  Box,
  IconButton,
  SvgIconTypeMap,
  Tooltip,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import theme from "../../../../theme";
import { useState } from "react";

interface Props {
  href: string;
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  additionalInfo: string;
}
export const IconBox = (props: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500); // Tooltip disappears after 1.5 seconds
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        width: {
          xs: "100%", // Full width for extra-small screens
          sm: "50%", // Two cards per row for small-mid screens
          md: "33%", // Three cards per row for medium+ screens
        },
        p: 1,
      }}
    >
      <IconButton
        href={props.href}
        target="_blank"
        rel="noopener"
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        <props.Icon sx={{ fontSize: "calc(1.5vh + 1.5vw)" }} />
      </IconButton>
      <Tooltip
        title="! הועתק"
        open={showTooltip}
        disableHoverListener // Prevents tooltip from showing on hover
        disableFocusListener // Prevents tooltip from showing on focus
        disableTouchListener // Prevents tooltip from showing on touch
      >
        <Box
          sx={{
            cursor: "pointer", // Make it look clickable
            wordWrap: "break-word",
            whiteSpace: "normal", // Allow text to wrap to the next line
            maxWidth: "98%",
          }}
          onClick={() => handleCopyToClipboard(`${props.additionalInfo}`)}
        >
          <Typography variant="subtitle2">{props.additionalInfo}</Typography>
        </Box>
      </Tooltip>
    </Box>
  );
};
