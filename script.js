
$(function() {

	/* All data was manually entered after running arrests.rb */ 

	// 2013 data 
	var data13 = {
		labels: ["White","African Americans"], 
		datasets: [
			{
				label:"",
	            backgroundColor: "plum",
	            fillColor: "BlueViolet",
	            borderColor: "rgba(153,0,76,1)",
	            borderWidth: 1,
	            hoverBackgroundColor: "rgba(192,192,192,0.3)",
	            hoverBorderColor: "rgba(153,0,76,1)",
	            data: [2349, 11976], 
						
			}
		]
	};

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

	// optional
	var option = {};

	/* All three chart instantiations */
	var ctx = document.getElementById("2013BarChart").getContext("2d");
	var barChart13 = new Chart(ctx).Bar(data13,option);

	var ctx2 = document.getElementById("2014BarChart").getContext("2d");
	var barChart14 = new Chart(ctx2).Bar(data14,option);

	var ctx3 = document.getElementById("2015BarChart").getContext("2d");
	var barChart15 = new Chart(ctx3).Bar(data15,option);
})
