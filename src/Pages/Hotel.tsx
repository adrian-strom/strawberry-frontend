import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import RoomCategory from "../Types/RoomCategory";
import Room from "../Types/Room";

// Use something like Axios for HTTP requests and responses. Here I am only using some mocked data.
const rooms: Room[] = [
  {
    id: 1,
    roomNumber: 100,
    category: RoomCategory.SingleRoom,
  },
  {
    id: 2,
    roomNumber: 101,
    category: RoomCategory.SingleRoom,
  },
  {
    id: 3,
    roomNumber: 102,
    category: RoomCategory.SingleRoom,
  },
  {
    id: 4,
    roomNumber: 103,
    category: RoomCategory.SingleRoom,
  },
];

const Hotel = () => {
  return (
    <Grid container spacing={2}>
      {rooms.map((room, index) => (
        <Grid item key={index} md={4}>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "text.primary",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {room.id}
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink to="/hotels/1">
                <Button
                  sx={{ backgroundColor: "primary.main" }}
                  size="small"
                  variant="contained"
                >
                  Book
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Hotel;
