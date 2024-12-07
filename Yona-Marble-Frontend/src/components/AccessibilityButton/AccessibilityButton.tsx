import React, { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
// not working !!!, need to talk to vee, its 500
export const AccessibilityButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentFontSize, setCurrentFontSize] = useState(16); // Default text size
  const [currentFilter, setCurrentFilter] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Accessibility functions
  const increaseFontSize = () => {
    const newFontSize = currentFontSize + 2;
    setCurrentFontSize(newFontSize);
    document.body.style.fontSize = `${newFontSize}px`;
  };

  const decreaseFontSize = () => {
    const newFontSize = Math.max(currentFontSize - 2, 12); // Minimum size 12px
    setCurrentFontSize(newFontSize);
    document.body.style.fontSize = `${newFontSize}px`;
  };

  const toggleGrayscale = () => {
    const isGrayscale = currentFilter === "grayscale(100%)";
    setCurrentFilter(isGrayscale ? "" : "grayscale(100%)");
    document.body.style.filter = isGrayscale ? "none" : "grayscale(100%)";
  };

  const toggleHighContrast = () => {
    const isHighContrast = currentFilter === "contrast(200%)";
    setCurrentFilter(isHighContrast ? "" : "contrast(200%)");
    document.body.style.filter = isHighContrast ? "none" : "contrast(200%)";
  };

  const resetAccessibility = () => {
    setCurrentFontSize(16); // Reset to default size
    setCurrentFilter("");

    document.body.style.fontSize = "16px";
    document.body.style.filter = "none";
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        zIndex: 1000,
      }}
    >
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          minWidth: "48px",
          minHeight: "48px",
          borderRadius: "50%",
          backgroundColor: "#3f51b5",
          color: "#fff",
          "&:hover": { backgroundColor: "#303f9f" },
          position: "relative", // Ensure button is positioned correctly
          zIndex: 1100, // Ensure button is always on top of the filter
        }}
      >
        <AccessibilityNewIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: -3 }} // Adjust menu position
      >
        <MenuItem
          onClick={() => {
            increaseFontSize();
            handleClose();
          }}
        >
          הגדל טקסט
        </MenuItem>
        <MenuItem
          onClick={() => {
            decreaseFontSize();
            handleClose();
          }}
        >
          הקטן טקסט
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleGrayscale();
            handleClose();
          }}
        >
          גווני אפור
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleHighContrast();
            handleClose();
          }}
        >
          ניגודיות גבוהה
        </MenuItem>
        <MenuItem
          onClick={() => {
            resetAccessibility();
            handleClose();
          }}
        >
          איפוס
        </MenuItem>
      </Menu>
    </Box>
  );
};
