import { Box, SvgIconTypeMap } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import DirectionsIcon from "@mui/icons-material/Directions";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IconBox } from "./IconBox/IconBox";

interface IconLink {
  href: string;
  additionalInfo: string;
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
}
export const IconsBox = () => {
  const iconLinks: IconLink[] = [
    {
      href: "tel:0505470523",
      additionalInfo: "050-5470-523",
      Icon: PhoneIcon,
    },
    {
      href: "mailto:shalomyona5@gmail.com",
      additionalInfo: "shalomyona5@gmail.com",
      Icon: EmailIcon,
    },
    {
      href: "https://www.waze.com/he/live-map/directions/%D7%A9%D7%99%D7%A9-%D7%99%D7%95%D7%A0%D7%94-%D7%94%D7%9E%D7%A9%D7%91%D7%99%D7%A8-32-%D7%97%D7%95%D7%9C%D7%95%D7%9F?to=place.w.22806848.228134017.335280",
      additionalInfo: "המשביר 32 חולון",
      Icon: DirectionsIcon,
    },
    {
      href: "https://www.facebook.com/YonaMarble/",
      additionalInfo: "YonaMarble",
      Icon: FacebookIcon,
    },
    {
      href: "",
      additionalInfo: "א׳ - ה׳ 07:00 עד 17:00 \n  ו׳ וערבי חג 07:00 עד 11:00",
      Icon: AccessTimeIcon,
    },

    {
      href: "https://www.instagram.com/yonamarble_ltd/",
      additionalInfo: "yonamarble_ltd",
      Icon: InstagramIcon,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: { xs: "100%", md: "80%" },
        mx: "auto",
        p: "2",
      }}
    >
      {iconLinks.map((iconLink) => (
        <IconBox
          key={iconLink.href}
          href={iconLink.href}
          Icon={iconLink.Icon}
          additionalInfo={iconLink.additionalInfo}
        />
      ))}
    </Box>
  );
};
