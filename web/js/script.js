var nameto;
var namefrom;
var gender;
var salutation;

function createPdf() {

  var doc = new jsPDF()
  doc.text(namefrom, 10, 10)
  doc.save('a4.pdf')

}

function submit() {

  var nameto = document.getElementById('nameto').value;
  var namefrom = document.getElementById('namefrom').value;
  var gender = document.getElementById('gender').value;
  if (gender === "women") {
    var salutation = "Sehr geehrte Frau ";
  } else {
    var salutation = "Sehr geehrter Herr ";
  }
  document.getElementById('submit-btn').innerHTML = "Gesendet!";
  document.getElementById('submit-btn').disabled = true;
  document.getElementById('submit-btn').classList.add('btn-success');
  document.getElementById('submit-btn').classList.remove('btn-outline-success');
  document.getElementById('submit-modal').innerHTML = "Gesendet!";
  document.getElementById('submit-modal').classList.add('btn-success');
  document.getElementById('submit-modal').classList.remove('btn-outline-success');
  document.getElementById('submitModalLabel').innerHTML = "Abgeschickt!";
  document.getElementById('modal-content').innerHTML = salutation + nameto + "<br>" + namefrom;
  //createPdf();

}
