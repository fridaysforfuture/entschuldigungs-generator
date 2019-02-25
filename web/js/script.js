function createPdf() {

  var doc = new jsPDF()
  doc.text(namefrom, 10, 10)
  doc.save('a4.pdf')

}

function submit() {

  nameto = document.getElementById('nameto').value;
  namefrom = document.getElementById('namefrom').value;
  gender = document.getElementById('gender').value;
  document.getElementById('submit-btn').innerHTML = "Gesendet!";
  alert(namefrom + "\n" + nameto + "\n" + gender);
  //createPdf();

}
