// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1 = document.getElementById("input1").value;
  player2 = document.getElementById("input2").value; 
  // Store these values locally
  localStorage.setItem("player1" , player1);
  localStorage.setItem("player2" , player2);

  //Assign "game_page.html" to window.location
  window.location = "game_page.html";
} 

