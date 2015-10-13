/**
 * Created by session1 on 10/13/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBarColors);

function drawBarColors() {
    var data = google.visualization.arrayToDataTable([
        ['City', 'percent users'],
        ['Android', 52],
        ['Apple', 41],
        ['Windows', 3.5],
        ['Other', 3.5],
    ]);

    var options = {
        title: '% users',
        chartArea: {width: '50%'},
        colors: ['#4876FF', '#ffab91',],
        hAxis: {
            title: 'percent',
            minValue: 0
        },
        vAxis: {
            title: 'OS'
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));
    chart.draw(data, options);
}