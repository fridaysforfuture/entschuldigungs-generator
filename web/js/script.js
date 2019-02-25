function submit() {

  nameto = document.getElementById('nameto').value;
  namefrom = document.getElementById('namefrom').value;
  document.getElementById('submit-btn').innerHTML = "Gesendet!";
  alert(nameto + namefrom);

}
