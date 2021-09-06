import React from 'react';
import './topbar.css';
import {NotificationsNone,Settings,Language} from '@material-ui/icons';

function Topbar(props) {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <span className="logo">ADMIN CONTROLLER</span>
                </div>
                <div className="topRight">
                  <div className="topbarIcons">
                     <NotificationsNone/>
                     <span className="iconsBadge">2</span>
                  </div>
                  <div className="topbarIcons">
                     <Language/>
                     <span className="iconsBadge">2</span>
                  </div>
                  <div className="topbarIcons">
                     <Settings/>
                     
                  </div>
                  <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;