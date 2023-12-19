import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id} &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>Name: {item.name} &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>User Type: {item.user_type} &nbsp;&nbsp;&nbsp;&nbsp;</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderBasedonUsertype = (desireduserType) => {
    const data = this.state.userData;

    return data
      .filter((user) => user.user_type === desireduserType)
      .map((user) => (
        <React.Fragment key={user.id}>
          <li className="list_ele">
            <span>Id: {user.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>Name: {user.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>User Type: {user.user_type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </li>
        </React.Fragment>
      ));
  };

  renderNamesStartingWithJ = () => {
    const data = this.state.userData;

    return data
      .filter((user) => user.name.startsWith('J'))
      .map((user) => (
        <React.Fragment key={user.id}>
          <li className="list_ele">
            <span>Id: {user.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>Name: {user.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>User Type: {user.user_type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </li>
        </React.Fragment>
      ));
  };


  renderAgeBetween = () => {
    const data = this.state.userData;
    const minimum = 28;
    const maximum = 50;
  
    return data
      .filter((user) => user.age > minimum && user.age < maximum)
      .map((user) => (
        <React.Fragment key={user.id}>
          <li className="list_ele">
            <span>Id: {user.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>Name: {user.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>User Type: {user.user_type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </li>
        </React.Fragment>
      ));
  };
  
  findTotalExperience = () => {
    const designers = this.state.userData.filter(user => user.user_type === 'Designer');
    const totalExperience = designers.reduce((total, designer) => total + designer.years, 0);
    return totalExperience;
  };









  render() {
    return (
      <div>
        <h2>All Users</h2>
        <ul>{this.renderItems()}</ul>

        <h2>Designers</h2>
        <ul>{this.renderBasedonUsertype('Designer')}</ul>

        <h2>Names Starting with 'J'</h2>
        <ul>{this.renderNamesStartingWithJ()}</ul>
        <h2>Age between 28 and 50</h2>
        <ul>{this. renderAgeBetween()}</ul>
        <div>
        <h2>Total Experience of Designers: {this.findTotalExperience()} years</h2>
      </div>


      </div>
    );
  }
}

export default App;
