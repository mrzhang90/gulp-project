const React = window.React;
const ReactDOM = window.ReactDOM;
import axios from 'axios';
import Header from './header_mem';

class RootComponent extends React.Component{
    render(){
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

ReactDOM.render(
    <RootComponent></RootComponent>,
    document.getElementById('root')
);