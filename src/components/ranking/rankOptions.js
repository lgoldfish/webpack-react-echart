export default {
    // backgroundColor:"red",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '1%',
        top:"3%",
        containLabel: true
    },
    xAxis: {
        show:false,
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine:{
            show:false
        }
    },
    yAxis: {
        inverse:true,
        type: 'category',
        data: ['A1','A2','B','C1','C2','D','E1','E2','E3'],
        axisLabel: {
            color: "#9098B8",
            fontSize:16,
            fontFamily:'PingFangSC-Regular',
            // fontWeight:'400',
            margin:16
        },
        splitArea:{
            show:true,
            areaStyle:{
                color:"transparent"
            }

        }
    },
    series: [
        {
            type: 'bar',
            data: [1317443, 1317443, 1317443, 1317443, 1317443, 1317443,1317443,1317443,1317443],
            itemStyle:{
                color:"#080B20"
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            animation: false
        },
        {
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230,12323,343434,43434],
            itemStyle:{
                color:{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#3582F3' 
                    }, {
                        offset: 1, color: '#85C1FF' 
                    }],
                    globalCoord: false 
                }
            },
            label:{
                show:true,
                // rotate:20,
                position:"right",
                color:"#ffffff"
            }
        },
        
    ]
}