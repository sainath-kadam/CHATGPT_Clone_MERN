// import React from "react";
// import { Box, Typography, useTheme } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// const Navbar = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const loggedIn = JSON.parse(localStorage.getItem("authToken"));

//   //handle logout
//   const handleLogout = async () => {
//     try {
//       await axios.post("/api/v1/auth/logout");
//       localStorage.removeItem("authToken");
//       toast.success("logout successfully ");
//       navigate("/login");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <Box
//       width={"100%"}
//       backgroundColor={theme.palette.background.alt}
//       p="1rem 6%"
//       textAlign={"center"}
//       sx={{ boxShadow: 5, mb: 2}}
//     >
//       <Typography variant="h1" color="primary" fontWeight="bold">
//         AI GPT Clone
//       </Typography>
//       {loggedIn ? (
//         <>
//           <NavLink to="/" p={5}>
//             Home
//           </NavLink>
//           <NavLink to="/login" onClick={handleLogout} p={1}>
//             Logout
//           </NavLink>
//         </>
//       ) : (
//         <>
//           <NavLink to="/register" p={1}>
//             Sign Up
//           </NavLink>
//           <NavLink to="/login" p={1}>
//             Sign In
//           </NavLink>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const drawerContent = (
    <List>
      <NavLink to="/" onClick={() => setOpen(false)} color="inherit">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </NavLink>
      {loggedIn && (
        <NavLink to="/login" onClick={handleLogout} color="inherit">
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </NavLink>
      )}
      {!loggedIn && (
        <>
          <NavLink to="/register" onClick={() => setOpen(false)} color="inherit">
            <ListItem button>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </NavLink>
          <NavLink to="/login" onClick={() => setOpen(false)} color="inherit">
            <ListItem button>
              <ListItemText primary="Sign In" />
            </ListItem>
          </NavLink>
        </>
      )}
    </List>
  );

  return (
    <>
      <Box
        width={"100%"}
        bgcolor="#161616	"
        p="0.5rem 6%"
        textAlign="center"
        sx={{ boxShadow: 2, mb: 2 }}
      >
        <IconButton
          sx={{ color: "white" }}
          variant="h2"
          
          edge="start"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h2" color="primary" fontWeight="bold" sx={{ flexGrow: 1 }}>
          AI  GPT 
        </Typography>
      </Box>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
