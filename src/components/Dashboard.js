import React, { Component } from 'react';
import Highcharts from 'highcharts';
import DataDisplay from './DataDisplay';
import DataView from './DataView';
// import {
//   HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, SplineSeries
// } from 'react-jsx-highcharts';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            count: 0,
            country: []
         }
    };
    // highChartsRender() {
    //     Highcharts.chart({
    //         chart: {
    //           type: 'bar',
    //           renderTo: 'stacked-bar'
    //         },
    //         title: {
    //           text: 'Country Demographics',
    //           }
    //         }),
    // }
        
            
    render() {
        return (
            <div className="stacked-bar">
                Chart Page
            </div>
        )
    }
}

