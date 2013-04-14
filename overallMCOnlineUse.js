      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});
      google.load('visualization', '1', {'packages': ['table']});

	function drawVisualization() {
  	var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheet/ccc?key=0AncMRkejfB-XdHFXb3B1Y3lFd052Yy0xdkxuRUE4eUE#gid=0');

  	// Apply query language.
  	query.setQuery('select toDate(A),sum(C) where B contains "International" group by toDate(A) pivot B');

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
  			//title: "MCOnline Use",
  			//width: "1400",
  			height: "600",
  			legend: "top",
  			hAxis: {viewWindow: 'maximized'}
  		};
  		
  		var table_options = {
			showRowNumber: "true",
  		}

  	MCO_chart = new google.visualization.ColumnChart(document.getElementById('OverallMCOnlineUse'));
  	MCO_chart.draw(data, options);
  	
  	var MCO_table = new google.visualization.Table(document.getElementById('OverallMCOnlineUseTable'));
  	MCO_table.draw(data, table_options);
	}
	
	// Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawVisualization);
