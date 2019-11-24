ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
        center: [55.8, 37.6],
        zoom: 12
    });

    var myPlacemark = new ymaps.Placemark([55.8, 37.6], {}, {
        preset: 'islands#redIcon'
    });

    myMap.geoObjects.add(myPlacemark);
});
