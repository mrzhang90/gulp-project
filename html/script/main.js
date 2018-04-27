// console.log(window.React)
// console.log(window.ReactDOM)
// import React from 'react';
// import ReactDOM from 'react-dom';
const React = window.React;
const ReactDOM = window.ReactDOM;
import HeaderComponent from './header';
import TabComponent from './tab';

// state=0|1|2|3 未开赛|直播中|已结束|查看回访
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
                    <HeaderComponent name={services}/>
                    <TabComponent name={services}/>
                </div>
            )

        }  else{
            return (
                <div>加载中……</div>
            )
        }
    }
    componentDidMount(){
        var obj={
            'state':0,
            'name':'第五届北京MBA篮球联赛',
            'firstTeam':{
                'teamName':'中国科学院MBA',
                'teamScore':58
            },
            'secondTeam':{
                'teamName':'北京理工MBA',
                'teamScore':54
            },
            'currentTime':'2018年05月12日 08:30',
            'bisaiTime':'2018年05月12日 08:30',
            'bisaiAddress':'北京五棵松Hi-park Vip馆',
            'bisaiChangguan':'第五届北京MBA篮球联赛0'
        }
        var services=Object.assign({},{'stateVal':getGameState(obj.state)},obj)
        this.setState({
            services
        })
    }
}
ReactDOM.render(
    <RootComponent></RootComponent>,
    document.getElementById('root')
  );