// function to call API

function fetchData () {
   return(
      
        fetch('https://api.typeform.com/forms/LkGItU/responses', {
         method:'GET',
         headers:{'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization': 'Bearer 7iF1kxPPUMXksxiiQi2j9LAXMp5oxtnL3KxL8v4KPVMR'},
        })
        .then(response => response.json()))              

   }
 


export default fetchData;