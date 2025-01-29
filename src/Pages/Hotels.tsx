import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

// Use something like Axios for HTTP requests and responses. Here I am only using some mocked data.
const hotels = [
  {
    id: 1,
    name: "Clarion Hotel® The Hub",
    description:
      "Oslos beste beliggenhet, rett ved Oslo S og Jernbanetorget. Byr på en unik hotellopplevelse.",
  },
  {
    id: 2,
    name: "Clarion Hotel® Oslo Airport",
    description:
      "Clarion Hotel Oslo Airport er et av Norges største konferansehotell og ligger kun åtte minutter fra Gardermoen med shuttlebuss.",
  },
  {
    id: 3,
    name: "Quality Hotel™ Waterfront",
    description:
      "Rett ved Göta Älv i bydelen Majorna finner du Quality Hotel™ Waterfront i Göteborg.",
  },
  {
    id: 4,
    name: "Quality Hotel™ View",
    description:
      "Quality Hotel View er et komplett konferansehotell i hjertet av den nye bydelen Hyllie i Malmø.",
  },
];

const Hotels = () => {
  return (
    <Grid container spacing={2}>
      {hotels.map((hotel, index) => (
        <Grid item key={index} md={4}>
          <Card sx={{ height: "200px" }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {hotel.name}
              </Typography>
              <Typography variant="body2">{hotel.description}</Typography>
            </CardContent>
            <CardActions sx={{ height: "60px" }}>
              <NavLink to={`/hotels/${hotel.id}`}>
                <Button size="small" variant="contained">
                  Tilgjengelige rom
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Hotels;
