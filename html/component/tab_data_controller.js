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
                    <DiffComponent id="canvas_diff1" services={services} isHost={true}></DiffComponent>
                    <DiffComponent id="canvas_diff2" services={services} isHost={false}></DiffComponent>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var cprops=this.props;
        var homeTeams =  cprops.services.statisticses[0];
        var guestTeams =  cprops.services.statisticses[1];
        var homeTeam = homeTeams[homeTeams.length - 1];
        var guestTeam = guestTeams[guestTeams.length - 1];

        var data_arr = [homeTeam.shotsSuccessTotal*2,homeTeam.thirdsSuccessTotal*3,homeTeam.penaltySuccessTotal],
                color_arr = [ '#cccccc','#000', '#339966'];
        drawCircle('canvas_diff1', data_arr, color_arr)
        var data_arr = [guestTeam.shotsSuccessTotal*2,guestTeam.thirdsSuccessTotal*3,guestTeam.penaltySuccessTotal],
                color_arr = ['#cccccc','#000', '#339966'];
        drawCircle('canvas_diff2', data_arr, color_arr)
    }
}
class DiffComponent extends Component{
    render(){
        var props=this.props;

        var teamName=props.isHost?props.services.homeTeamName:props.services.guestTeamName;
        var teamStatisticses =  props.isHost?props.services.statisticses[0]:props.services.statisticses[1];
        var statisticseUser = teamStatisticses[teamStatisticses.length - 1];
        return (
            <div className="diff_col ui-col">
                <div className="diff_canvas zoom5">
                    <canvas id={props.id}></canvas>
                </div>
                <div className="diff_dec">{teamName}</div>
                <ul className="diff_list">
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgGrey"></i>
                            <span>两分</span>
                        </div>
                        <span className="alignRight">{statisticseUser.shotsSuccessTotal*2}</span>
                    </li>
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgBlack"></i>
                            <span>三分</span>
                        </div>
                        <span>{statisticseUser.thirdsSuccessTotal*3}</span>
                    </li>
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgGreen"></i>
                            <span>罚球</span>
                        </div>
                        <span className="alignRight">{statisticseUser.penaltySuccessTotal}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
class StatisticsController extends Component{
    render(){
        const services=this.props.services

        var homeTeams =  services.statisticses[0];
        var guestTeams =  services.statisticses[1];
        var homeTeam = homeTeams[homeTeams.length - 1];
        var guestTeam = guestTeams[guestTeams.length - 1];
        var homeTwoLoad =  ((homeTeam.shotsSuccessTotal==0) && (guestTeam.shotsSuccessTotal==0))?50: parseInt(homeTeam.shotsSuccessTotal/(homeTeam.shotsSuccessTotal+guestTeam.shotsSuccessTotal)*100);
        var guestTwoLoad = 100-homeTwoLoad;
        var homeThreeLoad =((homeTeam.thirdsSuccessTotal==0) && (guestTeam.thirdsSuccessTotal==0))?50: parseInt(homeTeam.thirdsSuccessTotal/(homeTeam.thirdsSuccessTotal+guestTeam.thirdsSuccessTotal)*100);
        var guestThreeLoad = 100-homeThreeLoad;
        var homePenaltyLoad = ((homeTeam.penaltySuccessTotal==0) && (guestTeam.penaltySuccessTotal==0))?50:parseInt(homeTeam.penaltySuccessTotal/(homeTeam.penaltySuccessTotal+guestTeam.penaltySuccessTotal)*100);
        var guestPenaltyLoad = 100-homePenaltyLoad;
        var homeBackboardLoad =((homeTeam.backboard==0) && (guestTeam.backboard==0))?50: parseInt(homeTeam.backboard/(homeTeam.backboard+guestTeam.backboard)*100);
        var guestBackboardLoad = 100-homeBackboardLoad;
        var homeAssistsLoad =((homeTeam.assists==0) && (guestTeam.assists==0))?50: parseInt(homeTeam.assists/(homeTeam.assists+guestTeam.assists)*100);
        var guestAssistsLoad = 100-homeAssistsLoad;
        var homeStealsLoad =((homeTeam.steals==0) && (guestTeam.steals==0))?50: parseInt(homeTeam.steals/(homeTeam.steals+guestTeam.steals)*100);
        var guestStealsLoad = 100-homeStealsLoad;
        var homeMissLoad =((homeTeam.miss==0) && (guestTeam.miss==0))?50: parseInt(homeTeam.miss/(homeTeam.miss+guestTeam.miss)*100);
        var guestMissLoad = 100-homeMissLoad;
        var homeFoulLoad =((homeTeam.foul==0) && (guestTeam.foul==0))?50: parseInt(homeTeam.foul/(homeTeam.foul+guestTeam.foul)*100);
        var guestFoulLoad = 100-homeFoulLoad;
        return (
            <div className="tab_static">
                <h3 className="title">技术统计</h3>
                <ul className="flex static_cont">
                    <li>
                        <span className="static_title">二分%</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>{homeTwoLoad}</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:homeTwoLoad+'%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:guestTwoLoad+'%'}}></div>
                                </div>
                                <span>{guestTwoLoad}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="static_title">三分%</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>{homeThreeLoad}</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:homeThreeLoad+'%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:guestThreeLoad+'%'}}></div>
                                </div>
                                <span>{guestThreeLoad}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="static_title">罚球%</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>{homePenaltyLoad}</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:homePenaltyLoad+'%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:guestPenaltyLoad+'%'}}></div>
                                </div>
                                <span>{guestPenaltyLoad}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="static_title">篮板</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>{homeBackboardLoad}</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:homeBackboardLoad+'%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:guestBackboardLoad+'%'}}></div>
                                </div>
                                <span>{guestBackboardLoad}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="static_title">助攻</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>{homeAssistsLoad}</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:homeAssistsLoad+'%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:guestAssistsLoad+'%'}}></div>
                                </div>
                                <span>{guestAssistsLoad}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="static_title">抢断</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>{homeStealsLoad}</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:homeStealsLoad+'%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:guestStealsLoad+'%'}}></div>
                                </div>
                                <span>{guestStealsLoad}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="static_title">失误</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>{homeMissLoad}</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:homeMissLoad+'%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:guestMissLoad+'%'}}></div>
                                </div>
                                <span>{guestMissLoad}</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span className="static_title">犯规</span>
                        <div className="flex static_info">
                            <div className="flex static_left">
                                <span>{homeFoulLoad}</span>
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:homeFoulLoad+'%'}}></div>
                                </div>
                            </div>
                            <div className="flex static_right">
                                <div className="progress ui-col">
                                    <div className="progress_val" style={{width:guestFoulLoad+'%'}}></div>
                                </div>
                                <span>{guestFoulLoad}</span>
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
                <StaticsDataComponent services={services[0]} gmTeamId={this.props.services.homeGameTeamId} groupName={this.props.services.homeTeamName} ></StaticsDataComponent>
                <StaticsDataComponent services={services[1]} gmTeamId={this.props.services.guestGameTeamId} groupName={this.props.services.guestTeamName} ></StaticsDataComponent>
            </div>
        )
    }
}
class StaticsDataComponent extends Component{
    handleClick(recordId,isUser){
        if(isUser==0){
            alert('临时球员')
            return;
        }
        window.location.href=`/gm/game/member/${recordId}?gmTeamId=${this.props.gmTeamId}`
    }
    render(){
        const services=this.props.services;
        const groupName = this.props.groupName;
        const elements1=services.map((user,index)=>{
            var number = (user.nickName === '球队统计') ?'--':user.number;
            return <li key={index}>
                <span>{number}</span>
                <span onClick={this.handleClick.bind(this,user.recordId,user.isUser.value)}>{user.nickName}</span>
            </li>
        })
        const elements2=services.map((user,index)=>{
            var number = (user.nickName === '球队统计') ?'--':user.number;
            return <li key={index}>
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
                    <ul className="table_static width256">
                        <li>
                           <span>球员号</span>
                           <span>球员</span>
                        </li>
                        {elements1}
                    </ul>
                    <ul className="table_static ol_scroll">
                        <li>
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
                        {elements2}
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