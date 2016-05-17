
$(function() {

	/* All data was manually entered after running arrests.rb */ 

	// 2013 data 
	var data13 = [ 
		{value: 11976, color: "#CB4B16"}, 
		{value: 2349, color: "#FFA500"}
	]

	// 2014 data
	var data14 = {
		labels: ["White","African Americans"], 
		datasets: [
			{
				label:"2013",
	            backgroundColor: "plum",
	            fillColor: "RoyalBlue",
	            borderColor: "rgba(153,0,76,1)",
	            borderWidth: 1,
	            hoverBackgroundColor: "rgba(192,192,192,0.3)",
	            hoverBorderColor: "rgba(153,0,76,1)",
	            data: [4950, 24107], 
						
			}
		]
	};

	// 2015 data
	var data15 = {
		labels: ["White","African Americans"], 
		datasets: [
			{
				label:"2015",
	            backgroundColor: "plum",
	            fillColor: "ForestGreen",
	            borderColor: "rgba(153,0,76,1)",
	            borderWidth: 1,
	            hoverBackgroundColor: "rgba(192,192,192,0.3)",
	            hoverBorderColor: "rgba(153,0,76,1)",
	            data: [3671, 18501], 		
			}
		]
	};

	var option = {};

	/* All three chart instantiations */
	var ctx = document.getElementById("doughnutChart").getContext("2d");
	myDoughnutChart13 = new Chart(ctx).Doughnut(data13,option);

	var ctx2 = document.getElementById("2014BarChart").getContext("2d");
	var barChart14 = new Chart(ctx2).Bar(data14,option);

	var ctx3 = document.getElementById("2015BarChart").getContext("2d");
	var barChart15 = new Chart(ctx3).Bar(data15,option);
})
