import React from 'react';


function dataDisplay (props){
    console.log(props.clean)
    return(
    <div>
      <pre>
        <code>{JSON.stringify(props.clean, null, 4)}</code>
      </pre>  




    

        {/*   result.items[0].answers[0].type */}


    
    </div>

    )
}
 
export default dataDisplay;