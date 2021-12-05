import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Message';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';


function Header() {
    return (
        <div className="header">
            <img className="header_img" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
            <input type="text" 
            placeholder="search"
            className="header_search"/>
            <HomeIcon className="home" />
            <MessageIcon className="message" />
            <ExploreIcon className="compass" />
            <FavoriteBorderIcon className="heart" />
            <Avatar src= "/static/images/avatar/1.jpg" />
        </div>

    )
}

export default Header
