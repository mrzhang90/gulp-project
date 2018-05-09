const React = window.React;
const ReactDOM = window.ReactDOM;
import VideoHeaderComponent from './video_header';
import VideoComponent from './video_component';



class VideoRootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            services:{}
        }
    }
    render(){
        const services=this.state.services
       
            return (
                <div>
                    <VideoHeaderComponent name={services}/>
                    <VideoComponent name={services}/>
                </div>
            )

    }
    componentDidMount(){
       
    }
}
ReactDOM.render(
    <VideoRootComponent></VideoRootComponent>,
    document.getElementById('root')
  );