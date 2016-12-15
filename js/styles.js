//Colors
var $navy = "#015f70";
var $rainwashed = "#9dcdd3";
var $aqua = "#3ae5e5";
var $mauve = "#ad807b";
var $purple = "#562d2f";






//click on logo brings you to top of page
$(".logo").click(function() {
  scroll(0,0);
});





// Notifications

//Parent Notification Bar
var $notifyBar = document.createElement("div");
    $notifyBar.classList.add("notify-bar");

//Append Notifications to page
$("header").after($notifyBar);
$($notifyBar).hide();

document.getElementById("notify").addEventListener("click", function () {
  $($notifyBar).toggle();

});


var notificationList = [
  {
  button: "X",
  action: "Carmen Sandiego liked your post",
  link: "Understanding Global Trends",
  icon: "like.svg",
  time: "Just now"
  },
  {
  button: "X",
  action: "Norman Caudle sent you a",
  link: "message",
  icon: "message.svg",
  time: "30 minutes ago"
  },
  {
  button: "X",
  action: "You are now connected with",
  link: "Antoney Morrison",
  icon: "connected.svg",
  time: "6 hours ago"
  }
];

for(var i = 0; i < notificationList.length; i++) {
  //For parent new activity divs
  var $newNotificationBlock = document.createElement("div");
  $newNotificationBlock.classList.add("new-notification-block");
  $newNotificationBlock.setAttribute("id", "notifyBlock" + i);
  
  //For new notification clear button
  var $newNotificationBtn = document.createElement("button");
  $newNotificationBtn.classList.add("new-notification-btn");
  $newNotificationBtn.innerHTML = notificationList[i].button;
  $newNotificationBtn.setAttribute("id", "notify" + i);
  
  //For new notification action
  var $newNotificationAction = document.createElement("div");
  $newNotificationAction.classList.add("new-notification-action");
  $newNotificationAction.innerHTML = notificationList[i].action + "&nbsp";
  
  //For new notification link
  var $newNotificationLink = document.createElement("a");
  $newNotificationLink.classList.add("new-notification-link");
  $($newNotificationLink).attr("href", "#");
  $newNotificationLink.innerHTML = notificationList[i].link;
  
  //For new notification icons
  var $newNotificationIcon = document.createElement("img");
  $newNotificationIcon.classList.add("new-notification-icon");
  $newNotificationIcon.src = "img/" + notificationList[i].icon;
  
  //For new notification time
  var $newNotificationTime = document.createElement("div");
  $newNotificationTime.classList.add("new-notification-time");
  $newNotificationTime.innerHTML = notificationList[i].time;
  
  //Put icon and time in same div
  var $newNotificationTimeInfo = document.createElement("div");
  $newNotificationTimeInfo.classList.add("new-notification-action-time-info");
  $($newNotificationTimeInfo).append($newNotificationIcon, $newNotificationTime);
  
  //Put action, link, icon, and time in same div
  var $newNotificationInfo = document.createElement("div");
  $newNotificationInfo.classList.add("new-notification-action-info");
  $($newNotificationInfo).append($newNotificationAction, $newNotificationLink, $newNotificationTimeInfo);
  
  //Append to page
  $notifyBar.appendChild($newNotificationBlock);
  $($newNotificationBlock).append($newNotificationBtn, $newNotificationInfo);
}

//counter for when notifications are cleared
var notifyCounter = 0;

// Hide notifications on button click and add to counter
$('body').on('click', '#notify0', function(){
  $("#notifyBlock0").hide();
  notifyCounter++;
  clearNotifyLight();
});

$('body').on('click', '#notify1', function(){
  $("#notifyBlock1").hide();
  notifyCounter++;
  clearNotifyLight();
});

$('body').on('click', '#notify2', function(){
  $("#notifyBlock2").hide();
  notifyCounter++;
  clearNotifyLight();
});

