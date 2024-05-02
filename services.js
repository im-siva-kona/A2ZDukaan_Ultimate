// services.js
$(document).ready(function(){

  $(".service").hover(function(){
    var service = $(this);
    var totalWorkers = Math.floor(Math.random() * 20) + 10; // Random number between 10 and 30
    var bookedWorkers = Math.floor(Math.random() * totalWorkers); // Random number between 0 and totalWorkers
    var availableWorkers = totalWorkers - bookedWorkers;

    // Create worker info div
    var workerInfo = $("<div class='worker-info'></div>");
    workerInfo.html("<p>Total Workers: " + totalWorkers + "</p><p>Booked Workers: " + bookedWorkers + "</p><p>Available Workers: " + availableWorkers + "</p>");

    // Position worker info div relative to the service
    var position = service.position();
    var width = service.outerWidth();
    var height = service.outerHeight();
    var workerInfoWidth = 200; // Adjust the width of worker info div as needed
    var workerInfoHeight = 90; // Adjust the height of worker info div as needed

    // Calculate the top and left position of worker info div
    var top = position.top + height + 10; // Adjust the top position
    var left = position.left + (width - workerInfoWidth) / 2; // Center worker info div horizontally

    // Set the position of worker info div
    workerInfo.css({
      top: top,
      left: left,
    });

    // Append worker info div to the body
    $("body").append(workerInfo);

  }, function(){
    // Remove worker info div on mouseout
    $(".worker-info").remove();
  });



  $(".service").click(function(){
    var title = $(this).find("h2").text();
    var price, arrivalTime, workHours;
    // Set details based on service
    switch(title) {
      case "Home Repair":
        price = "$50";
        arrivalTime = "2 hours";
        workHours = "9:00 AM - 6:00 PM";
        break;
      case "Construction Works":
        price = "$1000";
        arrivalTime = "1 day";
        workHours = "8:00 AM - 5:00 PM";
        break;
      case "Delivery Works":
        price = "$10";
        arrivalTime = "1 hour";
        workHours = "24/7";
        break;
      case "Plumbing Services":
        price = "$80";
        arrivalTime = "3 hours";
        workHours = "9:00 AM - 8:00 PM";
        break;
      case "Gardening Services":
        price = "$60";
        arrivalTime = "4 hours";
        workHours = "8:00 AM - 7:00 PM";
        break;
      case "Cleaning Services":
        price = "$70";
        arrivalTime = "2 hours";
        workHours = "8:00 AM - 6:00 PM";
        break;
      case "Painting Services":
        price = "$120";
        arrivalTime = "1 day";
        workHours = "9:00 AM - 5:00 PM";
        break;
      case "Electrical Services":
        price = "$90";
        arrivalTime = "3 hours";
        workHours = "7:00 AM - 8:00 PM";
        break;
      case "Carpentry Services":
        price = "$80";
        arrivalTime = "2 hours";
        workHours = "10:00 AM - 6:00 PM";
        break;
      case "Moving Services":
        price = "$150";
        arrivalTime = "1 day";
        workHours = "8:00 AM - 9:00 PM";
        break;
      default:
        price = "$120";
        arrivalTime = "1 day";
        workHours = "9:00 AM - 7:00 PM";
    }
    $("#modalTitle").text(title);
    $("#modalPrice").text("Price: " + price);
    $("#modalArrivalTime").text("Estimated Arrival Time: " + arrivalTime);
    $("#modalWorkHours").text("Work Hours: " + workHours);
    $("#serviceModal").css("display", "block");
  });

  $(".close").click(function(){
    $("#serviceModal").css("display", "none");
  });

  $("#bookNowBtn").click(function(){
    // Placeholder: Add booking functionality here
    alert("Booking confirmed! You will receive a confirmation message shortly.");
  });

  $("#callBtn").click(function(){
    // Placeholder: Add call functionality here
    alert("Calling service provider...");
  });

  $("#reviewsBtn").click(function(){
    // Placeholder: Add reviews functionality here
    alert("Viewing reviews...");
  });
  
});
