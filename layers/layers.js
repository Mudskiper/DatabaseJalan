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
var format_JaringanJalan_1 = new ol.format.GeoJSON();
var features_JaringanJalan_1 = format_JaringanJalan_1.readFeatures(json_JaringanJalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_1.addFeatures(features_JaringanJalan_1);
var lyr_JaringanJalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_1, 
                style: style_JaringanJalan_1,
                popuplayertitle: "Jaringan Jalan",
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_1.png" /> Jaringan Jalan'
            });
var format_KualaJambi_2 = new ol.format.GeoJSON();
var features_KualaJambi_2 = format_KualaJambi_2.readFeatures(json_KualaJambi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KualaJambi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KualaJambi_2.addFeatures(features_KualaJambi_2);
var lyr_KualaJambi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KualaJambi_2, 
                style: style_KualaJambi_2,
                popuplayertitle: "Kuala Jambi",
                interactive: true,
                title: '<img src="styles/legend/KualaJambi_2.png" /> Kuala Jambi'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_JaringanJalan_1.setVisible(true);lyr_KualaJambi_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JaringanJalan_1,lyr_KualaJambi_2];
lyr_JaringanJalan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'Nm_Ruas', 'Thn_Data': 'Thn_Data', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Tipe_Keras': 'Tipe_Keras', 'Panjang': 'Panjang', 'Kecamatan': 'Kecamatan', 'Status': 'Status', });
lyr_KualaJambi_2.set('fieldAliases', {'Name': 'Name', 'Nomor': 'Nomor', 'Nama Jalan': 'Nama Jalan', 'Nomor Ruas': 'Nomor Ruas', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Kecamatan': 'Kecamatan', 'Status': 'Status', 'Lon': 'Lon', 'Lat': 'Lat', 'Date': 'Date', 'Instansi': 'Instansi', 'Images': 'Images', 'Path': 'Path', });
lyr_JaringanJalan_1.set('fieldImages', {'OBJECTID': '', 'Kl_Dat_Das': '', 'Nm_Ruas': '', 'Thn_Data': '', 'Fungsi': '', 'Mendukung': '', 'Kd_Inf': '', 'Propinsi': '', 'Kab_Kot': '', 'Desa_Kel': '', 'Tk_Ruas_Aw': '', 'Tk_Ruas_Ak': '', 'Kon_Baik': '', 'Kon_Sdg': '', 'Kon_Rgn': '', 'Kon_Rusak': '', 'Kon_Mntp': '', 'Kon_T_Mntp': '', 'Tipe_Keras': '', 'Panjang': '', 'Kecamatan': '', 'Status': '', });
lyr_KualaJambi_2.set('fieldImages', {'Name': '', 'Nomor': '', 'Nama Jalan': '', 'Nomor Ruas': '', 'Panjang': '', 'Lebar': '', 'Kecamatan': '', 'Status': '', 'Lon': '', 'Lat': '', 'Date': '', 'Instansi': '', 'Images': '', 'Path': '', });
lyr_JaringanJalan_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Kl_Dat_Das': 'inline label - always visible', 'Nm_Ruas': 'inline label - always visible', 'Thn_Data': 'inline label - always visible', 'Fungsi': 'inline label - always visible', 'Mendukung': 'inline label - always visible', 'Kd_Inf': 'inline label - always visible', 'Propinsi': 'inline label - always visible', 'Kab_Kot': 'inline label - always visible', 'Desa_Kel': 'inline label - always visible', 'Tk_Ruas_Aw': 'inline label - always visible', 'Tk_Ruas_Ak': 'inline label - always visible', 'Kon_Baik': 'inline label - always visible', 'Kon_Sdg': 'inline label - always visible', 'Kon_Rgn': 'inline label - always visible', 'Kon_Rusak': 'inline label - always visible', 'Kon_Mntp': 'inline label - always visible', 'Kon_T_Mntp': 'inline label - always visible', 'Tipe_Keras': 'inline label - always visible', 'Panjang': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_KualaJambi_2.set('fieldLabels', {'Name': 'no label', 'Nomor': 'no label', 'Nama Jalan': 'no label', 'Nomor Ruas': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Kecamatan': 'no label', 'Status': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Date': 'no label', 'Instansi': 'no label', 'Images': 'no label', 'Path': 'no label', });
lyr_KualaJambi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});