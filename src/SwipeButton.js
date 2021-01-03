import React from 'react'
import './SwipeButton.css'
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";
function SwipeButton() {
    return (
        <div className="swipeButton">
            <IconButton className="swipButton_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipButton_star">
                <StarRateIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipButton_right">
                <FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipButton_lighning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButton
