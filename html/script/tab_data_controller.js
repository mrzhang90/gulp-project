const React = window.React;
const Component=React.Component;
import {drawCircle,hello} from './util';
class ScoreController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const services=this.props.services;
        return (
            <div className="tab_score">
                <h3 className="title">球队成绩</h3>
                <ul className="list">
                    <li>
                        <span>10</span>
                        <span>第一节</span>
                        <span>10</span>
                    </li>
                    <li>
                        <span>10</span>
                        <span>第一节</span>
                        <span>10</span>
                    </li>
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
        const services=this.props.services;
        return (
            <div className="tab_optimal">
                <h3 className="title">本场最佳</h3>
                <ul className="list">
                    <li>
                        <div className="between">
                            <div>
                                <img src="./images/icon_hometeam-1x.png"/>
                                <span className="pl18">蒲迪</span>
                            </div>
                            <span>17</span>
                        </div>
                        <span className="middle">得分</span>
                        <div className="between">
                            <span>17</span>
                            <div>
                                <span className="pr18">蒲迪</span>
                                <img src="./images/icon_secondteam-1x.png"/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="between">
                            <div>
                                <img src="./images/icon_hometeam-1x.png"/>
                                <span className="pl18">蒲迪</span>
                            </div>
                            <span>17</span>
                        </div>
                        <span className="middle">得分</span>
                        <div className="between">
                            <span>17</span>
                            <div>
                                <span className="pr18">蒲迪</span>
                                <img src="./images/icon_secondteam-1x.png"/>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="between">
                            <div>
                                <img src="./images/icon_hometeam-1x.png"/>
                                <span className="pl18">蒲迪</span>
                            </div>
                            <span>17</span>
                        </div>
                        <span className="middle">得分</span>
                        <div className="between">
                            <span>17</span>
                            <div>
                                <span className="pr18">蒲迪</span>
                                <img src="./images/icon_secondteam-1x.png"/>
                            </div>
                        </div>
                    </li>
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
        var data_arr = [0.3, 0.4, 0.3],
                color_arr = ['#339966', '#cccccc', '#000'],
                text_arr =['第一季度', '第二季度', '第三季度'];
        drawCircle('canvas_diff1', data_arr, color_arr, text_arr)
        var data_arr = [0.3, 0.2, 0.5],
                color_arr = ['#339966', '#cccccc', '#000'],
                text_arr =['第一季度', '第二季度', '第三季度'];
        drawCircle('canvas_diff2', data_arr, color_arr, text_arr)
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
        const services=this.props.services
        return (
            <div>
                <StaticsDataComponent services={services}></StaticsDataComponent>
                <StaticsDataComponent services={services}></StaticsDataComponent>
            </div>
        )
    }
}
class StaticsDataComponent extends Component{
    render(){
        const services=this.props.services
        return (
            <div className="tab_static">
                <h3 className="title">中国科学院-球员数据</h3>
                <div className="content_static">
                    <ul className="table_static">
                        <li>
                           <span>球员号</span>
                           <span>球员</span>
                           <span>得分</span>
                           <span>篮板</span>
                           <span>主攻</span>
                           <span>投篮</span>
                           <span>投篮</span>
                           <span>投篮</span>
                        </li>
                        <li>
                            <span>11<i></i></span>
                            <span>哈哈哈哈</span>
                            <span>9</span>
                            <span>11</span>
                            <span>11</span>
                            <span>1</span>
                           <span>投篮</span>
                           <span>投篮</span>
                        </li>
                        <li>
                            <span>11</span>
                            <span>哈哈哈哈</span>
                            <span>9</span>
                            <span>11</span>
                            <span>11</span>
                            <span>1</span>
                           <span>投篮</span>
                           <span>投篮</span>
                        </li>
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
                <ScoreController services={services}></ScoreController>
                <OptimalController services={services}></OptimalController>
                <ComparedController services={services}></ComparedController>
                <StatisticsController services={services}></StatisticsController>
                <HomedataController services={services}></HomedataController>
            </div>
        )
    }
}