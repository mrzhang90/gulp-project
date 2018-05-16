export function drawCircle(canvasId, data_arr, color_arr){
    var drawing = document.getElementById(canvasId);
    var parent=drawing.parentNode;
    if(parent.offsetHeight<=0)
        return;
    var cHeight=drawing.width;
    if(drawing.getAttribute('data-width')){
        var id=drawing.getAttribute('data-width');
        cHeight=document.getElementById(id).offsetHeight*2;
    }
    drawing.width=cHeight;
    drawing.height=cHeight;
    // console.log(drawing.width)
    if(drawing.getContext) {
        var context = drawing.getContext('2d');
        var lineWidth=12;
        var radius = drawing.height/2 -lineWidth*2,//半径
            ox = radius +lineWidth*2, oy = radius +lineWidth*2;//圆心
        var width = 30, height = 10, //图例宽高
            posX = ox * 2 +lineWidth*2, posY = 30;//图例位置
        var textX = posX + width + 5, textY = posY + 10;//文本位置
        var startAngle = 0, endAngle = 0;//起始、结束弧度
        var fontSize = 40; //字号大小
        // context.strokeStyle = 'Purple';
        // context.lineWidth = 3;
        // context.strokeRect(0, 0, drawing.width, drawing.height);
        var len=data_arr.length,count=eval(data_arr.join("+"));
        var timer;
        document.body.onclick=function(){
            clearInterval(timer)
        }
        function draw(i){
            //三段-先加载第一段
            //设置起始值和结束值
            //开启画圆动画，从起始值画到结束值结束动画
            endAngle += (1/count*data_arr[i]).toFixed(5) * 2*Math.PI;
            var startVal=startAngle,
                ssVal=startAngle,
                stopVal=endAngle,
                c_color=color_arr[i];
            timer=setInterval(function(){
                // console.log(1,ssVal,endAngle)
                ssVal=ssVal>=endAngle?endAngle:ssVal
                // console.log(2,ssVal,endAngle)
                // console.log(ox, oy, radius, startVal, ssVal-0.02>startVal?ssVal-0.02:ssVal, false)

                //画一个空心圆
                context.beginPath();
                context.arc(ox, oy, radius, startVal, ssVal-0.02>startVal?ssVal-0.04:ssVal, false);
                context.lineWidth=lineWidth;
                context.strokeStyle=c_color;
                context.stroke();//画空心圆
                context.closePath();
                context.restore();

                context.fillStyle = '#1d89d5';
                context.font= fontSize + 'px Microsoft Yahei';
                context.textAlign='center';
                context.fillText(count, (cHeight/2), (cHeight/2)+(fontSize/3));
                if(ssVal==endAngle){
                    clearInterval(timer)
                    // setTimeout(function(){
                    startAngle = endAngle;
                    if(++i==len){
                        return;
                    }
                    draw(i)
                    // },80);
                    return;
                }
                ssVal+=0.5;
            },50);
        }
        draw(0)
    }
};