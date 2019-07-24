import React, {useEffect, useState} from 'react';




function Appfirst() {

  const [typeform, setTypeform] = useState ([]);
  const [all, setAll] = useState ([])
  useEffect(() => {
      fetch('https://api.typeform.com/forms/LkGItU/responses', {
          method:'GET',
          headers:{'Content-Type': 'application/json',
          'Accept':'application/json',
          'Authorization': 'Bearer 7iF1kxPPUMXksxiiQi2j9LAXMp5oxtnL3KxL8v4KPVMR'},
      })
      .then(response => response.json())
      .then(function(response){
        setTypeform(response)
      // .then(function(response){
      //   setTypeform(...typeform, typeform.map(e=>( typeform[e]!= "text" ? e="text")))
            
    })       

  },[])

// useEffect(()=>{
//   const one= typeform.map(e => e.field.type)
//   console.log(one)

//   const two = typeform.map(e => e[e.type])
//   console.log(two)

//   var allObj={};
//   for(let i=0; i<one.length; i++){
//   allObj[one[i]]= two[i]
//    }
//    console.log(allObj)
//    setAll(allObj)


// },[typeform])




console.log(typeform)

 
return (
    <div className="App">
      <header className="App-header">   
        
      
       
      
        <table>
        <tr>
        {Object.keys(all).map(e=>
            <td>{e}</td>  )}                      
        </tr>
      
        <tr>
        {Object.values(all).map(e=>
          <td>{e}</td> )}
                     
        </tr>
        </table>
            
        
      </header>
    </div>
  );
}

export default Appfirst;

