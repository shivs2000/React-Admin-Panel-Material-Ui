import { Visibility } from '@material-ui/icons';
import React from 'react';
import './widgetsm.css'
function WidgetSm(props) {
    return (
       <div className="widgetsm">
         <span className="widgetsmTitle">New Members</span>
         <ul className="widgetSmallList">
             <li className="widgetlistItem">
                 <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetsmimg" />
                 <div className="widgetsmuser">
                     <span className="widgetsmusername">
                         Kathy wells
                     </span>
                     <span className="widgetsmuserTitle">
                             Software Engineer
                     </span>
                 </div>
                 <button className="widgetsmlistButton">
                     <Visibility className="widgetsmIcon"/>
                     Display
                 </button>

             </li>
             <li className="widgetlistItem">
                 <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetsmimg" />
                 <div className="widgetsmuser">
                     <span className="widgetsmusername">
                         Kathy wells
                     </span>
                     <span className="widgetsmuserTitle">
                             Software Engineer
                     </span>
                 </div>
                 <button className="widgetsmlistButton">
                     <Visibility className="widgetsmIcon"/>
                     Display
                 </button>

             </li>
             <li className="widgetlistItem">
                 <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetsmimg" />
                 <div className="widgetsmuser">
                     <span className="widgetsmusername">
                         Kathy wells
                     </span>
                     <span className="widgetsmuserTitle">
                             Software Engineer
                     </span>
                 </div>
                 <button className="widgetsmlistButton">
                     <Visibility className="widgetsmIcon"/>
                     Display
                 </button>

             </li>
             <li className="widgetlistItem">
                 <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetsmimg" />
                 <div className="widgetsmuser">
                     <span className="widgetsmusername">
                         Kathy wells
                     </span>
                     <span className="widgetsmuserTitle">
                             Software Engineer
                     </span>
                 </div>
                 <button className="widgetsmlistButton">
                     <Visibility className="widgetsmIcon" />
                     Display
                 </button>

             </li>
             <li className="widgetlistItem">
                 <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetsmimg" />
                 <div className="widgetsmuser">
                     <span className="widgetsmusername">
                         Kathy wells
                     </span>
                     <span className="widgetsmuserTitle">
                             Software Engineer
                     </span>
                 </div>
                 <button className="widgetsmlistButton">
                     <Visibility className="widgetsmIcon"/>
                     Display
                 </button>

             </li>
             
         </ul>
       </div>
    );
}

export default WidgetSm;