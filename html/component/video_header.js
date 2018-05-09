const React = window.React;
import axios from 'axios';

class VideoHeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            services:{}
        }
    }
    render(){
       
        return (
            <div className="header">
                <div className="prism-player" id="J_prismPlayer"></div>
            </div>
        )
    }

    componentDidMount(){
       var gameId="DKD2CE2DABq2";
        axios.get('/gm/game/video/get-live.json?gameId='+gameId+'&c='+new Date().getTime())
        .then(function (response) {
            var obj=response.data.data;
            console.log(obj)
            const HTMLINFO=document.querySelector('html').getBoundingClientRect();
            var player = new Aliplayer({
                id: "J_prismPlayer",
                 // autoplay: true,
                 // isLive:true,
                 // playsinline:false,
                 width:"100%",
                 videoWidth:HTMLINFO.width+'px',
                 // height:"35rem",
                 // controlBarVisibility:"hover",
                 // useH5Prism:true,
                 // useFlashPrism:false,
                 x5_type: 'h5',
                 x5_video_position: 'top',
                 x5_fullscreen: false,
                 x5_orientation:'portraint',
                 source:obj.lvStream.liveM3u8,
                 // source:"http://output2hd.oss-cn-hangzhou.aliyuncs.com/cmdi/game78.mp4",
                 cover:""
                 },function(player){
                    console.log("播放器创建了。");
                  }
            );
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
export default VideoHeaderComponent;