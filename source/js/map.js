ymaps.ready(function () {
var map = new ymaps.Map("map", {
    center: [59.938631, 30.322055],
    zoom: 17,
    controls: ['zoomControl']
});

var mapPlacemark = new ymaps.Placemark([59.938631, 30.323155], {}, {
  iconLayout: 'default#image',
  iconImageHref: 'img/map-pin.png',
  iconImageSize: [55, 53],
  iconImageOffset: [-27, -53]
});

map.geoObjects.add(mapPlacemark);
});
