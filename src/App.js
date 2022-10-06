
import './App.css';
import React, { Component } from 'react';
import Bienvenu from './Bienvenu';


class App extends Component {
  state = {
      Personne: [
        {
         fullName : 'Mouhamed Moustapha Lo'
        },
        {
          Bio  : 'Developer Full satck Javascript'
         },
         {
          Profession  : 'Apprenti developer Chez GomyCode'
         }
         
      ]
  }
  render (){
    return (
        <div className='persone'>
        <Bienvenu nom = {this.state.Personne } />
        
        </div>
    )
  }
}
export default App;
