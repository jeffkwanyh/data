      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});
      google.load('visualization', '1', {'packages': ['table']});

	function drawVisualization() {
  	var query = new google.visualization.Query(
      //'https://docs.google.com/spreadsheet/ccc?key=0AncMRkejfB-XdFFKQ1lNWTEtdU9XOUVOcnJxTUwyUlE#gid=1');
  	  'https://docs.google.com/spreadsheet/tq?key=0AncMRkejfB-XdElpYkNnZDFCYi1OYkhKbHl3MGphY0E&gid=2&range=L1%3AT11&headers=-1');

  	// Apply query language.
  	query.setQuery('SELECT *');

  	// Send the query with a callback function.
  	query.send(handleQueryResponse);
	}

	function handleQueryResponse(response) {
  		if (response.isError()) {
    		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
   		return;
  		}

  		var data = response.getDataTable();
  		var options = {
  			//title: "Total Responses by Month",
  			//curveType: "function",
  			//width: "1400",
  			height: "480",
  			hAxis: { title: "Months", baseline: "0", viewWindowMode: "pretty"},
  			vAxis: { title: "No. of Responses", baseline: "0", viewWindowMode: "pretty"}
  		};
  		
  		var table_options = {
			showRowNumber: "true",
  		}

  	trm_chart = new google.visualization.ColumnChart(document.getElementById('TotalResponsesByMonth'));
  	trm_chart.draw(data, options);
  	
  	var trm_table = new google.visualization.Table(document.getElementById('TotalResponsesByMonthTable'));
  	trm_table.draw(data, table_options);
	}
	
	// Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawVisualization);
