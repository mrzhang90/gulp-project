const React=window.React;
import DiffComponent from './diff_component';
import {drawCircle} from './util';
class Content extends React.Component{
    render(){
        const services=this.props.services.data;
        return (
            <div className="mem_content">
                <div className="head_mem">
                    <span>北京理工</span>
                    <span>100:98</span>
                    <span>中国科学院</span>
                </div>
                <div className="fraction_mem">
                    <div className="left_fraction_mem">

                    </div>
                    <div className="right"></div>
                    <DiffComponent id="canvas_diff1" services={services} isHost={true}></DiffComponent>
                </div>
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
    }
}
export default Content;