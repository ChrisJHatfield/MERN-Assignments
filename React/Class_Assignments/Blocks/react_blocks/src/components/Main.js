import React from 'react';
import './Main.css';
import SubContents from './SubContents';
import Advertisement from './Advertisement';

class Main extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return(
            <div className="main">
                <SubContents />
                <SubContents />
                <SubContents />
                <Advertisement />
            </div>
        );
    }
}
export default Main;