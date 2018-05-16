const React = window.React;
const ReactDOM = window.ReactDOM;
import axios from 'axios';
import Header from './mem_header';
import Content from './mem_content';

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
                    <Header services={services.data}/>
                    <Content services={services.data}/>
                </div>
            )

        }  else{
            return (
                <div className="center">加载中……</div>
            )
        }
    }
    componentDidMount(){
        var obj={};
        var That=this;
        var gameId='DKD2DKD2dk23';
        axios.get('/gm/game/user.json?gtplayerId='+userId)
        .then(function (response) {
            obj=response.data;
            console.log(obj);
            
            var services=Object.assign({},{'stateVal':getGameState(obj.status)},obj)
            if(obj.status ==1){
                window.location.hash="/index"
            }else{
                window.location.hash="/data"
            }
            That.setState({
                services
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
function getGameState(state){
    var _arr=['未开赛','直播中','已结束','查看回访']
    return _arr[state];
}
ReactDOM.render(
    <RootComponent></RootComponent>,
    document.getElementById('root')
);