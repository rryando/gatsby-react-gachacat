import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import { CatContext } from '../../context/catContextProvider';
import Dialog from '@material-ui/core/Dialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { Location } from '@reach/router';
// import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 150,
    width: 150,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardDialog: {
    width: 500,
    overflowY: 'scroll',
    textAlign: 'center',
  },
  dialogMedia: {
    width: 500,
    height: 400,
  },
  media: {
    height: 150,
    backgroundSize: 'cover',
  }
}));

const MyCat = () => {
  const { catList } = useContext(CatContext);
  const [selectedCat, setselectedCat] = useState({
    imgUrl: '/cover.jpg',
    description: "",
    name: "",
    status: {
      'Adaptability': 0,
      'Affection Level': 0,
      'Social Needs': 0,
      'Stanger Friendly': 0,
      'Rarity': 0
    },
  })
  const [dialogState, setdialogState] = useState(false)
  const classes = useStyles();

  const handleDialogState = (dialogState, cat = selectedCat) => {
    setdialogState(dialogState);
    setselectedCat(cat)
  }
  return (
    <div style={{
      padding: '8vw', paddingTop: '15vh', background: 'black'
    }}>
      <Dialog onClose={() => handleDialogState(false)} aria-labelledby="simple-dialog-title" open={dialogState}>
        <Card className={classes.cardDialog}>
          <CardMedia
            image={selectedCat.imgUrl}
            className={classes.dialogMedia}
            title="selectedCat"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {selectedCat.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {selectedCat.description}
            </Typography>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {Object.keys(selectedCat.status).map((key, val) => (
                    <TableRow key={key}>
                      <TableCell align="left">{key}</TableCell>
                      <TableCell align="right">{val}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Dialog>
      <Grid container className={classes.root} spacing={2}>
        {
          catList.myCats.map((cat, i) =>
            <Grid item xs={4} key={i}>
              <CardActionArea onClick={() => handleDialogState(true, cat)}>
                <Card className={classes.card}>
                  <CardMedia
                    image={cat.imgUrl}
                    className={classes.media}
                    title="cover image"
                  />
                </Card>
              </CardActionArea>
            </Grid>
          )
        }
      </Grid>
    </div >
  );
}

export default MyCat;