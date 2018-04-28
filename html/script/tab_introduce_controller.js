const React = window.React;
const Component=React.Component;
export default class IntroduceController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const services=this.props.services
        return (
            <div className="tab_introduce">
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