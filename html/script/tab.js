const React = window.React;
const Component=React.Component;
import TabRouter from './tab_router';
import IntroduceController from './tab_introduce_controller';
import DataController from './tab_data_controller';
export default class TabComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const services=this.props.name.data;
        return (
            <TabRouter>
                <IntroduceController title="简介" services={services}></IntroduceController>
                <DataController title="数据" services={services}></DataController>
            </TabRouter>
        )
    }
}