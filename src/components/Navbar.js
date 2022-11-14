import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Cake Shop
            </Typography>
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b": ""};
              }}  sx={{ color: "#fff", textTransform: "none" }} >  Home  </Button>
            <Button component={NavLink} to="/Contact" sx={{ color: "#fff", textTransform: "none" }} style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b": ""};
              }}>
              Contact
            </Button>
            <Button component={NavLink} to="/LoginReg" sx={{ color: "#fff", textTransform: "none" }} style={({ isActive }) => {
                return { backgroundColor: isActive ? "#6d1b7b": ""};
              }}>
              Login / Registraction
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
