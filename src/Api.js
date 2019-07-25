// function to call API

function fetchData () {
   return(      
        fetch('https://api.typeform.com/forms/Vopdf6/responses', {
         method:'GET',
         headers:{'Content-Type': 'application/json',
        'Accept':'application/json',
        'Authorization':'Bearer G18wc83wvuiUouzZPUaNHoKkSu2ujrWnTyF9wi6UBseA' },
        })
        .then(response => response.json()))              

   }
   // Vopdf6
   // LkGItU
   // 'Bearer 7iF1kxPPUMXksxiiQi2j9LAXMp5oxtnL3KxL8v4KPVMR'

 


export default fetchData;