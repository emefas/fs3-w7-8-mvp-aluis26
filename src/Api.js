// function to call API

function fetchData () {
   return(
      
        fetch('https://api.typeform.com/forms/LkGItU/responses', {
         method:'GET',
         headers:{'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization': process.env.TYPEFORM_API_KEY},
        })
        .then(response => response.json()))              

   }
 


export default fetchData;