import React from 'react';
import './DataDisplay.css';
import { StickyTable, Row, Cell } from 'react-sticky-table';


function dataDisplay (props){
    console.log(props.clean)
    // var headers =["Name","Rating 1","Rating 2","Rating 3", "thoughts 1", "thoughts 2", "linkedin Profile"]
    var headers = ["Name","Surname","Email","Email","Gender","Phone Number","Birthday","Address","Nationality", "Second Nationality","Program Selected","Start Date Selected","CV Upload","LinkedIn","Motivation Note","Payment Options","Referral","17","18"];

    // let rows = [];
    // let cells;

    // for (let r = 0; r < 50; r++){
      
    // }
    return(
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {/* <pre>
          <code>{JSON.stringify(props.clean, null, 4)}</code>
        </pre>   */}
        <h1>Data from typeform</h1>
        <div style={{flex: 1, height: 600}}>
        <StickyTable>
          <Row>
          {headers.map(function (e,index){
            return  <Cell key= {index}>{e}</Cell> } )}
          </Row>
          {props.clean.map(function(e, index) {
            console.log("e => ", e);
             const rows = e.columns.map(function(val, index){
               console.log(val);
              return <Cell key={index}>{val.value}</Cell>
            })
            return <Row key={index}>{rows}</Row>
          })}
        </StickyTable>
        </div>
      </div>
  
      )
    }




//     return(
//     <div>
//       {/* <pre>
//         <code>{JSON.stringify(props.clean, null, 4)}</code>
//       </pre>   */}
//       <h1>Data from typeform</h1>
//       <div>
//       <StickyTable>
//         <tr>
//         {headers.map(function (e,index){
//           return  <th key= {index}>{e}</th> } )}                  
//         </tr>
      
        
//         {props.clean.map(function(e, index) {          
//            const rows = e.columns.map(function(val, index){
//             return <td key={index}>{val.value}</td>
//           })
//           return <tr key={index}>{rows}</tr>
          
//         })}
                     
        
//       </StickyTable>


//       </div>
//     </div>

//     )
// }
 
export default dataDisplay;