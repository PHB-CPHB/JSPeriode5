import React from 'react';
import  studentTable from './studentTable';
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

    return studentTable(this.props);
    
    
  }
}
