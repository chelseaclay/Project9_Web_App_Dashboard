//VARIABLES

//Colors
var $navy = "#015f70";
var $rainwashed = "#9dcdd3";
var $aqua = "#3ae5e5";
var $mauve = "#ad807b";
var $purple = "#562d2f";

//CHARTS
var $trafficUlLi =$("#traffic ul li");


// Functions for Traffic Line Chart
function hourlyChart() {
  var data = {
    labels: ["12-2AM", "2-4AM", "4-6AM", "6-8AM", "9-10AM", "10-12PM", "12-2PM", "2-4PM", "4-6PM", "6-PAM", "9-10PM", "10-12AM"],
      datasets: [
        {
          backgroundColor: "rgba(157,205,211,0.5)",
          borderColor: $mauve,
          pointBackgroundColor: $mauve,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: $mauve,
          pointHoverRadius: 6,
          data: [89, 39, 26, 30, 59, 55, 79, 91, 17, 50, 92, 74],
        }
      ]
  };
  
  var ctx = document.getElementById("trafficChart").getContext("2d");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      legend: {
        display: false
      }
    }
  });
}

function dailyChart() {
  var data = {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      datasets: [
        {
          backgroundColor: "rgba(173,128,123,0.5)",
          borderColor: $purple,
          pointBackgroundColor: $purple,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: $purple,
          pointHoverRadius: 6,
          data: [451, 589, 559, 938, 123, 206, 438],
        }
      ]
  };
  
  var ctx = document.getElementById("trafficChart").getContext("2d");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      legend: {
        display: false
      }
    }
  });
}

function weeklyChart() {
  var data = {
    labels: ["WEEK 1", "WEEK 2", "WEEK 3", "WEEK 4", "WEEK 5"],
      datasets: [
        {
          backgroundColor: "rgba(58,229,229,0.5)",
          borderColor: $navy,
          pointBackgroundColor: $navy,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: $navy,
          pointHoverRadius: 6,
          data: [944, 824, 1649, 1817, 1956],
        }
      ]
  };
  
  var ctx = document.getElementById("trafficChart").getContext("2d");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      legend: {
        display: false
      }
    }
  });
}

function monthlyChart() {
  var data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
      datasets: [
        {
          backgroundColor: "rgba(157,205,211,0.5)",
          borderColor: $aqua,
          pointBackgroundColor: $aqua,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: $aqua,
          pointHoverRadius: 6,
          data: [367, 577, 307, 1470, 1649, 1817, 517, 562, 803, 1498, 1956, 763],
        }
      ]
  };
  
  var ctx = document.getElementById("trafficChart").getContext("2d");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      legend: {
        display: false
      }
    }
  });
}



//Have right Charts appear on click
document.getElementById("hourlyTraffic").addEventListener('click',function () {
  //  Show Chart
  hourlyChart();
});

document.getElementById("dailyTraffic").addEventListener('click',function () {
  //  Show Chart
  dailyChart();
});

document.getElementById("weeklyTraffic").addEventListener('click',function () {
  //  Show Chart
  weeklyChart();
});

document.getElementById("monthlyTraffic").addEventListener('click',function () {
  //  Show Chart
  monthlyChart();
});

//Have a Chart show on load
window.onload = function() {
  //  Show Chart
  monthlyChart();
};




// Functions for Bar Chart
function dailyChartBar() {
  var data = {
    labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      datasets: [
        {
          label: "All Visits",
          backgroundColor: $rainwashed,
          borderColor: $navy,
          borderWidth: 1,
          data: [180, 53, 76, 122, 133, 147, 153],
        },
        {
          label: "Return Visits",
          backgroundColor: $mauve,
          borderColor: $purple,
          borderWidth: 1,
          data: [91, 17, 50, 92, 74, 92, 74],
        }
      ]
  };
  
  var ctx = document.getElementById("dailyTrafficChart").getContext("2d");
  var myLineChart = new Chart(ctx, {
    type: "bar",
    data: data,
  });
}


// Functions for doughnut Chart
function mobileUsersChart() {
  var data = {
    labels: ["Phones", "Tablets", "Desktop"],
      datasets: [
        {
          backgroundColor: [$navy, $mauve, $rainwashed],
          hoverBorderColor: $aqua,
          hoverBorderWidth: 3,
          data: [68, 13, 19]
        }
      ]
  };
  
  var ctx = document.getElementById("mobileUserChart").getContext("2d");
  var myDoughnutChart = new Chart(ctx, {
    type: "doughnut",
    data: data
  });
}











//Show Charts on load
window.onload = function() {
  //  Show Chart
  monthlyChart();
  dailyChartBar();
  mobileUsersChart();
};
