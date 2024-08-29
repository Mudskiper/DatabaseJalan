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

lyr_OpenStreetMap_0.setVisible(true);lyr_JaringanJalan_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_JaringanJalan_1];
lyr_JaringanJalan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'Nm_Ruas', 'Thn_Data': 'Thn_Data', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Tipe_Keras': 'Tipe_Keras', 'Panjang': 'Panjang', 'Kecamatan': 'Kecamatan', 'Status': 'Status', });
lyr_JaringanJalan_1.set('fieldImages', {'OBJECTID': '', 'Kl_Dat_Das': '', 'Nm_Ruas': '', 'Thn_Data': '', 'Fungsi': '', 'Mendukung': '', 'Kd_Inf': '', 'Propinsi': '', 'Kab_Kot': '', 'Desa_Kel': '', 'Tk_Ruas_Aw': '', 'Tk_Ruas_Ak': '', 'Kon_Baik': '', 'Kon_Sdg': '', 'Kon_Rgn': '', 'Kon_Rusak': '', 'Kon_Mntp': '', 'Kon_T_Mntp': '', 'Tipe_Keras': '', 'Panjang': '', 'Kecamatan': '', 'Status': '', });
lyr_JaringanJalan_1.set('fieldLabels', {'OBJECTID': 'no label', 'Kl_Dat_Das': 'no label', 'Nm_Ruas': 'no label', 'Thn_Data': 'no label', 'Fungsi': 'no label', 'Mendukung': 'no label', 'Kd_Inf': 'no label', 'Propinsi': 'no label', 'Kab_Kot': 'no label', 'Desa_Kel': 'no label', 'Tk_Ruas_Aw': 'no label', 'Tk_Ruas_Ak': 'no label', 'Kon_Baik': 'no label', 'Kon_Sdg': 'no label', 'Kon_Rgn': 'no label', 'Kon_Rusak': 'no label', 'Kon_Mntp': 'no label', 'Kon_T_Mntp': 'no label', 'Tipe_Keras': 'no label', 'Panjang': 'no label', 'Kecamatan': 'no label', 'Status': 'no label', });
lyr_JaringanJalan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});