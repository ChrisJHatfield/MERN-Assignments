import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        const { age } = this.props;
        this.state = {
            age : age,
        };
    }
    addOneToAge = () => {
        this.setState({age: this.state.age + 1})
    }
    render(){
        const { firstName, lastName, hairColor } = this.props;
        return(
            <div className="person-card">
                <h1>{ lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>hair Color: {hairColor}</p>
                <button onClick={ this.addOneToAge }>Birthday Button for { firstName} {lastName}</button>
            </div>
        );
    }
}
export default PersonCard;