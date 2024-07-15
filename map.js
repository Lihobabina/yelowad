document.addEventListener('DOMContentLoaded', (event) => {
    
});
var map;
var markers = [];
var infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.161207, lng:  -71.844232 },
        zoom: 10
    });

    infoWindow = new google.maps.InfoWindow();

    // google.maps.event.addListener(map, 'click', function(event) {
    //     placeMarker(event.latLng);
    //     showCoordinates(event.latLng);
    // });

    var points = [
        { lat: 42.082334126514596, lng: -72.04750017557167, address: "916 Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.07814834712615, lng: -72.03955966208034, address: "543 Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.07903926253227, lng: -72.02712272472384, address: "200 Mechanic St, Southbridge, MA 01550", group: 1 },
        { lat: 42.07063202947788, lng: -72.01217120601463, address: "425 E Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.095897253702454, lng: -72.07104790459876, address: "122 Main St, Sturbridge, MA 01566", group: 1 },
        { lat: 42.025109709976576, lng: -71.95136526023079, address: "759 Quinebaug Rd, North Grosvenor Dale, CT 06255", group: 1 },
        { lat: 42.03915431221426, lng: -71.91565261790214, address: "212 W Main St, Dudley, MA 01571", group: 1 },
        { lat: 42.04363548548025, lng: -71.90193521790192, address: "119 W Main St Unit A, Dudley, MA 01571", group: 1 },
        { lat: 42.03872951705799, lng: -71.89123721975513, address: "81 Schofield Ave, Dudley, MA 01571", group: 1 },
        { lat: 42.04950587303352, lng: -71.88590030060531, address: "57 Main St, Webster, MA 01570", group: 1 },
        { lat: 42.05786322455228, lng: -71.86825513324554, address: "94 E Main St, Webster, MA 01570", group: 1 },
        { lat: 42.05907469074537, lng: -71.86678241790092, address: "113 E Main St, Webster, MA 01570", group: 1 },
        { lat: 42.05731086431571, lng: -71.86229387742615, address: "35 Thompson Rd, Webster, MA 01570", group: 1 },
        { lat: 42.111059572731484, lng: -71.86500667556983, address: "240 Main St, Oxford, MA 01540", group: 1 },
        { lat: 42.11797717065242, lng: -71.86500974673322, address: "331 Main St, Oxford, MA 01540", group: 1 },
        { lat: 42.14589875728426, lng: -71.98914037742053, address: "27 Worcester Rd, Charlton, MA 01507", group: 1 },
        // 
        { lat: 42.0725153992275, lng: -72.0251728044085, address: "58 E Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.07691231321531, lng: -72.03332580440814, address: "67 Central St, Southbridge, MA 01550", group: 1 },
        { lat: 42.07696805723429, lng: -72.03328288906361, address: "179 Elm St, Southbridge, MA 01550", group: 1 },
        { lat: 42.077738228107876, lng: -72.03235211789972, address: "101 Central St, Southbridge, MA 01550", group: 1 },
        { lat: 42.043450356425915, lng: -71.89073687557415, address: "55 Schofield Ave, Dudley, MA 01571", group: 1 },
        { lat: 42.0428399933381, lng: -71.8907224774271, address: "59 Schofield Ave, Dudley, MA 01571", group: 1 },
        { lat: 42.05090993865032, lng: -71.88002128906528, address: "415 S Main St, Webster, MA 01570", group: 1 },
        { lat: 42.05089400525464, lng: -71.88003201790141, address: "25 Lake St, Webster, MA 01570", group: 1 },
        { lat: 42.05826109481228, lng: -71.8784194044094, address: "93 N Main St, Webster, MA 01570", group: 1 },
        { lat: 42.05791132695633, lng: -71.8701030890648, address: "77 E Main St, Webster, MA 01570", group: 1 },
        { lat: 42.057831668719814, lng: -71.8701674620816, address: "31 Thompson Rd, Webster, MA 01570", group: 1 },
        { lat: 42.05636899357996, lng: -71.87225723324565, address: "60 E Main St, Webster, MA 01570", group: 1 },
        { lat: 42.11734551374659, lng: -71.86528241789718, address: "311 Main St, Oxford, MA 01540", group: 1 },
        { lat: 42.11726593010574, lng: -71.86534679091397, address: "676 Main St, North Oxford, MA 01537", group: 1 },
        { lat: 42.019279148584374, lng: -71.94010486023116, address: "615 Quinebaug Rd, North Grosvenor Dale, CT 06255", group: 1 },
        { lat: 42.08046871072102, lng: -72.04459892384895, address: "795 Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.073139117925095, lng: -72.02723155520502, address: "39 Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.08133975450645, lng: -72.02810294450288, address: "116 Worcester St, Southbridge, MA 01550", group: 1 },
        { lat: 42.069986820114195, lng: -72.01141376828404, address: "465 E Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.073520716551265, lng: -72.02764204025598, address: "42 Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.06923405205917, lng: -72.01022415723311, address: "491 E Main St, Southbridge, MA 01550", group: 1 },
        { lat: 42.03622010298488, lng: -71.91989412654813, address: "251 W Main St, Dudley, MA 01571", group: 1 },
        { lat: 42.048924517431104, lng: -71.88564778188675, address: "80 Main St, Webster, MA 01570", group: 1 },
        { lat: 42.056875118582695, lng: -71.87169944679209, address: "67 E Main St, Webster, MA 01570", group: 1 },
        { lat: 42.057056744856816, lng: -71.87033118334173, address: "74 E Main St, Webster, MA 01570", group: 1 },
        { lat: 42.06021926461818, lng: -71.8643077981879, address: "137 E Main St, Webster, MA 01570", group: 1 },
        { lat: 42.04541690231102, lng: -71.86327818049911, address: "144 Thompson Rd, Webster, MA 01570", group: 1 },
        { lat: 42.05370596618878, lng: -71.84014711316401, address: "188 Gore Rd, Webster, MA 01570", group: 1 },
        { lat: 42.11703205971753, lng: -71.86066003629993, address: "24 Sutton Ave, Oxford, MA 01540", group: 1 }
    ];

    var polygonPoints = [
        [ // Группа 1
            { lat: 42.016386, lng: -72.137762 },
            { lat: 42.015620,  lng: -71.833520 },
            { lat: 42.127350,  lng: -71.814918},
            { lat: 42.108792, lng: -72.063430 }
        ],
        [
            {lat:42.191019, lng:-71.856873},
            { lat:42.252642,lng: -71.898649},
            {lat:42.242654, lng: -72.064012},
            {lat:42.198969,lng: -72.067845}
        ],
        [
            {lat: 42.195873, lng:-71.840612},
            { lat: 42.151221,lng: -71.827387},
            {lat: 42.146130,lng: -71.580881},
            {lat:  42.231856,lng: -71.648115}
        ]
    ];
    var colors = ['#ff4100', '#0000FF', '#00FF00'];
    var markerIcon = {
        url: 'img/1.png', // URL вашего изображения
        scaledSize: new google.maps.Size(30, 40) // Размер изображения
    };

points.forEach(point => {
var marker = new google.maps.Marker({
position: { lat: point.lat, lng: point.lng },
title: point.address,
icon: markerIcon, // Используемое изображение для маркера
group: point.group
});

marker.addListener('click', function() {
infoWindow.setContent(point.address);
infoWindow.open(map, marker);
});

markers.push(marker);
});

polygonPoints.forEach((polygon, index) => {
var zone = new google.maps.Polygon({
paths: polygon,
strokeColor: colors[index],
strokeOpacity: 0.8,
strokeWeight: 2,
fillColor: colors[index],
fillOpacity: 0.35,
map: map,
group: index + 1,
id: 'zone-' + (index + 1) // Присваиваем уникальный ID
});

google.maps.event.addListener(zone, 'click', function(event) {
showGroupMarkers(zone.group);
map.fitBounds(getBounds(zone));
console.log("Zone ID: " + zone.id); // Логируем ID зоны в консоль
});
});
}

function placeMarker(location) {
var marker = new google.maps.Marker({
position: location,
map: map
});
}

function showCoordinates(location) {
var lat = location.lat().toFixed(6);
var lng = location.lng().toFixed(6);
var content = 'Coordinates: ' + lat + ', ' + lng;

infoWindow.setContent(content);
infoWindow.setPosition(location);
infoWindow.open(map);
}

function showGroupMarkers(group) {
markers.forEach(marker => {
if (marker.group === group) {
marker.setMap(map);
} else {
marker.setMap(null);
}
});
}

function getBounds(polygon) {
var bounds = new google.maps.LatLngBounds();
polygon.getPath().forEach(function(latLng) {
bounds.extend(latLng);
});
return bounds;
}
