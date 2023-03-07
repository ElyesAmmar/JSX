import React from 'react';
import {Button, Card} from 'react-bootstrap';
function comp2() {
    return (
      <div>
         <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="https://i.imgur.com/cLvlQM5.png" />
           <Card.Body>
             <Card.Title>Node JS</Card.Title>
             <Card.Text>
             Node. js is an open-source, cross-platform JavaScript runtime environment and
              library for running web applications outside the client's browser.
              </Card.Text>
             <Button variant="primary">Go somewhere</Button>
           </Card.Body>
        </Card>
        
      </div>
    );
  }
  
  export default comp2;