//Turn off notification light after clearing notify-bar
function clearNotifyLight() {
  if(notifyCounter === notificationList.length) {
    $("#notifyLight").hide();
    
    //no notificactions message
    var $noNotifications = document.createElement("div");
    $noNotifications.classList.add("no-notification");
    $noNotifications.innerHTML = "You have no notifications at this time.";
    $notifyBar.appendChild($noNotifications);
  }
}









// Nav bar
document.getElementById("nav-dash").addEventListener('click',function () {
  //remove other selection
  $("#nav-members").parent().removeClass("tab-active");
  $("#nav-visits").parent().removeClass("tab-active");
  $("#nav-settings").parent().removeClass("tab-active");
  //make this active
  $("#nav-dash").parent().addClass("tab-active");
});

document.getElementById("nav-members").addEventListener('click',function () {
  //remove other selection
  $("#nav-dash").parent().removeClass("tab-active");
  $("#nav-visits").parent().removeClass("tab-active");
  $("#nav-settings").parent().removeClass("tab-active");
  //make this active
  $("#nav-members").parent().addClass("tab-active");
});

document.getElementById("nav-visits").addEventListener('click',function () {
  //remove other selection
  $("#nav-dash").parent().removeClass("tab-active");
  $("#nav-members").parent().removeClass("tab-active");
  $("#nav-settings").parent().removeClass("tab-active");
  //make this active
  $("#nav-visits").parent().addClass("tab-active");
});

document.getElementById("nav-settings").addEventListener('click',function () {
  //remove other selection
  $("#nav-dash").parent().removeClass("tab-active");
  $("#nav-members").parent().removeClass("tab-active");
  $("#nav-visits").parent().removeClass("tab-active");
  //make this active
  $("#nav-settings").parent().addClass("tab-active");
});









//CHARTS

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
  //Remove Bold from other sections
  document.getElementById("dailyTraffic").classList.remove("selected");
  document.getElementById("weeklyTraffic").classList.remove("selected");
  document.getElementById("monthlyTraffic").classList.remove("selected");
  //  Show Chart
  hourlyChart();
  //Bold selection
  document.getElementById("hourlyTraffic").classList.add("selected");
});

document.getElementById("dailyTraffic").addEventListener('click',function () {
  //Remove Bold from other sections
  document.getElementById("hourlyTraffic").classList.remove("selected");
  document.getElementById("weeklyTraffic").classList.remove("selected");
  document.getElementById("monthlyTraffic").classList.remove("selected");
  //  Show Chart
  dailyChart();
  //Bold selection
  document.getElementById("dailyTraffic").classList.add("selected");
});

document.getElementById("weeklyTraffic").addEventListener('click',function () {
  //Remove Bold from other sections
  document.getElementById("hourlyTraffic").classList.remove("selected");
  document.getElementById("dailyTraffic").classList.remove("selected");
  document.getElementById("monthlyTraffic").classList.remove("selected");
  //  Show Chart
  weeklyChart();
  //Bold selection
  document.getElementById("weeklyTraffic").classList.add("selected");
});

document.getElementById("monthlyTraffic").addEventListener('click',function () {
  //Remove Bold from other sections
  document.getElementById("hourlyTraffic").classList.remove("selected");
  document.getElementById("dailyTraffic").classList.remove("selected");
  document.getElementById("weeklyTraffic").classList.remove("selected");
  //  Show Chart
  monthlyChart();
  //Bold selection
  document.getElementById("monthlyTraffic").classList.add("selected");
});

//Have a Chart show on load
window.onload = function() {
  //  Show Chart
  monthlyChart();
};

Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;


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
  ctx.canvas.height = 200;
  var myLineChart = new Chart(ctx, {
    type: "bar",
    data: data,
  });
}


