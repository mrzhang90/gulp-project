<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=8">
    <meta http-equiv="Expires" content="0">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-control" content="no-cache">
    <meta http-equiv="Cache" content="no-cache">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <meta content="telephone=no" name="format-detection">
    <meta content="email=no" name="format-detection">
    <meta name="msapplication-tap-highlight" content="no">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.6.0/skins/default/aliplayer-min.css">
    <!-- <script src="https://g.alicdn.com/de/prismplayer/2.6.0/aliplayer-min.js"></script> -->
    <script src="https://g.alicdn.com/de/prismplayer/2.6.0/aliplayer-h5-min.js"></script>
    <style>
    body {
        margin: 0;
        padding: 0;
    }
    body{
        font-family:arial;
        font-size:80%;
    }
    .get-source {
        text-decoration:none;
        background:#000;
        color:#fff;
        padding:10px 30px;
        border-radius:5px;
        position:fixed;
        right:5px;
        top:5px;
        z-index: 10;
    }
    pre.code{
        padding:5px;
        border:1px solid #ccc;
        background:#f5f5f5;
        border-radius:3px;
        font-family:arial;
        line-height:2;
    }
    .panel span{
        display:inline-block;   
        width:60px;
    }
    .show{
        width:98%;
        display:inline-block;
        overflow:hidden;
        border:1px solid #ccc;
    }
    .show h3{
        text-indent:10px;
    }
    .show pre{
        border-top:1px dotted #ccc;
        padding:5px 0 0 10px;
        line-height:1.5;
        color:#333;
        background:#f5f5f5;
    }
    .show pre:nth-child(2n){
        background:#ccc;
    }
    #joinChatRoom{
        display: none;
        background:#000;
        color:#fff;
    }
    </style>
</head>
<body>
<div id="root">
</div>
<!-- <div class="prism-player" id="J_prismPlayer" style="position:absolute;top:0;left:0;width:100%;height:35rem;"></div> -->
    <div class="prism-player" id="J_prismPlayer" style=""></div>
    <div id="liaotian">
        <ul id="j_msg">
            <simple-counter :message="message"></simple-counter>
        </ul>
        <template id="tmpThumbsUp">
            <ul v-if="message.length>0">
                <div v-for="item of message">
                    <span>{{item.username}}</span>
                    <span>{{item.msg}}</span>
                </div>
            </ul>
        </template>
    </div>
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
    <script type="text/javascript" src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
    <script src="/assets/script/message-output.js"></script>
    <script src="http://cdn.ronghub.com/RongIMLib-2.3.1.js"></script>
    <script src="http://cdn.ronghub.com/RongEmoji-2.2.5.min.js"></script>
    <script src="/assets/script/init.js"></script>
    <script>
    var gameId="DKD2CE2DABq2";
        axios.get('/gm/game/video/get-live.json?gameId='+gameId+'&c='+new Date().getTime())
        .then(function (response) {
            obj=response.data.data;
            console.log(obj.lvStream.liveM3u8)
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
        Vue.component('simple-counter',{
            props:['message'],
            template:'#tmpThumbsUp'
        })
        var app=new Vue({
            el:'#j_msg',
            data:{
                message:[]
            }
        })
        startInit();
        function showResult(id,message){
            // var dom = document.getElementById(id);
            // console.log(message.content.content)
            // dom.innerHTML += '<pre>' + message.senderUserId + ":   " +  RongIMLib.RongIMEmoji.emojiToHTML(message.content.content + "") + '</pre>';
            // dom.innerHTML += '<pre>' + JSON.stringify(message,null,"\t") + '</pre>';
            //JSON.stringify(message,null,"\t")
            var _obj={};
            if(message.content.messageName=="TextMessage"){
                _obj.msg=message.content.content
            }else{
                _obj.msg=message.content.message
            }
            _obj.username=message.content.user.name
            app.$data.message.push(_obj)
        }
        //注册自定义消息

        function registerMessage(type,propertys){
            var messageName = type; // 消息名称。
            var objectName = "s:" + type; // 消息内置名称，请按照此格式命名 *:* 。
            var mesasgeTag = new RongIMLib.MessageTag(true,true); //true true 保存且计数，false false 不保存不计数。

            RongIMClient.registerMessageType(messageName, objectName, mesasgeTag, propertys);
        }

        function startInit(user,targetId){
            var params = {
                appKey : 'x18ywvqfxl1dc',
                token : '6zRDe5sD+Yt5DfgsB6pzjDmaF+xazXX0XoRi5smS2DsIBIDLOsWVyPQ71FKpNlD3pQoHfsZH4uE1JvVDKHH45XRlFL73AM2URD3/eomBXFc='
            };

            var userId = "";

            var callbacks = {
                getInstance : function(instance){
                    RongIMLib.RongIMEmoji.init();
                    //instance.sendMessage  

                    //注册 PersonMessage
                    var propertys = ["name","age","gender"]; // 消息类中的属性名。
                    registerMessage("PersonMessage",propertys);

                    //注册 ProductMessage
                    var propertys = ["price","title","desc","images"]; // 消息类中的属性名。
                    registerMessage("ProductMessage",propertys);
                },
                getCurrentUser : function(userInfo){
                    // console.log(userInfo.userId);
                    userId = userInfo.userId;
                    // alert("链接成功；userid=" + userInfo.userId);
                    // document.titie = ("链接成功；userid=" + userInfo.userId);

                    //加入聊天室
                    joinChatRoom();
                },
                receiveNewMessage : function(message){
                    //判断是否有 @ 自己的消息
                    // var mentionedInfo = message.content.mentionedInfo || {};
                    // var ids = mentionedInfo.userIdList || [];
                    // for(var i=0; i < ids.length; i++){
                    //  if( ids[i] == userId){
                    //      alert("有人 @ 了你！");
                    //  }
                    // }
                    showResult("show1",message);
                    // messageOutput(message);

                }
            };

            init(params,callbacks);
        }

        function getValue(id){
            return document.getElementById(id).value;
        }

        function joinChatRoom(){
            var chatRoomId = 'DKD2CE2DABq2';
                // chatRoomId = chatRoomId.replace(/(^\s*)|(\s*$)/g, " ");
            if(chatRoomId == ""){
                // alert("请输入聊天室 id！");
                return false;
            }

            var IM = RongIMClient.getInstance();
                IM.joinChatRoom(chatRoomId, 50, {
                onSuccess: function() {
                    // alert("加入聊天室 " + chatRoomId + " 成功");
                },
                onError: function(error) {
                    // alert("加入聊天室失败");
                }
            });
        }
  </script>
</body>
</html>