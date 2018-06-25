// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawAreaChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawPieChart() {
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2]
  ]);

  // Set chart options 
  var options = {'title':'How Much Pizza I Ate Last Night',
                  'width':800,
                  'height':600};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawAreaChart() {
  var daysPerMonth = [
    [new Date(2016, 0, 1), 31],
    [new Date(2016, 1, 1), 29],
    [new Date(2016, 2, 1), 31],
    [new Date(2016, 3, 1), 30],
    [new Date(2016, 4, 1), 31],
    [new Date(2016, 5, 1), 30],
    [new Date(2016, 6, 1), 31],
    [new Date(2016, 7, 1), 31],
    [new Date(2016, 8, 1), 30],
    [new Date(2016, 9, 1), 31],
    [new Date(2016, 10, 1), 30],
    [new Date(2016, 11, 1), 31]
  ];

  var data = google.visualization.arrayToDataTable(daysPerMonth, true);

  // Chart options
  var options = {
    title: 'Number of Days Per Month in 2016',
    animation: { startup: true, duration: 2000 },
    legend: { position: 'none' },
    width: 500,
    height: 350
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}