import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { getAlbumList, getAlbumPhotoList } from "../../redux/actions";
import Photos from "../Photo";
import Loading from "../Common/Loading.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function AlbumCard(props) {
  const classes = useStyles();
  const [albumList, setAlbumList] = useState([]);
  const [albumPhotoList, setAlbumPhotoList] = useState({});

  useEffect(() => {
    props.getAlbumList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.getAlbumPhotoList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const albumListDefaults = [];
    if (props.albumListData) {
      Object.entries(props.albumListData).forEach(([key, value]) => {
        if (key < 10)
          albumListDefaults.push({ id: value.id, title: value.title });
      });
      setAlbumList(albumListDefaults);
    }
    // eslint-disable-next-line
  }, [props.albumListData]);

  useEffect(() => {
    if (
      props.albumPhotoListData &&
      props.albumListData &&
      props.albumListData.length > 0 &&
      props.albumPhotoListData.length > 0
    ) {
      const albumPhotoObj = [];
      if (props.albumPhotoListData) {
        Object.entries(albumList).forEach(([key, value]) => {
          let photos = props.albumPhotoListData.filter(function (item) {
            return item.albumId === value.id;
          });
          albumPhotoObj.push({
            id: value.id,
            title: value.title,
            photos: photos,
          });
        });
      }
      setAlbumPhotoList(albumPhotoObj);
    }
    // eslint-disable-next-line
  }, [props.albumPhotoListData]);

  const handleDeletePhoto = (photoId, albumId) => {
    const temp = [...albumPhotoList];
    Object.entries(albumPhotoList).forEach(([index, albumItem]) => {
      if (albumItem.id === albumId) {
        Object.entries(albumItem.photos).forEach(([photoIndex, photoItem]) => {
          if (photoItem.id === photoId) {
            if (photoIndex > -1) {
              temp[index].photos.splice(photoIndex, 1);
            }
            setAlbumPhotoList(temp);
          }
        });
      }
    });
  };

  return (
    <div className={classes.root}>
      {props.loading && <Loading loading />}
      {albumPhotoList &&
        albumPhotoList.length > 0 &&
        albumPhotoList.map((albumItem, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Album: {albumItem.id} - {albumItem.title} (
                {albumItem.photos.length})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Photos
                photoList={albumItem.photos}
                handleDeletePhoto={handleDeletePhoto}
                key={albumItem.id + "_" + index}
              />
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { albumPhotoListData, loading, error } = state.albumPhotoList;
  const { albumListData } = state.albumList;
  return {
    albumPhotoListData,
    albumListData,
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  getAlbumList,
  getAlbumPhotoList,
})(AlbumCard);
