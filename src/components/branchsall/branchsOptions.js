export default {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{
            color:'#ffffff'
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
            color:"#ffffff"
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol:"rect",
        symbolSize:6,
        areaStyle: {
            color:"#56A279 "
        },
        lineStyle:{
            color:"#56A767",
            width:3,
        },
        itemStyle:{
            normal:{
                color:"#56A767"
            }
        }
    }]
}