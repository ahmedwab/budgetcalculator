//function to load the pie and donut Google charts
function loadcharts(){

  google.charts.load("current", {packages:["corechart"]});
       google.charts.setOnLoadCallback(drawChart);
       google.charts.setOnLoadCallback(drawsecondChart)
       function drawChart() {
         var data = google.visualization.arrayToDataTable([
           ['Expenses', 'Monthly Income'],
           ['Living Expenses',values[1]],
           ['Transportation',      values[2]],
           ['Financial',  values[3]],
           ['Child Care', values[4]],
           ['Health Care',    values[5]],
           ['Leisure',    values[6]],
           ['Money Available',    total]

         ]);

         var options = {
           title: 'Monthly Funds Distribution',
           is3D: true,
           backgroundColor: 'rgb(255,255,255)'
         };

         var chart = new google.visualization.PieChart(document.getElementById('expenses_chart'));
         chart.draw(data, options);
       }
       function drawsecondChart() {
        var data = google.visualization.arrayToDataTable([
          ['Total Income', 'Income in a month'],
          ['Monthly Income',     income[0]],
          ['Investment Income',      income[1]],
          ['Rental Income',  income[2]],
          ['Tax Refund', income[3]],
          ['Other',    income[4]]
        ]);

        var options = {
          title: 'Income Distribution',
          pieHole: 0.4,
          backgroundColor: 'rgb(255,255,255)'

        };

        var chart = new google.visualization.PieChart(document.getElementById('income_chart'));
        chart.draw(data, options);
      }
    }
