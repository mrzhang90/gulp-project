const React = window.React;
const Component=React.Component;
import TabRouter from './tab_router';
class IntroduceController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const services=this.props.services
        return (
            <div>
                <h3 className="title">比赛信息</h3>
                <ul className="list">
                    <li>
                        <span>{services.bisaiTime}</span>
                    </li>
                    <li>
                        <span>{services.bisaiAddress}</span>
                    </li>
                    <li>
                        <span>{services.bisaiChangguan}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
class DataController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const services=this.props.services
        return (
            <div>
                <h3 className="title">比赛信息2</h3>
                <ul className="list">
                    <li>
                        <span>{services.bisaiTime}</span>
                    </li>
                    <li>
                        <span>{services.bisaiAddress}</span>
                    </li>
                    <li>
                        <span>{services.bisaiChangguan}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default class TabComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const services=this.props.name
        return (
            <TabRouter>
                <IntroduceController title="简介" services={services}></IntroduceController>
                <DataController title="数据" services={services}></DataController>
            </TabRouter>
        )
    }
}