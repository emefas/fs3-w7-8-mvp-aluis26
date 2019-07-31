//dashboard l32
//   per cada persona dins de answers mapejem les 7 respostes i creem un nou nou objecte directament a return posant unes keys concretes amb els valors asignats. 
                // For each person in answers, we map out the 7 responses and we create a new new object directly at return by putting some specific keys with the assigned values.

            //     if(column.type === "choice" ){
            //     return {
            //       value: column.choice.label
            //     };}
            //     if(column.type === "choices" ){
            //       return{
            //         value: column.choices.labels
            //       }
            //     }
            //     else{ 
            //       return{
            //         value: column[column.type]
            //       }
            //     }
            //   });


            // col.type === "choice" ? col.choice.label : 
            // tanquem el map anterior (de cada persona) englobant les seves variables per cada una de les respostes amb la key column. 
            // close the previous map (of each person) by including their variables for each one of the answers with the key column.


            //l40
            // ara ja tenim el format desitjat, tres arrays englobats en un object que contenen cada un nomes els valors que necessitem per la taula.
            // Now we have the desired format, three arrays contained in an object that each contains only the values ​​we need for the table.

            // || col[0].email || col[0].date || col[0].file_url 