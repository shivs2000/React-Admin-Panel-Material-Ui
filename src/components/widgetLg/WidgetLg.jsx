import React from 'react';
import './widgetlg.css'
function WidgetLg(props) {
    return (
        <div className="widgetlg">
            <span className="widgetlgTitle">Latest Transactions</span>
            <table className="widgetlgTable">
              <tr className="widgetlgTh">Customers</tr>    
              <tr className="widgetlgTh">Date</tr>  
              <tr className="widgetlgTh">Amount</tr>  
              <tr className="widgetlgTh">Satus</tr>  
            </table>    
        </div>
    );
}

export default WidgetLg;