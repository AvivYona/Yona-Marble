import { AppBar, Drawer, IconButton, List, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeIcon from "@mui/icons-material/Home";
import SinkIcon from "@mui/icons-material/Opacity";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ReviewsIcon from "@mui/icons-material/RateReview";

import { useState } from "react";
import { SideBarItem } from "./SideBarItem/SideBarItem";

export const NavSideBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeDrawer();
  };
  return (
    <AppBar
      position="fixed"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton
          edge="start"
          sx={{
            right: 15,
            color:"black",
            position: "fixed",
          }}
          onClick={openDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={closeDrawer}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(250,250,250,0.95)",
              color: "#222",
              width: 220,
              height: "auto",
            },
            dir: "rtl",
          }}
        >
          <List sx={{ direction: "rtl" }}>
            <SideBarItem
              text="אודות"
              icon={<InfoIcon />}
              onClick={() => handleScrollTo("about")}
            />
            <SideBarItem
              text="שיש למטבח"
              icon={<KitchenIcon />}
              onClick={() => handleScrollTo("kitchen")}
            />
            <SideBarItem
              text="שיש לאמבט"
              icon={<BathtubIcon />}
              onClick={() => handleScrollTo("bath")}
            />
            <SideBarItem
              text="עיצוב הבית"
              icon={<HomeIcon />}
              onClick={() => handleScrollTo("homedecor")}
            />
            <SideBarItem
              text="כיורים"
              icon={<SinkIcon />}
              onClick={() => handleScrollTo("sink")}
            />
            <SideBarItem
              text="צרו קשר"
              icon={<ContactPhoneIcon />}
              onClick={() => handleScrollTo("contactus")}
            />
            <SideBarItem
              text="ביקורות"
              icon={<ReviewsIcon />}
              onClick={() => handleScrollTo("reviews")}
            />
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
