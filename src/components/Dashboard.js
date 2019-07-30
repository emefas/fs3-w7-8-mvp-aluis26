import React from 'react';
import fetchData from '../Api';
import DataDisplay from './DataDisplay';
import Headers from './Headers';
class DataContainer extends React.Component {
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
            // if data.items isEmpty, return N/A
            return data.items.map((row, index) => {     
                 //mapegem cada persona  //map each person
              const columns = Headers.map((column, i) => {
                  const col = row.answers.filter(
                      item => item.field.ref === column.ref);
                    return {
                        key: column.ref,
                        value: col[0] ? col[0].text || col[0].email || col[0].date || col[0].file_url || col[0].url : "__"
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

 
export default DataContainer;