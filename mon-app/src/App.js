import React from 'react';
import Photo from './Profile/Components/ProfilePhoto';
import Name from './Profile/Components/FullName';
import Adress from './Profile/Components/Adress'
import './App.css';


function App (){
  return ( 
   
      <div className='App'> 
        <div>
        <Photo />
        </div>
        <Name />
        <Adress />
      </div>
      
  
  
  );
}

export default App;
