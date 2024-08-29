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
var format_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1 = new ol.format.GeoJSON();
var features_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1 = format_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1.readFeatures(json_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1.addFeatures(features_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1);
var lyr_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1, 
                style: style_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1,
                popuplayertitle: "TanjungJabungTimur_2208_perbaikan.gdb — TanjungJabungTimur_2208.gdb/a0000000a.gdbtable",
                interactive: true,
                title: '<img src="styles/legend/TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1.png" /> TanjungJabungTimur_2208_perbaikan.gdb — TanjungJabungTimur_2208.gdb/a0000000a.gdbtable'
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

lyr_OpenStreetMap_0.setVisible(true);lyr_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1.setVisible(true);lyr_KualaJambi_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1,lyr_KualaJambi_2];
lyr_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'Nm_Ruas', 'Thn_Data': 'Thn_Data', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Ura_Dukung': 'Ura_Dukung', 'Kd_Bd_PU': 'Kd_Bd_PU', 'Kd_Jns_Inf': 'Kd_Jns_Inf', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Kd_Patok': 'Kd_Patok', 'Km_Awal': 'Km_Awal', 'Km_Akhir': 'Km_Akhir', 'Nm_Lintas': 'Nm_Lintas', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Lbr_Keras': 'Lbr_Keras', 'LHRT': 'LHRT', 'VCR': 'VCR', 'Tipe_Jln': 'Tipe_Jln', 'MST': 'MST', 'Tipe_Keras': 'Tipe_Keras', 'Thn_Pen_Ak': 'Thn_Pen_Ak', 'Jns_Pen': 'Jns_Pen', 'Koord_X_Aw': 'Koord_X_Aw', 'Koord_Y_Aw': 'Koord_Y_Aw', 'Koord_X_Ak': 'Koord_X_Ak', 'Koord_Y_Ak': 'Koord_Y_Ak', 'Tanah_Kri': 'Tanah_Kri', 'Macadam': 'Macadam', 'Rigid': 'Rigid', 'Aspal': 'Aspal', 'Panjang': 'Panjang', 'Kecamatan': 'Kecamatan', 'Status': 'Status', 'Shape_Length': 'Shape_Length', });
lyr_KualaJambi_2.set('fieldAliases', {'Name': 'Name', 'Nomor': 'Nomor', 'Nama Jalan': 'Nama Jalan', 'Nomor Ruas': 'Nomor Ruas', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Kecamatan': 'Kecamatan', 'Status': 'Status', 'Lon': 'Lon', 'Lat': 'Lat', 'Date': 'Date', 'Instansi': 'Instansi', 'Images': 'Images', 'Path': 'Path', });
lyr_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'Kl_Dat_Das': 'TextEdit', 'Nm_Ruas': 'TextEdit', 'Thn_Data': 'Range', 'Fungsi': 'TextEdit', 'Mendukung': 'TextEdit', 'Ura_Dukung': 'TextEdit', 'Kd_Bd_PU': 'Range', 'Kd_Jns_Inf': 'Range', 'Kd_Inf': 'TextEdit', 'Propinsi': 'TextEdit', 'Kab_Kot': 'TextEdit', 'Desa_Kel': 'TextEdit', 'Tk_Ruas_Aw': 'TextEdit', 'Tk_Ruas_Ak': 'TextEdit', 'Kd_Patok': 'TextEdit', 'Km_Awal': 'Range', 'Km_Akhir': 'TextEdit', 'Nm_Lintas': 'TextEdit', 'Kon_Baik': 'TextEdit', 'Kon_Sdg': 'TextEdit', 'Kon_Rgn': 'TextEdit', 'Kon_Rusak': 'TextEdit', 'Kon_Mntp': 'TextEdit', 'Kon_T_Mntp': 'TextEdit', 'Lbr_Keras': 'TextEdit', 'LHRT': 'Range', 'VCR': 'TextEdit', 'Tipe_Jln': 'Range', 'MST': 'Range', 'Tipe_Keras': 'TextEdit', 'Thn_Pen_Ak': 'Range', 'Jns_Pen': 'TextEdit', 'Koord_X_Aw': 'TextEdit', 'Koord_Y_Aw': 'TextEdit', 'Koord_X_Ak': 'TextEdit', 'Koord_Y_Ak': 'TextEdit', 'Tanah_Kri': 'TextEdit', 'Macadam': 'TextEdit', 'Rigid': 'TextEdit', 'Aspal': 'TextEdit', 'Panjang': 'TextEdit', 'Kecamatan': 'TextEdit', 'Status': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_KualaJambi_2.set('fieldImages', {'Name': '', 'Nomor': '', 'Nama Jalan': '', 'Nomor Ruas': '', 'Panjang': '', 'Lebar': '', 'Kecamatan': '', 'Status': '', 'Lon': '', 'Lat': '', 'Date': '', 'Instansi': '', 'Images': '', 'Path': '', });
lyr_TanjungJabungTimur_2208_perbaikangdbTanjungJabungTimur_2208gdba0000000agdbtable_1.set('fieldLabels', {'OBJECTID_1': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'Kl_Dat_Das': 'inline label - visible with data', 'Nm_Ruas': 'inline label - visible with data', 'Thn_Data': 'inline label - visible with data', 'Fungsi': 'inline label - visible with data', 'Mendukung': 'inline label - visible with data', 'Ura_Dukung': 'inline label - visible with data', 'Kd_Bd_PU': 'inline label - visible with data', 'Kd_Jns_Inf': 'inline label - visible with data', 'Kd_Inf': 'inline label - visible with data', 'Propinsi': 'inline label - visible with data', 'Kab_Kot': 'inline label - visible with data', 'Desa_Kel': 'inline label - visible with data', 'Tk_Ruas_Aw': 'inline label - visible with data', 'Tk_Ruas_Ak': 'inline label - visible with data', 'Kd_Patok': 'inline label - visible with data', 'Km_Awal': 'inline label - visible with data', 'Km_Akhir': 'inline label - visible with data', 'Nm_Lintas': 'inline label - visible with data', 'Kon_Baik': 'inline label - visible with data', 'Kon_Sdg': 'inline label - visible with data', 'Kon_Rgn': 'inline label - visible with data', 'Kon_Rusak': 'inline label - visible with data', 'Kon_Mntp': 'inline label - visible with data', 'Kon_T_Mntp': 'inline label - visible with data', 'Lbr_Keras': 'no label', 'LHRT': 'no label', 'VCR': 'no label', 'Tipe_Jln': 'no label', 'MST': 'no label', 'Tipe_Keras': 'no label', 'Thn_Pen_Ak': 'no label', 'Jns_Pen': 'no label', 'Koord_X_Aw': 'no label', 'Koord_Y_Aw': 'no label', 'Koord_X_Ak': 'no label', 'Koord_Y_Ak': 'no label', 'Tanah_Kri': 'no label', 'Macadam': 'no label', 'Rigid': 'no label', 'Aspal': 'no label', 'Panjang': 'no label', 'Kecamatan': 'no label', 'Status': 'no label', 'Shape_Length': 'no label', });
lyr_KualaJambi_2.set('fieldLabels', {'Name': 'no label', 'Nomor': 'no label', 'Nama Jalan': 'no label', 'Nomor Ruas': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Kecamatan': 'no label', 'Status': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Date': 'no label', 'Instansi': 'no label', 'Images': 'no label', 'Path': 'no label', });
lyr_KualaJambi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});