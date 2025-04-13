import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import theme from "../../../theme";
import serviceInfo from "../../../information/about/serviceInfo.json";
import { useNavigate } from "react-router-dom";

interface Props {
  index: number;
}
export const ServiceCard = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ width: { xs: "100%", sm: "48%", md: "30%" }, cursor: "pointer" }}
      onClick={() => navigate(serviceInfo[props.index].href)}
    >
      <Card
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={serviceInfo[props.index].imageLocation}
          alt={serviceInfo[props.index].title}
        />
        <CardContent sx={{ height: "12vh" }}>
          <Typography variant="h5">{serviceInfo[props.index].title}</Typography>
          <Typography variant="body2">
            {serviceInfo[props.index].description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
