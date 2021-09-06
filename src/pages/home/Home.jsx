import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featuredInfo/Featured';
import './home.css';
import {userData} from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
function Home(props) {
    return (
        <div className="home">
            <Featured/>
            <Chart data={userData} title="User Analytics" 
            dataKey="Active User"
            grid
            />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}

export default Home;