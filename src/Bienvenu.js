
import React, {Component } from "react";


class Bienvenu extends Component {
    render (){
        return this.props.Personne((pers)=>
        <h1>{pers.fullName} {pers.Bio} {pers.Profession}</h1>
        )
            
       
    }
}
export default Bienvenu;