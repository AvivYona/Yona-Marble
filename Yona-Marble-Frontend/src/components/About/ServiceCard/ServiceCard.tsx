import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import theme from "../../../theme";
import serviceInfo from "../../../information/about/serviceInfo.json";
interface Props {
  index: number;
}
export const ServiceCard = (props: Props) => {
  return (
    <Box sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}>
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
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {serviceInfo[props.index].title}
          </Typography>
          <Typography variant="body2">
            {serviceInfo[props.index].description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
