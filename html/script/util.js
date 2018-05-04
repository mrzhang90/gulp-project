export function drawCircle(canvasId, data_arr, color_arr, text_arr){
    var drawing = document.getElementById(canvasId);
    if(drawing.getContext) {
        var cHeight=drawing.offsetHeight;
        var context = drawing.getContext('2d');
        var radius = drawing.height/2 -20,//半径
            ox = radius +20, oy = radius +20;//圆心
        var width = 30, height = 10, //图例宽高
            posX = ox * 2 +20, posY = 30;//图例位置
        var textX = posX + width + 5, textY = posY + 10;//文本位置
        var startAngle = 0, endAngle = 0;//起始、结束弧度
        var fontSize = 20; //字号大小
        // context.strokeStyle = 'Purple';
        // context.lineWidth = 3;
        // context.strokeRect(0, 0, drawing.width, drawing.height);
        var len=data_arr.length;
        var timer;
        document.body.onclick=function(){
            clearInterval(timer)
        }
        function draw(i){
            //三段-先加载第一段
            //设置起始值和结束值
            //开启画圆动画，从起始值画到结束值结束动画
            endAngle += data_arr[i] * 2*Math.PI;
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
                context.lineWidth=6;
                context.strokeStyle=c_color;
                context.stroke();//画空心圆
                context.closePath();
                context.restore();

                context.fillStyle = '#1d89d5';
                context.font= fontSize + 'px Microsoft Yahei';
                context.textAlign='center';
                context.fillText('100%', (cHeight/2), (cHeight/2));
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