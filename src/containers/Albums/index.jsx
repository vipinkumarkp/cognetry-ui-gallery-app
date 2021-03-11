import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import AlbumCard from "../../components/AlbumCard";

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

function Main(props) {
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
              <AlbumCard albumId={1234567} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default withRouter(withStyles(styles)(Main));
