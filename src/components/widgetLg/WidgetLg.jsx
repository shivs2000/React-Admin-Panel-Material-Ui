import React from 'react';
import './widgetlg.css'
function WidgetLg(props) {
    const Button=({type})=>{
        return (
        <button className={"widgetlgbutton "+type}>{type}</button>);
    }

    return (
        <div className="widgetlg">
            <span className="widgetlgTitle">Latest Transactions</span>
            <table className="widgetlgTable">
                <tr className="widgetlgtr">

                
                 <th className="widgetlgTh">Customers</th>    
                   <th className="widgetlgTh">Date</th>  
                     <th className="widgetlgTh">Amount</th>  
                         <th className="widgetlgTh">Status</th>  
              </tr>
                <tr className="widgetlgtr">
                      <td className="widgetlguser">
                          <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetlgimg" />
                          <span className="widgetlgname">Kathy stevens</span>
                      </td>
                      <td className="widgetlgdate">2 jun 2021</td>
                      <td className="widgetlgamount">$2034</td>
            <td className="widgetlgstatus"><Button type="Approved"/></td>

                </tr>
                <tr className="widgetlgtr">
                      <td className="widgetlguser">
                          <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetlgimg" />
                          <span className="widgetlgname">Barry Allen</span>
                      </td>
                      <td className="widgetlgdate">2 jun 2021</td>
                      <td className="widgetlgamount">$2034</td>
            <td className="widgetlgstatus"><Button type="Pending"/></td>

                </tr>
                <tr className="widgetlgtr">
                      <td className="widgetlguser">
                          <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetlgimg" />
                          <span className="widgetlgname">Iris West</span>
                      </td>
                      <td className="widgetlgdate">2 jun 2021</td>
                      <td className="widgetlgamount">$2034</td>
            <td className="widgetlgstatus"><Button type="Approved"/></td>

                </tr>
                <tr className="widgetlgtr">
                      <td className="widgetlguser">
                          <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetlgimg" />
                          <span className="widgetlgname">Joe West</span>
                      </td>
                      <td className="widgetlgdate">2 jun 2021</td>
                      <td className="widgetlgamount">$2034</td>
            <td className="widgetlgstatus"><Button type="Declined"/></td>

                </tr>
                <tr className="widgetlgtr">
                      <td className="widgetlguser">
                          <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className="widgetlgimg" />
                          <span className="widgetlgname">Harrison wells</span>
                      </td>
                      <td className="widgetlgdate">2 jun 2021</td>
                      <td className="widgetlgamount">$2034</td>
            <td className="widgetlgstatus"><Button type="Declined"/></td>

                </tr>



            </table>    
        </div>
    );
}

export default WidgetLg;