var config = {
    apiKey: "AIzaSyD_9FAoaTEfEj_oGSRIOZAYBELGnxFzjJI",
    authDomain: "trainactivity-2b4e0.firebaseapp.com",
    databaseURL: "https://trainactivity-2b4e0.firebaseio.com",
    projectId: "trainactivity-2b4e0",
    storageBucket: "trainactivity-2b4e0.appspot.com",
    messagingSenderId: "96105500132"
  };
  firebase.initializeApp(config);
  var db=firebase.database();
  var trainName="",destination="",trainTime="",frequency=0;
  var dbtrainName="",dbdestination="",dbtrainTime="",dbfrequency=0;
  $("#submitBtn").on("click",function(event){
      event.preventDefault();
       trainName=$("#trainName").val().trim();
       destination=$("#Destination").val().trim();
       trainTime=$("#trainTime").val().trim();
       frequency=$("#Frequency").val().trim();
       $("#trainName").val("");
       $("#Destination").val("");
       $("#trainTime").val("");
       $("#Frequency").val("");
       console.log("trainName="+trainName+"destination= "+destination+"train time= "+trainTime+"frequency= "+frequency);
       var trainInfo={
        name:trainName,
        destination:destination,
        time:trainTime,
        frequency:frequency
       }
       db.ref().push(trainInfo);
  });
  
 
  var tArrival;
  var tMinutes;
  db.ref().on("child_added",function(childSnap){
      dbtrainName=childSnap.val().name;
      dbdestination=childSnap.val().destination;
      dbtrainTime=childSnap.val().time;
      dbfrequency=childSnap.val().frequency;
      var t=dbtrainTime.split(":");
      var h=moment().hours(t[0]).minutes(t[1]);
      var maxTime=moment.max(moment(),h);
      if (maxTime === h) {
        tArrival = h.format("hh:mm A");
        tMinutes = h.diff(moment(), "minutes");
      } else {
    
        var differenceTimes = moment().diff(h, "minutes");
        var tRemainder = differenceTimes % dbfrequency;
        tMinutes = dbfrequency - tRemainder;
        // To calculate the arrival time, add the tMinutes to the current time
        tArrival = moment().add(tMinutes, "m").format("hh:mm A");
      }
      console.log("tMinutes:", tMinutes);
      console.log("tArrival:", tArrival);
      
      var row=$("<tr>").append($("<td>").text(dbtrainName),$("<td>").text(dbdestination),$("<td>").text(dbfrequency),$("<td>").text(tArrival),$("<td>").text(tMinutes));
      $("tbody").append(row);
  });
  console.log("trainName="+dbtrainName+"destination= "+dbdestination+"train time= "+dbtrainTime+"frequency= "+dbfrequency);
  $(".display-5").on("click",function()
     {
        $("#formId").slideToggle("slow");
     });