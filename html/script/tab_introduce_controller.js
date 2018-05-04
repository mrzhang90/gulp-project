const React = window.React;
const Component=React.Component;
export default class IntroduceController extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const services=this.props.services;
        return (
            <div className="tab_introduce">
                <h3 className="title">比赛信息</h3>
                <ul className="list">
                    <li>
                        <span>{services.competingTime}</span>
                    </li>
                    <li>
                        <span>{services.areanName}</span>
                    </li>
                    <li>
                        <span>{services.location}</span>
                    </li>
                </ul>
            </div>
        )
    }
}