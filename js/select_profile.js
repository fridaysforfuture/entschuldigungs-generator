// let map = L.map("map", {
//   center: [51.5, 10],
//   zoom: 5.5,
//   maxZoom: 15,
//   zoomSnap: 0,
//   gestureHandling: true,
//   prefereCanvas: true,
// });

var DateTime = luxon.DateTime;

let map = L.map('map').setView([51.5, 10], 5)

L.tileLayer("https://mapcache.fridaysforfuture.de/{z}/{x}/{y}.png", {
  attribution:
    '<a href="https://fridaysforfuture.de/">FridaysforFuture.de </a>| &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function drawMarker(data) {
  data.forEach((d) => {
    const m = L.marker(L.latLng(d[" lang"], d[" lat"]), {
      title: d[" Name"], icon:greenIcon
    }).bindPopup(
      "<b>" +
        d[" Name"] +
        "</b><br>" +
        d[" Uhrzeit"] +
        "<br>" +
        d[" Startpunkt"] +
        "<br>" + `<button onclick='select_event(this)'>Auswählen</button>` +
        `<script type="text/json"> ${JSON.stringify(d)} </script>`
    ).addTo(map);
  });
}
function select_event(element) {
  const element_data = JSON.parse(element.parentElement.lastChild.firstChild.data);
  console.log(element_data);
  document.getElementById('city').value = element_data[" Name"]
  document.getElementById('place').value = element_data[" Startpunkt"]
  start_time = DateTime.fromFormat(element_data[" Uhrzeit"].replace(" Uhr", ""), "HH:mm")
  date = DateTime.fromFormat(element_data[" Datum"], "dd/MM/yyyy").plus({hours: 1})
  document.getElementById('datefrom').valueAsDate = date.toJSDate()
  document.getElementById('datefrom').value = date.toISODate()
  $("#datefrom-placeholder").hide().next().attr('hidden', false)
  document.getElementById('timestart').valueAsDate = start_time.plus({hours: 1}).toJSDate()
  document.getElementById('timestart').value = start_time.toLocaleString(DateTime.TIME_24_SIMPLE)
  $("#timestart-placeholder").hide().next().attr('hidden', false)
  document.getElementById('timego').valueAsDate = start_time.plus({hours: 1}).minus({minutes: 30}).toJSDate()
  document.getElementById('timego').value = start_time.plus({hours: 1}).minus({minutes: 30}).toLocaleString(DateTime.TIME_24_SIMPLE)
  $("#timego-placeholder").hide().next().attr('hidden', false)
}

// function reqListener() {
//   const data = JSON.parse(this.responseText);
//   drawMarker(data);
// }

// let oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "https://fridaysforfuture.de/map/mapdata-25032022.json");
// oReq.send();

axios.get("https://fridaysforfuture.de/map/mapdata-25032022.json").then(function(response) {const data = response.data; drawMarker(data)})

$('#mapModal').on('shown.bs.modal', function(){
  setTimeout(function() {
    map.invalidateSize(true);
  }, 1);
});