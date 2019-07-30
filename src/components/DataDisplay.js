import React from 'react';
import './DataDisplay.css';
import { StickyTable, Row, Cell } from 'react-sticky-table';
// import Headers from './Headers';

function DataDisplay (props){

    var headers = ["Name","Surname","Email","Email","Gender","Phone Number","Birthday","Address","Nationality", "Residency","Program Selected","Start Date Selected","CV Upload","LinkedIn","GitHub", "Career Goals","Payment Options","Referral"];

    return(
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>Data from typeform</h1>
        <div style={{flex: 1, height: 600}}>
        <StickyTable>
          <Row>
          {headers.map(function (e,index){
            return  <Cell key= {index}>{e}</Cell> } )}
          </Row>
          {props.clean.map(function(e, index) {
             const rows = e.columns.map(function(val, index){
              return <Cell key={index}>{val.value}</Cell>
            })
            return <Row key={index}>{rows}</Row>
          })}
        </StickyTable>
        </div>
      </div>
  
      )
    }
 
export default DataDisplay;