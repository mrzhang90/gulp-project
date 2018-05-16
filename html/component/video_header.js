const React = window.React;
import axios from 'axios';

class VideoHeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            services:{},
            videoStopButCN:"VideoStopBut",
            videoFulButCN:"VideoFullBut"
        }
        this.allPlayer=null;
        this.playerUrl='';
        this.isPlay = false;
    }
     
    render(){

        return (
            <div className="header">
                <div className="prism-player" id="J_prismPlayer">
                <div  className="videoRefreshDiv">
                <button className={this.state.videoFulButCN} 
                    onClick={() => {
                    console.log("full");
                    if (this.allPlayer.fullscreenService.getIsFullScreen()) {
                        this.allPlayer.fullscreenService.cancelFullScreen();
                        this.setState({
                         videoFulButCN:'VideoFullBut'
                        });
                    }else{
                         this.allPlayer.player();
                         this.allPlayer.fullscreenService.requestFullScreen();
                         this.setState({
                         videoFulButCN:'VideoSharkBut'
                        });
                     }
                     }}></button>

                <button className="VideoRefreshBut" 
                    onClick={() => {
                    console.log("refresh");
                    this.allPlayer.loadByUrl(this.playerUrl);
                     }}></button>

                </div>
                <div  className="videoRefreshStop"> 
                <button className={this.state.videoStopButCN} 
                    onClick={() => {
                   
                    if ( this.isPlay) {
                        this.isPlay = false;
                        this.allPlayer.pause();
                        this.setState({
                         videoStopButCN:'VideoStartBut'
                        });
                    }else{
                        this.isPlay = true;
                        this.allPlayer.replay();
                        this.setState({
                         videoStopButCN:'VideoStopBut'
                        });
                    }
                        
                     }}></button>

                </div>
                  
                </div>
            </div>
        )
    }

    componentDidMount(){
        var that = this;
       var gameId="DKD2CE2DABq2";
        axios.get('/gm/game/video/get-live.json?gameId='+gameId+'&c='+new Date().getTime())
        .then(function (response) {
            var obj=response.data.data;
            console.log(obj)
            const HTMLINFO=document.querySelector('html').getBoundingClientRect();
            var player = new Aliplayer({
                id: "J_prismPlayer",
                 autoplay: true,
                 isLive:true,
                 // playsinline:false,
                 width:"100%",
                 videoWidth:HTMLINFO.width+'px',
                 // height:"35rem",
                 // controlBarVisibility:"hover",
                 // useH5Prism:true,
                 // useFlashPrism:false,
                 x5_type: 'h5',
                 x5_video_position: 'center',
                 x5_fullscreen: false,
                 x5_orientation:'portraint',
                 
                 source:obj.lvStream.liveM3u8,
                 // source:"http://output2hd.oss-cn-hangzhou.aliyuncs.com/cmdi/game78.mp4",
                 cover:"",
                 skinLayout:false,
                 },function(player){
                    console.log("播放器创建了。");
                  }
            );
          that.allPlayer = player;
          that.playerUrl = obj.lvStream.liveM3u8;

          var handlePlay= function(e)
         {
         //   alert('play');
         that.isPlay = true;
         that.setState({
                         videoStopButCN:'VideoStopBut'
                        });
         }
          that.allPlayer.on('play',handlePlay);

         var handlePause= function(e)
         {
          //   alert('stop');
         that.isPlay = false;
         that.setState({
                         videoStopButCN:'VideoStartBut'
                        });
         }
        that.allPlayer.on('pause',handlePause);

         var handleReady = function(e)
        {

         player.setPlayerSize('100%','230px');

         }
        player.on('ready',handleReady);
       
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
export default VideoHeaderComponent;