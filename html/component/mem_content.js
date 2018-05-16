const React=window.React;
import DiffComponent from './diff_component';
import {drawCircle} from './util';
import echarts from './echarts.option';
import dashboard from './canvas_dashboard';
class Content extends React.Component{
    render(){
        const services=this.props.services;
        var userData = {
            penaltySuccessTotal:services.penaltySuccessTotal,
            shotsSuccessTotal:services.shotsSuccessTotal,
            thirdsSuccessTotal:services.thirdsSuccessTotal,
        };
        var userDataArry = {
            statisticses:[[userData],[userData]],
        } ;
        return (
            <div className="mem_content">
                <div className="head_mem">
                    <span>{services.firstTeamName}</span>
                    <span style ={{textAlign:'center'}} >{services.firstTeamScore+':'+services.secondTeamScore}</span>
                    <span>{services.secondTeamName}</span>
                </div>
                <div className="first_mem flex border_bottom">
                    <div className="left_fraction_mem ui-col">
                        <span>
                            <span>得分</span>
                            {services.score}
                        </span>
                    </div>
                    <div className="right_fraction_mem ui-col border_left">
                        <div className="top_score" id="top_score">
                           <DiffComponent id="canvas_diff1" data_width="top_score" services={userDataArry} isHost={true}></DiffComponent>
                        </div>
                        <div className="bottom_hitrate">
                            <canvas id="clock">
                                您的浏览器不支持canvas标签，无法看到时钟
                            </canvas>
                            <div className="pl18">
                                <p>投篮命中率</p>
                                <p>{services.thirdsTotal+services.shotsTotal}投{services.shotsSuccessTotal+services.thirdsSuccessTotal}中</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second_men flex border_bottom">
                    <div className="left_second_men ui-col">
                        <span>
                            <span>篮板</span>
                            {services.backboard}
                        </span>
                    </div>
                    <div className="right_second_men ui-col border_left">
                        <span>
                            <span>助攻</span>
                            {services.assists}
                        </span>
                    </div>
                </div>
                <div className="second_men flex border_bottom">
                    <div className="left_second_men ui-col">
                        <span>
                            <span>抢断</span>
                            {services.steals}
                        </span>
                    </div>
                    <div className="right_second_men ui-col border_left">
                        <span>
                            <span>失误</span>
                            {services.miss}
                        </span>
                    </div>
                    <div className="right_second_men ui-col border_left">
                        <span>
                            <span>犯规</span>
                            {services.foul}
                        </span>
                    </div>
                </div>
                <div id="radar"></div>
            </div>
        )
    }
    componentDidMount(){
        var cprops=this.props.services;
        var total=cprops.thirdsTotal+cprops.shotsTotal,hit=cprops.shotsSuccessTotal+cprops.thirdsSuccessTotal;
        var data_arr = [cprops.shotsSuccessTotal*2,cprops.thirdsSuccessTotal*3,cprops.penaltySuccessTotal],
                color_arr = [ '#cccccc','#000', '#339966'];
        drawCircle('canvas_diff1', data_arr, color_arr)
        echarts('radar',{
            'score':cprops.score,
            'steals':cprops.steals,
            'caps':cprops.miss,
            'backboard':cprops.backboard,
            'assists':cprops.assists
        })
        dashboard('clock',parseInt((hit/total)*100));
    }
}
export default Content;