export default {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{
            color:'#9098B8'
        }
    },
    grid:{
        right:'3%',
        bottom:'10%',
        top:'10%'
    },
    yAxis: {
        type: 'value',
        splitLine:{
            show:false
        },
        axisLabel:{
            color:"#9098B8"
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol:"circle",
        symbolSize:10,
        areaStyle: {
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color:'rgba(92,181,110,0.50) '
                }, {
                    offset: 1, color: 'rgba(59,237,170,0.05)' 
                }],
                globalCoord: false 
            }
        },
        lineStyle:{
            color:"#67FEDB",
            width:3,
        },
        itemStyle:{
            normal:{
                color:"#67FEDB"
            }
        }
    }]
}