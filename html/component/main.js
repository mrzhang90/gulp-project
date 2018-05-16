// console.log(window.React)
// console.log(window.ReactDOM)
// import React from 'react';
// import ReactDOM from 'react-dom';
const React = window.React;
const ReactDOM = window.ReactDOM;
import HeaderComponent from './header';
import TabComponent from './tab';
import axios from 'axios';
// state=1|2|3|4 未开赛|直播中|已结束|查看回访
function getGameState(state){
    var _arr=['未开赛','直播中','已结束','查看回访']
    return _arr[state];
}
class RootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            services:{}
        }
    }
    render(){
        const services=this.state.services
        if(JSON.stringify(services)!="{}"){
            return (
                <div>
                    hello world
                    {/* <HeaderComponent name={services}/> */}
                    {/* <TabComponent name={services}/> */}
                </div>
            )

        }  else{
            return (
                <div className="center">加载中……</div>
            )
        }
    }
    componentDidMount(){
        // var obj={};
        // var That=this;
        // axios.get('/gm/game/detail.json?gameId='+gameId)
        // .then(function (response) {
        //     obj=response.data;
        //     obj.data.status.value=4
        //     var services=Object.assign({},{'stateVal':getGameState(obj.data.status.value)},obj)
        //     if(obj.data.status.value==1){
        //         window.location.hash="/index"
        //     }else{
        //         window.location.hash="/data"
        //     }
        //     That.setState({
        //         services
        //     })
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }
}
ReactDOM.render(
    <RootComponent></RootComponent>,
    document.getElementById('root')
);