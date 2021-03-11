import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Link, withRouter } from "react-router-dom";
import FilterIcon from '@material-ui/icons/Filter';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
  },
  grid: {
    width: 1200,
    marginTop: 8,
  },
  paper: {
    textAlign: "left",
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  outlinedButtom: {
    textTransform: "uppercase",
  },
  actionButtom: {
    textTransform: "uppercase",
    width: 152,
  },
  blockCenter: {
    textAlign: "center",
  },
  block: {},
  box: {
    marginBottom: 40,
    height: 65,
  },
  inlining: {
    display: "inline-block",
    marginRight: 10,
  },
  buttonBar: {
    display: "flex",
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  noBorder: {
    borderBottomStyle: "hidden",
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },
});
const handleGalleryPage = () => {

}

function Home(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            spacing={4}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            <Grid item xs={12} md={12}>
            <Link to="/albums" className={classes.link}>

            <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<FilterIcon />}
        onClick={handleGalleryPage}
      >
        Simple Gallery
      </Button>
      </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default withRouter(withStyles(styles)(Home));
