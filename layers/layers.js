var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KualaJambi_1 = new ol.format.GeoJSON();
var features_KualaJambi_1 = format_KualaJambi_1.readFeatures(json_KualaJambi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KualaJambi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KualaJambi_1.addFeatures(features_KualaJambi_1);
var lyr_KualaJambi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KualaJambi_1, 
                style: style_KualaJambi_1,
                popuplayertitle: "Kuala Jambi",
                interactive: true,
                title: '<img src="styles/legend/KualaJambi_1.png" /> Kuala Jambi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KualaJambi_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KualaJambi_1];
lyr_KualaJambi_1.set('fieldAliases', {'Name': 'Name', 'Nomor': 'Nomor', 'Nama Jalan': 'Nama Jalan', 'Nomor Ruas': 'Nomor Ruas', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Kecamatan': 'Kecamatan', 'Status': 'Status', 'Lon': 'Lon', 'Lat': 'Lat', 'Date': 'Date', 'Instansi': 'Instansi', 'Images': 'Images', 'Path': 'Path', });
lyr_KualaJambi_1.set('fieldImages', {'Name': '', 'Nomor': '', 'Nama Jalan': '', 'Nomor Ruas': '', 'Panjang': '', 'Lebar': '', 'Kecamatan': '', 'Status': '', 'Lon': '', 'Lat': '', 'Date': '', 'Instansi': '', 'Images': '', 'Path': '', });
lyr_KualaJambi_1.set('fieldLabels', {'Name': 'no label', 'Nomor': 'no label', 'Nama Jalan': 'no label', 'Nomor Ruas': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Kecamatan': 'no label', 'Status': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Date': 'no label', 'Instansi': 'no label', 'Images': 'no label', 'Path': 'no label', });
lyr_KualaJambi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});