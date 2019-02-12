import React from 'react';
import './Card.css';

const CardContent=()=>
     (
      <div className="cardContent">
      <a href={"http://www.reactjs.org"}>
        <h4>Get Started with React</h4>
        <p>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application.
        </p><div className="rjs">reactjs.org</div>
        </a>
      </div>
    );
  
  export default CardContent;