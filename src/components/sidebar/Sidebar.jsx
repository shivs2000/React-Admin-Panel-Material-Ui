import React from 'react';
import './sidebar.css'
import
 { 
    LineStyle,
    Timeline,
    TrendingUp,
    Person,
    Products,
    Transactions,
    Reports,
    Mail,
    Feedback,
    Messages,
    Manage,
    StorefrontRounded,
    AttachMoney,
    Report,
    RepeatOutlined,
    Equalizer,
    MailOutline,
    FeedbackRounded,
    Message,
    WorkOffOutlined,
    WorkOutlineOutlined,
    ReportOffRounded,
    ReportOutlined,
    




} 


from '@material-ui/icons';
function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu">
                   <h3 className="sideBarTitle">
                       DashBoard
                   </h3>
                   <ul className="sidebarList">
                       <li className="listItem active">
                          <LineStyle className="icon"/>
                          Home
                       </li>
                       <li className="listItem">
                          <Timeline className="icon"/>
                         Analytics
                       </li>
                       <li className="listItem">
                          <TrendingUp className="icon"/>
                          Sales
                       </li>
                   </ul>
                </div>
                <div className="sideBarMenu">
                   <h3 className="sideBarTitle">
                       Quick Menu
                   </h3>
                   <ul className="sidebarList">
                       <li className="listItem">
                          <Person className="icon"/>
                          Users
                       </li>
                       <li className="listItem">
                          <StorefrontRounded className="icon"/>
                         Products
                       </li>
                       <li className="listItem">
                          <AttachMoney className="icon"/>
                          Transactions
                       </li>
                       <li className="listItem">
                          <Equalizer className="icon"/>
                          Reports
                       </li>
                   </ul>
                </div>
                <div className="sideBarMenu">
                   <h3 className="sideBarTitle">
                       Notifications
                   </h3>
                   <ul className="sidebarList">
                       <li className="listItem">
                          <MailOutline className="icon"/>
                          Mail
                       </li>
                       <li className="listItem">
                          <FeedbackRounded className="icon"/>
                        Feedback
                       </li>
                       <li className="listItem">
                          <Message className="icon"/>
                          Messages
                       </li>
                   </ul>
                </div>
                
                <div className="sideBarMenu">
                   <h3 className="sideBarTitle">
                      Staff
                   </h3>
                   <ul className="sidebarList">
                       <li className="listItem">
                          <WorkOutlineOutlined className="icon"/>
                          Manage
                       </li>
                       <li className="listItem">
                          <Timeline className="icon"/>
                         Analytics
                       </li>
                       <li className="listItem">
                          <ReportOutlined className="icon"/>
                          Reports
                       </li>
                   </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;