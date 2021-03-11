import React, { useState } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import PhotoSlider from "../PhotoSlider/index.jsx";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    backgroundSize: "cover",
  },
  photoItem: {
    padding: 10,
  },
});
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    border: "1px solid #dadde9",
  },
}))(Tooltip);

function Photos(props) {
  const { classes, photoList } = props;
  const handleDeletePhoto = (photoId, albumId) => {
    props.handleDeletePhoto(photoId, albumId);
  };
  const [open, setOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const imageSlide = (title, url) => {
    setCurrentTitle(title);
    setCurrentUrl(url);
    handleClickOpen(true);
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        {open && (
          <PhotoSlider
            open={open}
            handleClose={handleClose}
            title={currentTitle}
            url={currentUrl}
          />
        )}
        <Grid container justify="center">
          <Grid
            spacing={0}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            {photoList &&
              photoList.length > 0 &&
              photoList.slice([0], [12]).map((photoItem, index) => (
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">{photoItem.title}</Typography>
                    </React.Fragment>
                  }
                  key={index}
                >
                  <Grid
                    item
                    key={index}
                    xs={3}
                    sm={6}
                    md={3}
                    className={classes.photoItem}
                  >
                    <Grid style={{ position: "relative" }}>
                      <img
                        src={photoItem.thumbnailUrl}
                        alt={photoItem.title}
                        height="max-content"
                        style={{ height: "max-content" }}
                        onClick={() =>
                          imageSlide(photoItem.title, photoItem.url)
                        }
                      />
                      <CloseIcon
                        style={{
                          position: "absolute",
                          top: "0px",
                          right: "55px",
                        }}
                        onClick={() =>
                          handleDeletePhoto(photoItem.id, photoItem.albumId)
                        }
                      />
                    </Grid>
                  </Grid>
                </HtmlTooltip>
              ))}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default withRouter(withStyles(styles)(Photos));
