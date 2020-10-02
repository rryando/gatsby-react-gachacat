import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import cover from "../../static/cover.jpg";
import logomeownoiru from "../../static/logoMeowNoiru.png";

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

const GachaCatWithNoContext = () => {
  const classes = useStyles();
  const [cardImage, setCardImage] = useState(cover);
  const [flipAnimation, setflipAnimation] = useState(false)
  const [gachaTitle, setgachaTitle] = useState('Hayoo dapat apa')
  const [gachaRunning, setgachaRunning] = useState(false)

  const gachaAction = () => {
    resetGachaState()
    setflipAnimation(!flipAnimation)
    setTimeout(() => setGachaResult(), 3000)
  }

  const setGachaResult = () => {
    setCardImage(logomeownoiru)
    setgachaTitle(`JENG JENG JENG... MEOWNOIRU`)
    setgachaRunning(false)
  }

  const resetGachaState = () => {
    setCardImage(cover)
    setgachaTitle('Hayoo dapat apa')
    setgachaRunning(true)
  }


  return (
    <div style={{ margin: 'auto', paddingTop: '5vh', background: 'black' }}>
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
      </div>
    </div>);
}

export default GachaCatWithNoContext;