import React from 'react';
import fetchData from '../Api';
import DataDisplay from './DataDisplay';
import Headers from './Headers';

class DataView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            clean:[],
         }
    };
    componentDidMount() {
        fetchData()
          .then(data => {
            console.log(data)
            return data.items.map((row, index) => {     
                 //mapegem cada persona  //map each person
              const columns = Headers.map((column, i) => {
                //   console.log(row.answers)
                  const col = row.answers.filter(item => item.field.ref === column.ref);
            
               let value;
               console.log(col)

                  if(col.length === 0){
                   return {
                       key: column.ref,
                        value: "__"
                   }
                    }
                    //   console.log(col[0])

                    switch(col[0].type){
                        case "email": 
                            value = col[0].email;
                        break
                        case "text":
                            value = col[0].text;
                        break 
                        case "date":
                            value = col[0].date;
                        break
                        case "url":
                            value = col[0].url;
                        break
                        case "file_url":
                            value = col[0].file_url;
                        break
                        case "choice": 
                            value = col[0].choice.label
                         break
                         case "choices": 
                            value = col[0].choices.labels
                         break
                         default:
                            value = "__"
                    }
    
                    return {
                        key: column.ref,
                        value: value
                    };
                });

              return {
                columns
              };
            });
          })
          .then(data => {
            console.log('TCL: dataContainer -> componentDidMount -> data', data);
            this.setState({clean: data})
            
          });
    }
    render() {  
         return ( 
            <DataDisplay
            clean = {this.state.clean}
            />
         );
    }
};

 
export default DataView;