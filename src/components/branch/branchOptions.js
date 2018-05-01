export default {
    xAxis: {
        type: 'category',
        show:false,
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel:{
            color:'#ffffff'
        }
    },
    grid:{
        right:'1.5%',
        bottom:'2%',
        top:'2%',
        left:"1.5%"
    },
    yAxis: {
        show:false,
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
        symbolSize:0,
        areaStyle: {
            color:"rgba(74,53,243,0.30)"
        },
        lineStyle:{
            color:"rgba(74,53,243,1)",
            width:3,
        },
        itemStyle:{
            normal:{
                color:"#56A767"
            }
        }
    }]
}