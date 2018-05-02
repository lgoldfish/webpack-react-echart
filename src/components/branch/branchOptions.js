export default {
    xAxis: {
        type: 'category',
        show:true,
        boundaryGap: false,
        data: ['00', '01', '02', '03', '04', '05', '06','07','08','09','10','11','12',
                '13','14','15','16','17','18','19','20','21','22','23'],
        axisLabel:{
            color:'#ffffff'
        }
    },
    grid:{
        right:'5%',
        bottom:'10%',
        top:'2%',
        left:"20%"
    },
    yAxis: {
        show:true,
        type: 'value',
        splitLine:{
            show:false
        },
        data:[800,900,1000,1100],
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