// function to call API

function fetchData () {
   return(      
        fetch('https://api.typeform.com/forms/Vopdf6/responses', {
         method:'GET',
         headers:{'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization': process.env.TYPEFORMREAL_API_KEY},
        })
        .then(response => response.json()))              

   }
    
   // LkGItU
 


export default fetchData;