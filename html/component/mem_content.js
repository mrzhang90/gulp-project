const React=window.React;
import DiffComponent from './diff_component';
import {drawCircle} from './util';
import echarts from './echarts.option';
import dashboard from './canvas_dashboard';
class Content extends React.Component{
    render(){
        const services=this.props.services.data;
        console.log(services)
        return (
            <div className="mem_content">
                <div className="head_mem">
                    <span>北京理工</span>
                    <span>100:98</span>
                    <span>中国科学院</span>
                </div>
                <div className="first_mem flex border_bottom">
                    <div className="left_fraction_mem ui-col">
                        <span>
                            <span>得分</span>
                            16
                        </span>
                    </div>
                    <div className="right_fraction_mem ui-col border_left">
                        <div className="top_score" id="top_score">
                            <DiffComponent id="canvas_diff1" data_width="top_score" services={services} isHost={true}></DiffComponent>
                        </div>
                        <div className="bottom_hitrate">
                            <canvas id="clock">
                                您的浏览器不支持canvas标签，无法看到时钟
                            </canvas>
                            <div className="pl18">
                                <p>投篮命中率</p>
                                <p>24投16中</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second_men flex border_bottom">
                    <div className="left_second_men ui-col">
                        <span>
                            <span>篮板</span>
                            13
                        </span>
                    </div>
                    <div className="right_second_men ui-col border_left">
                        <span>
                            <span>主攻</span>
                            6
                        </span>
                    </div>
                </div>
                <div className="second_men flex border_bottom">
                    <div className="left_second_men ui-col">
                        <span>
                            <span>抢断</span>
                            5
                        </span>
                    </div>
                    <div className="right_second_men ui-col border_left">
                        <span>
                            <span>失误</span>
                            3
                        </span>
                    </div>
                    <div className="right_second_men ui-col border_left">
                        <span>
                            <span>犯规</span>
                            2
                        </span>
                    </div>
                </div>
                <div id="radar"></div>
            </div>
        )
    }
    componentDidMount(){
        var cprops=this.props.services.data;
        var homeTeams =  cprops.statisticses[0];
        var homeTeam = homeTeams[homeTeams.length - 1];

        var data_arr = [homeTeam.shotsSuccessTotal*2,homeTeam.thirdsSuccessTotal*3,homeTeam.penaltySuccessTotal],
                color_arr = [ '#cccccc','#000', '#339966'];
        drawCircle('canvas_diff1', data_arr, color_arr)
        echarts('radar')
        dashboard('clock',70)
    }
}
export default Content;