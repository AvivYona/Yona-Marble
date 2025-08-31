import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  text: string;
  onClick: () => void;
  icon: ReactNode;
}
export const SideBarItem = (props: Props) => {
  return (
    <ListItem disablePadding>
      <motion.div
        style={{ width: "100%" }}
        whileHover={{
          backgroundColor: "rgba(0,0,0,0.05)",
        }}
      >
        <ListItemButton onClick={() => props.onClick()} sx={{ width: "100%" }}>
          <ListItemText>
            <Typography variant="h6" sx={{ p: 1, textAlign: "right" }}>
              {props.text}
            </Typography>
          </ListItemText>
          <ListItemIcon sx={{ color: "black" }}>{props.icon}</ListItemIcon>
        </ListItemButton>
      </motion.div>
    </ListItem>
  );
};
