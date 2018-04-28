const React = window.React;
const Component=React.Component;
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
        super(props)
    }
    render(){
        const services=this.props.services
        return (
            <div className="tab_score">
                <h3 className="title">球队对比</h3>
                <div>
                    AAA
                <div>
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
            </div>
        )
    }
}