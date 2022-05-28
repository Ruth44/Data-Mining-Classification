function chartData(){
console.log(trainingSet());
    return { 
        datasets:
    [
        {
    label: "Conflict Data for Ethiopia. South: Red. North: Blue", 
    
    data: trainingSet().map((point)=>{ 
        return {x:point.YEAR, y: point.FATALITIES}
    
    }), 
    pointBackgroundColor: trainingSet().map((point)=>{ return point.HEMISPHERE=='Southern part of Ethiopia' ? 'red': 'blue' }),
    showLine: false,
    
    pointRadius: 5.5, backgroundColor: 'purple'
    
    }
]
    }
    
    }
    
    function chartOptions() { 
        return { 
            maintainAspectRatio: false,
    
    legend:
    {
    labels:
    {
        fontSize:20

    }},

    responsive: true,
    
    scales:
    {
    xAxes:
    [
    {
    display: true, 
    scaleLabel:
    {
    display: true, 
    labelString: 'YEAR',
    fontSize: 20
    },
    ticks:
    {
    fontSize: 28,
    
    max: 10,
    
    min:0
    }
    }
],
yAxes:
    [
    {
    display: true, 
    scaleLabel:
    
    {
    
    display: true, 
    labelString: 'FATALITIES',
    fontSize: 20
    },
    ticks:
    {
    fontSize: 28,
    
    max: 10,
    
    min:0
    }
    }
]
}
        }
    }