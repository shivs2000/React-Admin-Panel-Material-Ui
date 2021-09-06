import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featured.css'

function Featured(props) {
    return (
           
           
    <div className="featured">
       <div className="featuredItem">
           <span className="featuredTitle">Revenue</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">
                   $2,342
                  </span>
                  <span className="featuredMoneyRate">
                      -11.4 <ArrowDownward className="featuredIcon negative"/>
                  </span>
               </div>

               <span className="featuredsub">
                   Compared to last month
               </span>
           
       </div>
       <div className="featuredItem">
           <span className="featuredTitle">Sales</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">
                   $4,234
                  </span>
                  <span className="featuredMoneyRate">
                -11.4 <ArrowDownward className="featuredIcon negative"/>
                  </span>
               </div>

               <span className="featuredsub">
                   Compared to last month
               </span>
           
       </div>
       <div className="featuredItem">
           <span className="featuredTitle">Cost</span>
               <div className="featuredMoneyContainer">
                  <span className="featuredMoney">
                   $2,342
                  </span>
                  <span className="featuredMoneyRate">
                      -11.4 <ArrowUpward className="featuredIcon"/>
                  </span>
               </div>

               <span className="featuredsub">
                   Compared to last month
               </span>
           
       </div>
    </div>
    );
}

export default Featured;