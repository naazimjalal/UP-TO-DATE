import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core'
import Search from './Search.js'
function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <AppsIcon fontSize="large"/>
                    <Link to="/about"> About</Link>
                </div>
                <div className="home__headerRight">
                    <Link to=" ">Name</Link>
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                UP-TO-DATE
                <Search />
            </div>
        </div>
    )
}

export default Home