// Functions for doughnut Chart
function mobileUsersChart() {
  var data = {
    labels: ["Mobile", "Tablet", "Desktop", "Other"],
      datasets: [
        {
          backgroundColor: [$navy, $mauve, $rainwashed, $purple],
          hoverBorderColor: $aqua,
          hoverBorderWidth: 3,
          data: [68, 11, 19, 2]
        }
      ]
  };
  
  var ctx = document.getElementById("mobileUserChart").getContext("2d");
  ctx.canvas.height = 200;
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





//New Members Widget
var newMembers = [
  {
    photo: "Lillian_Garrett.jpg",
    name: "Lillian Garrett",
    email: "LGarrett@example.com",
    join: "11/23/16"
  },
  {
    photo: "Wesley_Howard.png",
    name: "Wesley Howard",
    email: "WesHoward@example.com",
    join: "11/21/16"
  },
  {
    photo: "Max_Fernandez.jpg",
    name: "Max Fernandez",
    email: "Max.Fernandez072@example.com",
    join: "11/21/16"
  },
  {
    photo: "Nelson_Watson.jpg",
    name: "Nelson Watson",
    email: "nelson.watson@example.com",
    join: "11/14/16"
  }
];

for(var i = 0; i < newMembers.length; i++) {
  //For parent new member divs
  var $newMemberBlock = document.createElement("div");
  $newMemberBlock.classList.add("new-member-block");
  
  //For new member photos
  var $newMemberProfilePhoto = document.createElement("img");
  $newMemberProfilePhoto.classList.add("new-member-photo");
  $($newMemberProfilePhoto).attr("alt", "Photo of " + newMembers[i].name);
  $newMemberProfilePhoto.src = "img/" + newMembers[i].photo;
  
  //For new member names
  var $newMemberName = document.createElement("div");
  $newMemberName.classList.add("new-member-name");
  $newMemberName.innerHTML = newMembers[i].name;
  
  //For new member emails
  var $newMemberEmail = document.createElement("div");
  $newMemberEmail.classList.add("new-member-email");
  $newMemberEmail.innerHTML = "<a href='mailto:" + newMembers[i].email + "'>" + newMembers[i].email + "</a>";
  
  //For new member join date
  var $newMemberJoin = document.createElement("div");
  $newMemberJoin.classList.add("new-member-join");
  $newMemberJoin.innerHTML = newMembers[i].join;
  
  //Append to page
  document.getElementById("profiles").append($newMemberBlock);
  $($newMemberBlock).append($newMemberProfilePhoto, $newMemberName, $newMemberEmail, $newMemberJoin);
}





//Recent Activity Widget
var newActivity = [
  {
    photo: "Walter_Mitty.jpg",
    name: "Walter Mitty",
    action: "joined YourApp&trade;",
    icon: "user.svg",
    time: "2 Hours Ago"
  },
  {
    photo: "Io_Carter.jpg",
    name: "Io Carter",
    action: "commented on YourApp's SEO Tips",
    icon: "comment.svg",
    time: "2 Hours Ago"
  },
  {
    photo: "Miley_Little_Feather.jpg",
    name: "Miley Little Feather",
    action: "commented on Facebook's Changes for 2016",
    icon: "comment.svg",
    time: "3 Hours Ago"
  },
  {
    photo: "Terrance_Waterz.jpg",
    name: "Terrance Waterz",
    action: "posted YourApp's SEO Tips",
    icon: "write.svg",
    time: "6 Hours Ago"
  }
];

for(var i = 0; i < newActivity.length; i++) {
  //For parent new activity divs
  var $newActivityBlock = document.createElement("div");
  $newActivityBlock.classList.add("new-activity-block");
  
  //For new activity photos
  var $newActivityProfilePhoto = document.createElement("img");
  $newActivityProfilePhoto.classList.add("new-activity-photo");
  $($newActivityProfilePhoto).attr("alt", "Photo of " + newActivity[i].name);
  $newActivityProfilePhoto.src = "img/" + newActivity[i].photo;
  
  //For new activity names
  var $newActivityName = document.createElement("div");
  $newActivityName.classList.add("new-activity-name");
  $newActivityName.innerHTML = newActivity[i].name;
  
  //For new activity actions
  var $newActivityAction = document.createElement("div");
  $newActivityAction.classList.add("new-activity-action");
  $newActivityAction.innerHTML = newActivity[i].action;
  
  //For new activity icons
  var $newActivityIcon = document.createElement("img");
  $newActivityIcon.classList.add("new-activity-icon");
  $newActivityIcon.src = "img/" + newActivity[i].icon;
  
  //For new activity time
  var $newActivityTime = document.createElement("div");
  $newActivityTime.classList.add("new-activity-time");
  $newActivityTime.innerHTML = newActivity[i].time;
  
  //Append to page
  document.getElementById("activity").append($newActivityBlock);
  $($newActivityBlock).append($newActivityProfilePhoto, $newActivityName, $newActivityAction,$newActivityIcon, $newActivityTime);
}









//Autocomplete feature for Message User
  $( function() {
    var availableTags = [
      "Chelsea Clay",
      "Lillian Garrett",
      "Wesley Howard",
      "Max Fernandez",
      "Nelson Watson",
      "Walter Mitty",
      "Io Carter",
      "Miley Little Feather",
      "Terrance Waterz",
      "Carmen Sandiego",
      "Norman Caudle",
      "Antoney Morrison"
    ];
    $( "#search-user-field" ).autocomplete({
      source: availableTags
    });
  } );


//Message User form alert funtion
function sendMessage() {
  //if user or message input is empty
  if( document.getElementById("search-user-field").value === "" || document.getElementById("message-user-field").value === "" ) {
    //display error message
    alert("Please make sure both fields are completed.");
  }
  //else display sent message
  else {
    alert("Your message was sent!");
  }
}

//disable default apge refresh on form submit
$("#message-user-form").submit(function(e) {
    e.preventDefault();
});

//call funtion when send button is clicked
document.getElementById("message-user-btn").addEventListener("click", function () {
  sendMessage();
});










//LOCAL STORAGE

//disable default apge refresh on form submit
$("#settings-form").submit(function(e) {
    e.preventDefault();
});

//get user input
//for email notification
function emailSwitch() {
  if(document.getElementById("email-check").checked) {
    return "On";
  } else {
    return "Off";
  }
}

//for public profile
function profileSwitch() {
  if(document.getElementById("profile-check").checked) {
    return "On";
  } else {
    return "Off";
  }
}

//for Timezone
function timezoneOption() {
    var obj = document.getElementById("timezone");
    return obj.options.selectedIndex;
}

document.getElementById("settings-submit").addEventListener("click", function () {
  var $userEmailPref = emailSwitch();
  var $userProfilePref = profileSwitch();
  var $userTimezone = timezoneOption();
  
  //set items to local storage
  localStorage.setItem("emailNotifications", $userEmailPref);
  localStorage.setItem("publicProfile", $userProfilePref);
  localStorage.setItem("Timezone", $userTimezone);
});

document.getElementById("settings-cancel").addEventListener("click", function () {
  localStorage.clear();
});
                                                            
//check local storage on page load
                                                            
//if settings saved
if(localStorage.length > 0) {

  //get saved email notifications and set option
  var savedEmailPref = localStorage.getItem("emailNotifications");
  if(savedEmailPref === "On"){
    $("#email-check").prop("checked", true);
  } else {
    $("#email-check").prop("checked", false);
  }

  //get saved public profile and set option
  var savedProfilePref = localStorage.getItem("publicProfile");
  if(savedProfilePref === "On"){
    $("#profile-check").prop("checked", true);
  } else {
    $("#profile-check").prop("checked", false);
  }

  //get saved timezone select option and set option
  var savedTimezone = localStorage.getItem("Timezone");
  document.getElementById("timezone").selectedIndex = savedTimezone;

//if no settings saved
} else {
  localStorage.clear();
}