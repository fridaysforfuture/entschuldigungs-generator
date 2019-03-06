var nameto;
var namefrom;
var gender;
var salutation;
var datefrom;
var date2;
var namechild;
var childgender;
var childsalutation;
var timego;
var timestart;

moment.lang("de").format('LL');
moment.locale("de");

function submit_data() {

  var nameto = document.getElementById('nameto').value;
  var namefrom = document.getElementById('namefrom').value;
  var datefrom = document.getElementById('datefrom').value;
  var timestart = document.getElementById('timestart').value;
  var namechild = document.getElementById('namechild').value;
  var timego = document.getElementById('timego').value;
  var gender = document.getElementById('gender').value;
  if (gender === "women") {
    var salutation = "Sehr geehrte Frau ";
  } else {
    var salutation = "Sehr geehrter Herr ";
  }
  var childgender = document.getElementById('childgender').value;
  if (childgender === "daughter") {
    var childsalutation = "meine Tochter ";
  } else {
    var childsalutation = "meinen Sohn ";
  }

  date2 = moment(datefrom).format('DD.MM.YYYY');
  document.getElementById('submit-btn').innerHTML = "Gesendet!";
  document.getElementById('submit-btn').disabled = true;
  document.getElementById('submit-btn').classList.add('btn-success');
  document.getElementById('submit-btn').classList.remove('btn-outline-success');
  document.getElementById('submit-modal').innerHTML = "Gesendet!";
  document.getElementById('submit-modal').classList.add('btn-success');
  document.getElementById('submit-modal').classList.remove('btn-outline-success');
  document.getElementById('submitModalLabel').innerHTML = "Abgeschickt!";
  document.getElementById('modal-content').innerHTML = salutation + nameto + "<br>" + namefrom + "<br>" + datefrom;
  var docDefinition = {
    content: [
      {
        text: 'Beurlaubung '+  namechild + '\n\n\n',
        style: 'title'
      },
      {
        text: salutation + nameto + ',\n\n'
      },
      {
        text: 'Hiermit bitte ich darum, ' + childsalutation + namechild + ' am ' + date2 + ' ab ' + timego + ' Uhr zu beurlauben.\n'
      }
    ],
    styles: {
      title: {
        fontSize: 28,
        bold: true
      }
    }
  };

  pdfMake.createPdf(docDefinition).open({}, window);
}
