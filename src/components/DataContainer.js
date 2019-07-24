import React from 'react';
import fetchData from '../Api';
import DataDisplay from './DataDisplay';


class dataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            obj: [],
            clean:[],
            final:[],
           
         }
    }

componentDidMount(){
    fetchData()
    .then((result)=> {
        return result.items.map(item => item.answers)
       
    })
    .then(arr => arr.map(answer => answer.map(field =>{
        const obj={[field.field.type]:field[field.type]}
        console.log(obj)
        this.setState({obj})   
        this.setState({clean: this.state.clean.concat(this.state.obj)})
       
       
    })))
    .then(answers =>{
        answers.map( e=>{       
        this.state.clean[answers]
        

    })
 
        
}


    render() {  
      
         return ( 
            <DataDisplay
            clean = {this.state.clean}
            />
         );
    }
}
 
export default dataContainer;