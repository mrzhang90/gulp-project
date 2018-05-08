const React = window.React;
const Component=React.Component;
export default class TabRouter extends Component{
    constructor(props){
        super(props);
        this.state={
            current:0
        }
    }
    itemNav(index){
        return index===this.state.current?"ui-col nav-active":"ui-col"
    }
    itemCont(index){
        return index===this.state.current?"cont":"cont hide"
    }
    render(){
        return (
            <div className="tab_main">
                <div className="tab_title">
                    {
                        React.Children.map(this.props.children,(element,index) =>{
                            return (
                                <div onClick={()=>{this.setState({current:index})}} className={ this.itemNav(index) }>{ element.props.title }</div>
                            )
                        })
                    }
                </div>
                <div className="tab_content">
                    {
                        React.Children.map(this.props.children,(element,index) =>{
                            return (
                                <div className={ this.itemCont(index) }>{ element }</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}