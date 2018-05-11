const React = window.React;
// const MESSAGE=[];
class VideoComponent  extends React.Component{
    constructor(props){
        super(props)
        this.state={
            services:{},
            messages:[],
        }
    }
    componentDidMount(){
        var that = this;
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
            
            var _msg=that.state.messages;
            _msg.push(_obj)
            that.setState({
                messages:_msg
            })
            // MESSAGE.push(_obj)
            // app.$data.message.push(_obj)
            // VideoComponent.state.message.push[_obj];
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
    }
    render(){

        const messages=this.state.messages;
        const element=messages.map((message,index)=>{
            if (message.msg == '加入聊天室！！') {
                return <li key={index}>
                      <span className="messageUserName">{message.username}{'\n\n'}</span>
                      <span className="messageUserDoSomething">{message.msg}</span>
                     </li>
            }else{
                     return <li key={index}>
                      <span className="messageUserName">{message.username}:</span>
                      <span className="messageUserSaySomething">{message.msg}</span>
                     </li>
            }
            
        })

        // console.log(this.state.messages)
        return (
        <div className="component">
              <ul>
                {element}
              </ul>
        
        </div>
    )
    }
    
}

export default VideoComponent;