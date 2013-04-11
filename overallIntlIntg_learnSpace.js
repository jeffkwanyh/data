      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});
      google.load('visualization', '1', {'packages': ['table']});

	function drawVisualization() {
  	var query = new google.visualization.Query(
      'https://docs.google.com/spreadsheet/ccc?key=0AncMRkejfB-XdFFKQ1lNWTEtdU9XOUVOcnJxTUwyUlE#gid=1');

  	// Apply query language.
  	query.setQuery('SELECT B');

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
  			//width: "1400",
  			height: "480",
  		};
  		
  		var table_options = {
			showRowNumber: "true",
  		}

  	chart = new google.visualization.PieChart(document.getElementById('OverallLearningSpace'));
  	orHOS_chart.draw(data, options);
  	
  	var table = new google.visualization.Table(document.getElementById('OverallLearningSpaceTable'));
  	orHOS_table.draw(data, table_options);
	}
	
	// Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawVisualization);
