import React, { Component } from 'react';
import './means/css/index.css';

class Aside extends Component {
  render() {
    return (
      <aside className="summary">
      <table className="summary-table">
      <thead>
        <tr>
          <th colSpan="2">Emma Watson</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">
            <img src="https://raw.githubusercontent.com/betsyvies/Biography---Emma-Watson/master/assets/images/Emma-Watson.jpg" alt="Emma Watson"/>
            <p>Watson at the 2013 Cannes Film Festival</p>
            <hr/>
          </td>
        </tr>
        <tr>
        <th>Born</th>
        <td> 15 April 1990 Paris, France</td>
        </tr>
        <tr>
          <th>Born</th>
          <td>December 9, 1906
              New York City, New York, U.S.
          </td>
        </tr>
        <tr>
          <th>Nationality</th>
          <td>British</td>
        </tr>
        <tr>
          <th>Alma mater</th>
          <td>Brown University</td>
        </tr>
        <tr>
          <th>Occupation</th>
          <td>Actress model activist</td>
        </tr>
        <tr>
          <th>Years active</th>
          <td>1999–present</td>
        </tr>       
      </tbody>
      </table>
      </aside>
    );
  }
}

export default Aside;
