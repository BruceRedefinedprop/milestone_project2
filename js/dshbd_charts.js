google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawRevChart);

// draw cash on cash chart
google.charts.setOnLoadCallback(drawCoCChart); 

// Build line of Rent, NOI, Expenses

rentChartHeader = ['Year', 'Rent', 'NOI', 'Expenses'];

function rentChartArrayBuilder(header) {
  var chartData = [];
  chartData.push(header);
  for (i = 0; i < modelyears.length; i++) {
    var arrayRow = [];
    arrayRow[0] = modelyears[i].startDate;
    arrayRow[1] = modelRent[i];
    arrayRow[2] = modelNOI[i];
    arrayRow[3] = modelExpenses[i];
    chartData.push(arrayRow);

  }
  return chartData;
}

function cashArrayBuilder(header) {
  var chartData = [];
  chartData.push(header);
  for (i = 0; i < modelyears.length; i++) {
    var arrayRow = [];
    arrayRow[0] = modelyears[i].startDate;
    arrayRow[1] = modelCashonCash[i];
    chartData.push(arrayRow);
  }
  return chartData;
}



function drawRevChart() {
  var rentChartArray = rentChartArrayBuilder(rentChartHeader);
  var data = google.visualization.arrayToDataTable(rentChartArray);

  var options = {
    title: 'Revenue and Expenses',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: 800,
    height: 600
  };

  var chart = new google.visualization.LineChart(document.getElementById('rentChart'));

  chart.draw(data, options);
}


 