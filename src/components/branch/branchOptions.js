export default {
    xAxis: {
        type: 'category',
        show:true,
        boundaryGap: false,
        data: ['00', '01', '02', '03', '04', '05', '06','07','08','09','10','11','12',
                '13','14','15','16','17','18','19','20','21','22','23'],
        axisLabel:{
            color:'#615CFF'
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
        // data:[800,900,1000,1100],
        axisLabel:{
            color:"#615CFF"
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 2320],
        type: 'line',
        symbol:"rect",
        symbolSize:0,
        areaStyle: {
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color:'rgba(74,53,243,0.30)'
                }, {
                    offset: 1, color: 'rgba(59,147,237,0.10)' 
                }],
                globalCoord: false 
            }
        },
        lineStyle:{
            color:{
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0, color:'rgba(97,92,255,1)'
                }, {
                    offset: 1, color: 'rgba(50,176,255,1)' 
                }],
                globalCoord: false 
            },
            width:3,
        },
        itemStyle:{
            normal:{
                color:"#56A767"
            }
        }
    }]
}