import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { CatContext } from '../../context/catContextProvider';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    transition: 'transform 5s',
    transformStyle: 'preserve-3d',
  },
  media: {
    height: 400,
    backgroundSize: 'cover',
  },
  flippedAnimation: {
    transform: 'rotateY(3600deg)',
  }
});

const GachaCard = () => {
  const classes = useStyles();
  const { cardImage, flipAnimation, gachaTitle, gachaRunning, gachaAction, showSaveButton, saveButtonHandler } = useContext(CatContext)


  return (<div style={{ margin: 'auto', paddingTop: '5vh', background: 'black' }}>
    <Card className={flipAnimation ? `${classes.flippedAnimation} ${classes.root}` : classes.root}>
      <CardMedia
        className={classes.media}
        image={cardImage}
        title="cover image"
      />
    </Card>
    <div style={{ padding: '2vw', margin: 'auto', textAlign: 'center', background: 'black' }}>
      <h2 style={{ color: 'white' }}>{gachaTitle}</h2>
      <Button color="primary" disabled={gachaRunning} variant="contained" style={{ marginTop: '20px' }} onClick={gachaAction}>Gacha  !!</Button>
      {showSaveButton ? <Button color="secondary" variant="contained" style={{ marginTop: '20px', marginLeft: '20px' }} onClick={saveButtonHandler}>Save</Button> : ''}
    </div>
  </div>);
}

export default GachaCard;