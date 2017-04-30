import React from 'react';
import './App.css';


export default class App extends React.Component {

  constructor(props){
      super(props);
  }

  averageFilter = (studentArray)=>{
    var sum = 0;
    for (var i = 0; i < studentArray.length; i++) {
      for (var j = 0; j < studentArray[i].grades.length; j++) {
        sum = studentArray[i].grades.grade[j] + sum;
        console.log(sum);
      }
      studentArray[i].push
    }
    return;
  }

  render() {
    let studentInfo = this.props.data;
    let students = studentInfo.students;
    let headers = studentInfo.headers;

    const rowHeaders = headers.map((header) =>
      <th>{header.courseName}</th>
  )
    const rows = students.map( (student) =>
            <tr key={student.name}>
              <td>{student.name}</td>
              {student.grades.map((grade) =>
                <td> {grade.grade} </td>
              )}
            </tr>
        )
    return (
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">
          <h4>Exercise 1 - Asingment 2</h4>
          <p>Here you can sort on average grade</p>
          <p>This is the tabel</p>
          <table className="table">
            <thead>
            <th>Name</th>
            {rowHeaders}
            <th>Average</th>
            </thead>
            <tbody>
            {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
