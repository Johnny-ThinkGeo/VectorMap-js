var worldStreetsLayer = new ol.mapsuite.VectorTileLayer("thinkgeo-world-streets-light.json", {
    declutter: true,
    multithread: true,
    minimalist: true
});

var map = new ol.Map({
    layers: [worldStreetsLayer],
    target: 'map',
    view: new ol.View({
        center: ol.proj.fromLonLat([-96.79748, 32.78819]),
        zoom: 2,
        maxZoom: 19,
        maxResolution: 40075016.68557849 / 512
    }),
    loadTilesWhileInteracting: true
});

// disable rotation in mobile devices
if ((navigator.userAgent.match(/(pad|iPad|iOS|Android|iPhone)/i))) {
    map.getInteractions().forEach(function (element, index, array) {
        if (element instanceof ol.interaction.DragRotateAndZoom) element.setActive(false);
        if (element instanceof ol.interaction.PinchRotate) element.setActive(false);
    });
}