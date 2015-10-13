google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBarColors);

function drawBarColors() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'percent users'],
        ['Windows', 93],
        ['Mac', 5],
        ['Linux', 1],
        ['Other', 1],
    ]);

    var options = {
        title: '% users',
        chartArea: {width: '50%'},
        colors: ['#b0120a', '#ffab91',],
        hAxis: {
            title: 'percent',
            minValue: 0
        },
        vAxis: {
            title: 'OS'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}