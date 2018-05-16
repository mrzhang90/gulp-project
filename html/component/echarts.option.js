export default function(id,option){
    var myChart = echarts.init(document.getElementById(id));
    var max=0;
    for(var _tmp in option){
        if(max<option[_tmp]){
            max=option[_tmp]
        }
    }
    max+=10;
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        polar : [
            {
                indicator : [
                    {text : '场均得分', max  : max},
                    {text : '场均盖帽', max  : max},
                    {text : '场均抢断', max  : max},
                    {text : '场均篮板', max  : max},
                    {text : '场均助攻', max  : max}
                ]
            }
        ],
        series : [
            {
                name: '完全实况球员数据',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        }
                    }
                },
                data : [
                    {
                        value : [option.score+10,option.steals+10,option.caps+10,option.backboard+10,option.assists+10],
                        name : '舍普琴科'
                    }
                ]
            }
        ],
        color: ['#8aedd5','#93bc9e','#cef1db','#7fe579','#a6d7c2',
                '#bef0bb','#99e2vb','#94f8a8','#7de5b8','#4dfb70']
    };
    myChart.setOption(Object.assign(option));
}