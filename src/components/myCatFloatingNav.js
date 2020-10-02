import React, { useContext } from 'react';
import Fab from '@material-ui/core/Fab';
import PetsIcon from '@material-ui/icons/Pets';
import '../css/gacha.css';
import Badge from '@material-ui/core/Badge';
import { CatContext } from '../context/catContextProvider';
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const MyCatFloatingNav = () => {
  const { catList } = useContext(CatContext)
  const location = useLocation();
  const isOnMyCatPage = location.pathname === '/app/mycat'
  const fabClickButtonHandler = () => {
    console.log(isOnMyCatPage)
  }
  return (
    <div>
      {isOnMyCatPage ?
        <Link to="/app/gacha">
          <Fab color="primary" aria-label="add" className="floating-button-left" onClick={fabClickButtonHandler}>
            <ArrowBackIcon />
          </Fab>
        </Link>
        :
        <Badge color="secondary" badgeContent={catList.myCats.length} className="floating-button-right">
          <Link to="/app/mycat">
            <Fab color="primary" aria-label="add" className="floating-button-right" onClick={fabClickButtonHandler}>
              <PetsIcon />
            </Fab>
          </Link>
        </Badge>
      }
    </div >
  );
}

export default MyCatFloatingNav;