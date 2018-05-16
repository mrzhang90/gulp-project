const React=window.React;
import DiffComponent from './diff_component';
import {drawCircle} from './util';
class Content extends React.Component{
    render(){
        const services=this.props.services;
        var userData ={
            statisticses:[[services],[services]],
        } ;
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
                            {services.score}
                        </span>
                    </div>
                    <div className="right_fraction_mem ui-col border_left">
                        <div className="top_score" id="top_score">
                           <DiffComponent id="canvas_diff1" data_width="top_score" services={userData} isHost={true}></DiffComponent>
                        </div>
                        <div className="bottom_hitrate">
                            
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
            </div>
        )
    }
    componentDidMount(){
        var cprops=this.props.services;

        var data_arr = [cprops.shotsSuccessTotal*2,cprops.thirdsSuccessTotal*3,cprops.penaltySuccessTotal],
                color_arr = [ '#cccccc','#000', '#339966'];
        drawCircle('canvas_diff1', data_arr, color_arr)
    }
}
export default Content;