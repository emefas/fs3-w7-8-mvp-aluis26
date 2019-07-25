import React from 'react';
import './DataDisplay.css'


function dataDisplay (props){
    console.log(props.clean)
    // var headers =["Name","Rating 1","Rating 2","Rating 3", "thoughts 1", "thoughts 2", "linkedin Profile"]
    var headers = ["Name","Surname","Email","Email","Gender","Id","Birthday","adress","Nationality", "second Nationality","Program selected","Linkdin","12","13","14","15","16","17","18"]
    return(
    <div>
      {/* <pre>
        <code>{JSON.stringify(props.clean, null, 4)}</code>
      </pre>   */}
      <h1>Data from typeform</h1>
      <table>
        <tr>
        {headers.map(function (e,index){
          return  <th key= {index}>{e}</th> } )}                  
        </tr>
      
        
        {props.clean.map(function(e, index) {          
           const rows = e.columns.map(function(val, index){
            return <td key={index}>{val.value}</td>
          })
          return <tr key={index}>{rows}</tr>
          
        })}
                     
        
      </table>


    
    </div>

    )
}
 
export default dataDisplay;