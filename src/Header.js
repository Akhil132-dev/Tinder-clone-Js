import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconBuuton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum';
import { Link, useHistory } from 'react-router-dom'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import './Header.css'
function Header({ backbutton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backbutton ? (

                <IconBuuton onClick={() => history.replace(backbutton)} >

                    <ArrowBackIosIcon fontSize="large" className="header__bakeaeero" />
                </IconBuuton>

            ) : (
                    <IconBuuton>
                        <PersonIcon fontSize="large" className="header__icon" />
                    </IconBuuton>
                )}

            <Link to='/'>
                <IconBuuton>

                    <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="" className="header__img" />
                </IconBuuton>
            </Link>
            <Link to="/chat">
                <IconBuuton><ForumIcon fontSize="large" className="header__icon" /></IconBuuton>
            </Link>


        </div>
    )
}

export default Header
