//scripts.js

//What platform the device is.
var devicePlatform;
var map, infoWindow;

function initMap() {
        map = new google.maps.Map(document.getElementById('DivMap'), {
        center: { lat: 43, lng: -76 },
        zoom: 6
    });
}


function SetMap(position) {
        infoWindow = new google.maps.InfoWindow({ map: map });
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('You are Here <br />Longitude: ' +
        position.coords.longitude + '<br />Latitude: ' +
        position.coords.latitude);
    map.setCenter(pos);
    map.setZoom(17);

    
}

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function (position) {
    SetMap(position);
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}


function onDeviceReady() {
    devicePlatform = device.platform;
    document.getElementById("BtnGetLocation").style.display = "block";
    document.getElementById("BtnGetLocation").addEventListener("click", function () {
 navigator.geolocation.getCurrentPosition(onSuccess, onError);

    });
}


document.addEventListener("deviceready", onDeviceReady, false);
