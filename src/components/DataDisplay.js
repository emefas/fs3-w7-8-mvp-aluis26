import React from 'react';
import { traverse } from '@babel/types';


function dataDisplay (props){
    console.log(props.clean)
    var headers =["Name","Rating 1","Rating 2","Rating 3", "thoughts 1", "thoughts 2", "linkedin Profile"]
    return(
    <div>
      {/* <pre>
        <code>{JSON.stringify(props.clean, null, 4)}</code>
      </pre>   */}
      <table>
        <tr>
        {headers.map(function (e,index){
          return  <th key= {index}>{e}</th> } )}                  
        </tr>
      
        
        {props.clean.map(e=> {          
           const rows = e.columns.map(val=>{
            return <td>{val.value}</td>
          })
          return <tr>{rows}</tr>
          
        })}
                     
        
      </table>


    
    </div>

    )
}
 
export default dataDisplay;