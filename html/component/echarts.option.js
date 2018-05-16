export default function(id){
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        polar : [
            {
                indicator : [
                    {text : '场均得分', max  : 100},
                    {text : '场均盖帽', max  : 100},
                    {text : '场均抢断', max  : 100},
                    {text : '场均篮板', max  : 100},
                    {text : '场均助攻', max  : 100}
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
                        value : [97, 42, 88, 94, 90, 86],
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