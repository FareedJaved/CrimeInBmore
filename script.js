
$(function() {

	/* All data was manually entered after running arrests.rb */ 

	// 2013 data 
	var data13 = [ 
		{value: 11976, color: "Purple"}, 
		{value: 2349, color: "#ffb31a"}
	];

	// How I want the chart to behave while being loaded on page
	var doughnutOptions = {
  		segmentStrokeColor: "black",
  		segmentStrokeWidth: 3,
  		percentageInnerCutout: 50,
  		animation : true, 
  		animationSteps: 100, 
  		animationEasing: "easingOutQuart",
  		animateRotate: true, 
  		animateScale:true
  	};

  	var ctx = document.getElementById("doughnutChart").getContext("2d");
	var myDoughnutChart13 = new Chart(ctx).Doughnut(data13,doughnutOptions);

// =================================================================

	// 2014 data
	var data14 = [
		{value: 11976, color: "Purple"}, 
		{value: 2349, color: "#ffb31a"}
	];

	var ctx2 = document.getElementById("2014BarChart").getContext("2d");
	var barChart14 = new Chart(ctx2).Doughnut(data14,doughnutOptions);

// ==================================================================

	// 2015 data
	var data15 = [
		{value: 18501, color: "Purple"}, 
		{value: 3671, color: "#ffb31a"}
	];

	var ctx3 = document.getElementById("2015BarChart").getContext("2d");
	var barChart15 = new Chart(ctx3).Doughnut(data15,doughnutOptions);
})
