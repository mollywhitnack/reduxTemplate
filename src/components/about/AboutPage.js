import React from 'react';
import {Link} from 'react-router';

//if you dont care about hot reloading, this can be a statelss function (const)
class AboutPage extends React.Component{
  render(){
    return (
      <div className = 'jumbotrom'>
        <h1> About</h1>
        <p >More about stuff</p>
        </div>
    );
  }
}

export default AboutPage;