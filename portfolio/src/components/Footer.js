import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<Facebook />} className={classes.root} />
      <a target='_blank' href="https://www.linkedin.com/in/aleksandr-gorbach/"><BottomNavigationAction icon={<LinkedIn />} className={classes.root} /></a>
      <a target='_blank' href="https://www.instagram.com/aleks_gorbach/"><BottomNavigationAction icon={<Instagram />} className={classes.root} /></a>
    </BottomNavigation>
  );
};
export default Footer;