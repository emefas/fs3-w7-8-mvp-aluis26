import React from 'react';
import fetchData from '../Api';
import DataDisplay from './DataDisplay';


class dataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            clean:[]
          
           
         }
    }

    componentDidMount() {
        fetchData()
          .then(data => {
            console.log(data)
            return data.items.map(row => {            
                 //mapegem cada persona  
    
              const columns = row.answers.map(column => {
                //   per cada persona dins de answers mapejem les 7 respostes i creem un nou nou objecte directament a return posant unes keys concretes amb els valors asignats.
                if(column.type === "choice" ){
                return {
                  value: column.choice.label
                };}
                if(column.type === "choices" ){
                  return{
                    value: column.choices.labels
                  }
                }
                else{ 
                  return{
                    value: column[column.type]
                  }
                }
    
              });
            // tanquem el map anterior (de cada persona) englobant les seves variables per cada una de les respostes amb la key column.
              return {
                columns
              };
            });
          })
          .then(data => {
            console.log('TCL: dataContainer -> componentDidMount -> data', data);
            this.setState({clean: data})
            // ara ja tenim el format desitjat, tres arrays englobats en un object que contenen cada un nomes els valors que necessitem per la taula.
          });
    }


    render() {  
      console.log(this.state.clean)
         return ( 
            <DataDisplay
            clean = {this.state.clean}
            />
         );
    }
}

 
export default dataContainer;