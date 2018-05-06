const React = window.React;
const Component=React.Component;
import IntroduceController from './tab_introduce_controller';
import DataController from './tab_data_controller';
export default class TabComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            route: window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
            route: window.location.hash.substr(1)
            })
        })
    }

    render(){
        const services=this.props.name.data;
        let Child,class1=['ui-col'],class2=['ui-col'];
        switch (this.state.route) {
            case '/index': Child = IntroduceController; class1.push('nav-active'); break;
            case '/about': Child = DataController; class2.push('nav-active');break;
            default:      Child = IntroduceController;class1.push('nav-active');
        }
        return (
            <div className="tab_main">
                <div className="tab_title">
                    <div className={class1.join(" ")}><a href="#/index">简介</a></div>
                    <div className={class2.join(" ")}><a href="#/about">数据</a></div>
                </div>
                <div className="tab_content">
                    <Child className="cont" services={services}/>
                </div>
            </div>
        )
    }
}