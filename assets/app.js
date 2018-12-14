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
  $("#submitBtn").on("click",function(event){
      event.preventDefault();
       trainName=$("#trainName").val().trim();
       destination=$("#Destination").val().trim();
       trainTime=$("#trainTime").val().trim();
       frequency=$("#Frequency").val().trim();
       console.log("trainName="+trainName+"destination= "+destination+"train time= "+trainTime+"frequency= "+frequency);

  });
  console.log("trainName="+trainName+"destination= "+destination+"train time= "+trainTime+"frequency= "+frequency);
  