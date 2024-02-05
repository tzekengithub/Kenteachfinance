function myFunction() {
  var x = document.getElementById("feedbackdiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.textContent = "Great To Hear That🎉";
    
  }
  var a = document.getElementById("feedbutton");
  if (a.textContent.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  } 
}

function myFunction2() {
  var x = document.getElementById("feedbackdiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.textContent = "Sorry To Hear That😭";
  }
  var a = document.getElementById("feedbutton");
  if (a.textContent.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  } 
}
