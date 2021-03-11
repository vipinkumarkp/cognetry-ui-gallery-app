import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const logo = require("../../assets/images/logo.svg");

const styles = (theme) => ({
  appBar: {
    position: "relative",
    boxShadow: "none",
    backgroundColor: "white",
  },
  inline: {
    display: "inline",
  },
  flex: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  productLogo: {
    display: "inline-block",
    marginLeft: 32,
    paddingLeft: 24,
  },
  tagline: {
    display: "inline-block",
    marginLeft: 10,
  },
  iconContainer: {
    display: "none",
  },
  iconButton: {
    float: "right",
  },
  tabContainer: {
    marginLeft: 32,
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: "auto",
  },
});

function TopBar(props) {
  const { classes } = props;
  return (
    <AppBar position="absolute" color="default" className={classes.appBar}>
      <Toolbar>
        <Grid container spacing={5} alignItems="baseline">
          <Grid item xs={12} className={classes.flex}>
            <div className={classes.inline}>
              <Typography variant="h6" color="inherit" noWrap>
                <Link to="/" className={classes.link}>
                  <img width={20} src={logo} alt="" />
                  <span className={classes.tagline}>Album</span>
                </Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(withStyles(styles)(TopBar));
