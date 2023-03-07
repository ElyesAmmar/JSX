import React from 'react';
import {Button, Card} from 'react-bootstrap';

function comp() {
    return (
      <div>
        
      <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://blog.ippon.fr/content/images/2016/04/react-javascript.png" />
           <Card.Body>
             <Card.Title>React JS</Card.Title>
             <Card.Text>
              React.js is an open-source JavaScript library that is used 
              for building user interfaces specifically for Single-Page Applications.
              </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
        
      </div>
    );
  }
  
  export default comp;