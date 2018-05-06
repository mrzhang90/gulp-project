const React = window.React;
const Component=React.Component;
import {drawCircle,hello} from './util';
class ScoreController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const services=this.props.services;
        const elements=services.map((section,index)=>{
            return <li key={index}>
                 <span>{section.homeTeamScore}</span>
                 <span>{section.name}</span>
                 <span>{section.guestTeamScore}</span>
            </li>
        })
        return (
            <div className="tab_score">
                <h3 className="title">球队成绩</h3>
                <ul className="list">
                   {elements}
                </ul>
            </div>
        )
    }
}
class OptimalController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const optimals=this.props.services;

        const elements=optimals.map((optimal)=>{
            return <li key={optimal.homeTeamUserCount.toString}>
               <div className="between">
                  <div>
                  <img className="teamLogo" src={optimal.homeTeamUserPhoto}/>
                  <span className="pl18">{optimal.homeTeamUserName}</span>
                  </div>
                         <span>{optimal.homeTeamUserCount}</span>
                    </div>
                    <span className="middle">得分</span>
                    <div className="between">
                         <span>{optimal.guestTeamUserCount}</span>
                     <div>
                     <span className="pr18">{optimal.guestTeamUserName}</span>
                     <img className="teamLogo"  src={optimal.guestTeamUserPhoto}/>
                     </div>
                </div>
            </li>
        })

        return (
            <div className="tab_optimal">
                <h3 className="title">本场最佳</h3>
                <ul className="list">
                    {elements}
                </ul>
            </div>
        )        
    }
}
class ComparedController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const services=this.props.services
        return (
            <div className="tab_diff">
                <h3 className="title">球队对比</h3>
                <div className="flex diff_cont">
                    <DiffComponent id="canvas_diff1" services={services}></DiffComponent>
                    <DiffComponent id="canvas_diff2" services={services}></DiffComponent>
                </div>
            </div>
        )
    }
}
class DiffComponent extends Component{
    render(){
        var props=this.props;
        return (
            <div className="diff_col ui-col">
                <div className="diff_canvas">
                    <canvas id={props.id}>A drawing of someing!</canvas>
                </div>
                <div className="diff_dec">中国科学院</div>
                <ul className="diff_list">
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgGreen"></i>
                            <span>两份</span>
                        </div>
                        <span className="alignRight">6</span>
                    </li>
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgGrey"></i>
                            <span>两份</span>
                        </div>
                        <span className="alignRight">5</span>
                    </li>
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgBlack"></i>
                            <span>两份</span>
                        </div>
                        <span>40</span>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidMount(){
        var data_arr = [6,5,10],
                color_arr = ['#339966', '#cccccc', '#000'];
        drawCircle('canvas_diff1', data_arr, color_arr)
        var data_arr = [5,11,40],
                color_arr = ['#339966', '#cccccc', '#000'];
        drawCircle('canvas_diff2', data_arr, color_arr)
    }
}
class StatisticsController extends Component{
    render(){
        const services=this.props.services
        return (
            <div className="tab_static">
                <h3 className="title">技术统计</h3>
                <ul className="flex static_cont">
                    <li>
                        <span className="static_title">二分%</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>62.5</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:'80%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:'60%'}}></div>
                                </div>
                                <span>62.5</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="static_title">三分%</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>62.5</span>
                                <div className="progress ui-col">
                                    <div className="progress_val"></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val"></div>
                                </div>
                                <span>62.5</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
class HomedataController extends Component{
    render(){
        const services=this.props.services.statisticses;
        return (
            <div>
                <StaticsDataComponent services={services[0]} groupName={this.props.services.homeTeamName} ></StaticsDataComponent>
                <StaticsDataComponent services={services[1]} groupName={this.props.services.guestTeamName} ></StaticsDataComponent>
            </div>
        )
    }
}
class StaticsDataComponent extends Component{
    render(){
        const services=this.props.services;
        const groupName = this.props.groupName;
        const elements=services.map((user)=>{
            var number = (user.nickName === '球队统计') ?'--':user.number;
            return <li key={number}>
                <span>{number}</span>
                <span>{user.nickName}</span>
                <span>{user.score}</span>
                <span>{user.backboard}</span>
                <span>{user.assists}</span>
                <span>{user.shotsSuccessTotal}</span>
                <span>{user.shotsSuccessTotal}</span>
                <span>{user.thirdsSuccessTotal}</span>
                <span>{user.steals}</span>
                <span>{user.miss}</span>
                <span>{user.foul}</span>
            </li>
        })
        return (
            <div className="tab_static">
                <h3 className="title">{groupName}-球员数据</h3>
                <div className="content_static">
                    <ul className="table_static">
                        <li>
                           <span>球员号</span>
                           <span>球员</span>
                           <span>得分</span>
                           <span>篮板</span>
                           <span>助攻</span>
                           <span>投篮</span>
                           <span>三分</span>
                           <span>罚球</span>
                           <span>抢断</span>
                           <span>失误</span>
                           <span>犯规</span>
                        </li>
                        {elements}
                    </ul>
                </div>
            </div>
        )
    }
}
export default class DataController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const services=this.props.services
        return (
            <div>
                <ScoreController services={services.sections}></ScoreController>
                {services.status.value ==3 &&
                    <OptimalController services={services.optimals}></OptimalController>
                }
                <ComparedController services={services}></ComparedController>
                <StatisticsController services={services}></StatisticsController>
                <HomedataController services={services}></HomedataController>
            </div>
        )
    }
}