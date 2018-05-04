const React = window.React;
const ReactDOM = window.ReactDOM;
import HeaderComponent from './header';
import TabComponent from './tab';
import axios from 'axios';
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
                    hello world
                </div>
            )

        }  else{
            return (
                <div>加载中……</div>
            )
        }
    }
    componentDidMount(){
        var obj={};
        var That=this;
        axios.get('/gm/game/video/get-live.json?gameId='+gameId)
        .then(function (response) {
            obj=response.data;
            console.log(response);
            // var services=Object.assign({},{'stateVal':getGameState(obj.state)},obj)
            That.setState({
                services
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
ReactDOM.render(
    <RootComponent></RootComponent>,
    document.getElementById('root')
  );