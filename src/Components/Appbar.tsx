import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const NavigationItems = [
  {
    title: "Hotels",
    to: "/hotels",
  },
];

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {NavigationItems.map((item, index) => (
            <NavLink to={item.to}>{item.title}</NavLink>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
