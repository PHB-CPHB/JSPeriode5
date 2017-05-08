import React from 'react';
import './App.css';
import studentTabel from './studentTabel'


export default class App extends React.Component {
  render() {
   return studentTabel(this.props)
  }
}


