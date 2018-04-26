// console.log(window.React)
// console.log(window.ReactDOM)
// import React from 'react';
// import ReactDOM from 'react-dom';
const React = window.React;
const ReactDOM = window.ReactDOM;
import Header from './Header';


let props={
    state:'已结束'
}
class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="footer">
                2
            </div>
        )
    }
}
var date=new Date().getTime();
ReactDOM.render(
    <div>
        <Header name="aaa"/>
        <Footer name="world"/>
    </div>,
    document.getElementById('root')
  );