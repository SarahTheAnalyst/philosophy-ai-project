//Button Details
function displayDateTime() {
    document.getElementById("dateTimeOutput").innerText = new Date().toLocaleString();
  }
  
  function changeColor() {
    document.getElementById("mainHeading").style.color = "indigo";
  }
  
  function resetColor() {
    document.getElementById("mainHeading").style.color = "grey";
  }
  
  function showSecret() {
    document.getElementById("secretBox").innerText = "AI is waking up!";
  }
  
  function hideSecret() {
    document.getElementById("secretBox").innerText = "Mouse Over Me";
  }
  // Hover Color
  function changeColor() {
    document.getElementById("mainHeading").style.color = "indigo";
  }
  
  function resetColor() {
    document.getElementById("mainHeading").style.color = "black";
  }
  