import React, {useState, useEffect} from 'react';


function Basic () {
    const [typeform, setTypeform] = useState ([]);

    useEffect(() => {
        fetch('https://api.typeform.com/forms/LkGItU/responses', {
            method:'GET',
            headers:{'Content-Type': 'application/json',
            'Accept':'application/json',
            'Authorization': 'Bearer 7iF1kxPPUMXksxiiQi2j9LAXMp5oxtnL3KxL8v4KPVMR'},
        })
        .then(response => response.json())
        .then(response => console.log(response));        

    })
    return(<p>funciona?????</p>)
}

export default Basic;