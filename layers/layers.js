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
var format_Kabupaten_1 = new ol.format.GeoJSON();
var features_Kabupaten_1 = format_Kabupaten_1.readFeatures(json_Kabupaten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kabupaten_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kabupaten_1.addFeatures(features_Kabupaten_1);
var lyr_Kabupaten_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kabupaten_1, 
                style: style_Kabupaten_1,
                popuplayertitle: "Kabupaten",
                interactive: false,
                title: '<img src="styles/legend/Kabupaten_1.png" /> Kabupaten'
            });
var format_Desa_2 = new ol.format.GeoJSON();
var features_Desa_2 = format_Desa_2.readFeatures(json_Desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_2.addFeatures(features_Desa_2);
var lyr_Desa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_2, 
                style: style_Desa_2,
                popuplayertitle: "Desa",
                interactive: false,
                title: '<img src="styles/legend/Desa_2.png" /> Desa'
            });
var format_Kecamatan_3 = new ol.format.GeoJSON();
var features_Kecamatan_3 = format_Kecamatan_3.readFeatures(json_Kecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_3.addFeatures(features_Kecamatan_3);
var lyr_Kecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_3, 
                style: style_Kecamatan_3,
                popuplayertitle: "Kecamatan",
                interactive: false,
                title: '<img src="styles/legend/Kecamatan_3.png" /> Kecamatan'
            });
var format_JaringanJalan_4 = new ol.format.GeoJSON();
var features_JaringanJalan_4 = format_JaringanJalan_4.readFeatures(json_JaringanJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_4.addFeatures(features_JaringanJalan_4);
var lyr_JaringanJalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_4, 
                style: style_JaringanJalan_4,
                popuplayertitle: "Jaringan Jalan",
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_4.png" /> Jaringan Jalan'
            });
var format_KualaJambi_5 = new ol.format.GeoJSON();
var features_KualaJambi_5 = format_KualaJambi_5.readFeatures(json_KualaJambi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KualaJambi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KualaJambi_5.addFeatures(features_KualaJambi_5);
var lyr_KualaJambi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KualaJambi_5, 
                style: style_KualaJambi_5,
                popuplayertitle: "Kuala Jambi",
                interactive: true,
                title: '<img src="styles/legend/KualaJambi_5.png" /> Kuala Jambi'
            });
var format_Pola_Ruang_6 = new ol.format.GeoJSON();
var features_Pola_Ruang_6 = format_Pola_Ruang_6.readFeatures(json_Pola_Ruang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pola_Ruang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pola_Ruang_6.addFeatures(features_Pola_Ruang_6);
var lyr_Pola_Ruang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pola_Ruang_6, 
                style: style_Pola_Ruang_6,
                popuplayertitle: "Pola_Ruang",
                interactive: false,
    title: 'Pola_Ruang<br />\
    <img src="styles/legend/Pola_Ruang_6_0.png" /> Bangunan Industri<br />\
    <img src="styles/legend/Pola_Ruang_6_1.png" /> Dermaga<br />\
    <img src="styles/legend/Pola_Ruang_6_2.png" /> Hutan Kerapatan Sedang<br />\
    <img src="styles/legend/Pola_Ruang_6_3.png" /> Hutan Kerapatan Tinggi<br />\
    <img src="styles/legend/Pola_Ruang_6_4.png" /> Hutan Mangrove<br />\
    <img src="styles/legend/Pola_Ruang_6_5.png" /> Hutan Tanaman Industri<br />\
    <img src="styles/legend/Pola_Ruang_6_6.png" /> Ladang<br />\
    <img src="styles/legend/Pola_Ruang_6_7.png" /> Lahan Campuran<br />\
    <img src="styles/legend/Pola_Ruang_6_8.png" /> Pemukiman<br />\
    <img src="styles/legend/Pola_Ruang_6_9.png" /> Perkebunan<br />\
    <img src="styles/legend/Pola_Ruang_6_10.png" /> Pertambangan Galian C<br />\
    <img src="styles/legend/Pola_Ruang_6_11.png" /> Rawa<br />\
    <img src="styles/legend/Pola_Ruang_6_12.png" /> Semak Belukar<br />\
    <img src="styles/legend/Pola_Ruang_6_13.png" /> Sungai<br />\
    <img src="styles/legend/Pola_Ruang_6_14.png" /> Tambak<br />'
        });
var format_Sistemperkotaan_7 = new ol.format.GeoJSON();
var features_Sistemperkotaan_7 = format_Sistemperkotaan_7.readFeatures(json_Sistemperkotaan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistemperkotaan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistemperkotaan_7.addFeatures(features_Sistemperkotaan_7);
var lyr_Sistemperkotaan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sistemperkotaan_7, 
                style: style_Sistemperkotaan_7,
                popuplayertitle: "Sistem perkotaan",
                interactive: true,
    title: 'Sistem perkotaan<br />\
    <img src="styles/legend/Sistemperkotaan_7_0.png" /> Pusat Kegiatan Lokal (PKL)<br />\
    <img src="styles/legend/Sistemperkotaan_7_1.png" /> Pusat Kegiatan Wilayah (PKW)<br />\
    <img src="styles/legend/Sistemperkotaan_7_2.png" /> Pusat Pelayanan Kawasan (PPK)<br />\
    <img src="styles/legend/Sistemperkotaan_7_3.png" /> Pusat Pelayanan Lingkungan (PPL)<br />'
        });
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_Kabupaten_1,lyr_Desa_2,lyr_Kecamatan_3,],
                                fold: "open",
                                title: "Batas Administrasi"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Kabupaten_1.setVisible(true);lyr_Desa_2.setVisible(true);lyr_Kecamatan_3.setVisible(true);lyr_JaringanJalan_4.setVisible(true);lyr_KualaJambi_5.setVisible(true);lyr_Pola_Ruang_6.setVisible(true);lyr_Sistemperkotaan_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_BatasAdministrasi,lyr_JaringanJalan_4,lyr_KualaJambi_5,lyr_Pola_Ruang_6,lyr_Sistemperkotaan_7];
lyr_Kabupaten_1.set('fieldAliases', {'KODE_KK': 'KODE_KK', 'KODE_PROV': 'KODE_PROV', 'KAB_KOTA': 'KAB_KOTA', 'PROVINSI': 'PROVINSI', 'FID': 'FID', });
lyr_Desa_2.set('fieldAliases', {'FID': 'FID', 'NAME': 'NAME', 'KODE_KEC': 'KODE_KEC', 'KODE_KD': 'KODE_KD', 'KODE_KK': 'KODE_KK', 'KODE_PROV': 'KODE_PROV', 'TIPE_KD': 'TIPE_KD', 'KECAMATAN': 'KECAMATAN', 'KEL_DESA': 'KEL_DESA', 'KAB_KOTA': 'KAB_KOTA', 'PROVINSI': 'PROVINSI', 'JENIS_KD': 'JENIS_KD', });
lyr_Kecamatan_3.set('fieldAliases', {'KODE_KEC': 'KODE_KEC', 'KODE_KK': 'KODE_KK', 'KODE_PROV': 'KODE_PROV', 'KECAMATAN': 'KECAMATAN', 'KAB_KOTA': 'KAB_KOTA', 'PROVINSI': 'PROVINSI', 'FID': 'FID', });
lyr_JaringanJalan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'Nm_Ruas', 'Thn_Data': 'Thn_Data', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Tipe_Keras': 'Tipe_Keras', 'Panjang': 'Panjang', 'Kecamatan': 'Kecamatan', 'Status': 'Status', });
lyr_KualaJambi_5.set('fieldAliases', {'Name': 'Name', 'Nomor': 'Nomor', 'Nama Jalan': 'Nama Jalan', 'Nomor Ruas': 'Nomor Ruas', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Kecamatan': 'Kecamatan', 'Status': 'Status', 'Lon': 'Lon', 'Lat': 'Lat', 'Date': 'Date', 'Instansi': 'Instansi', 'Images': 'Images', 'Path': 'Path', });
lyr_Pola_Ruang_6.set('fieldAliases', {'FID_PENUTU': 'FID_PENUTU', 'TUPLAH': 'TUPLAH', 'SUMBER': 'SUMBER', 'LUAS': 'LUAS', 'FID_Rencan': 'FID_Rencan', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Luas_1': 'Luas_1', 'Kecamatan': 'Kecamatan', 'KABUPATEN': 'KABUPATEN', 'SUMBER_1': 'SUMBER_1', 'PR': 'PR', 'Shape_Leng': 'Shape_Leng', 'LUAS_12': 'LUAS_12', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Luas_12_13': 'Luas_12_13', 'area': 'area', 'are1': 'are1', });
lyr_Sistemperkotaan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kategori': 'Kategori', 'Keterangan': 'Keterangan', });
lyr_Kabupaten_1.set('fieldImages', {'KODE_KK': 'TextEdit', 'KODE_PROV': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'FID': 'TextEdit', });
lyr_Desa_2.set('fieldImages', {'FID': 'TextEdit', 'NAME': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KODE_KD': 'TextEdit', 'KODE_KK': 'TextEdit', 'KODE_PROV': 'TextEdit', 'TIPE_KD': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KEL_DESA': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'JENIS_KD': 'TextEdit', });
lyr_Kecamatan_3.set('fieldImages', {'KODE_KEC': 'TextEdit', 'KODE_KK': 'TextEdit', 'KODE_PROV': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'PROVINSI': 'TextEdit', 'FID': 'TextEdit', });
lyr_JaringanJalan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kl_Dat_Das': 'TextEdit', 'Nm_Ruas': 'TextEdit', 'Thn_Data': 'TextEdit', 'Fungsi': 'TextEdit', 'Mendukung': 'TextEdit', 'Kd_Inf': 'TextEdit', 'Propinsi': 'TextEdit', 'Kab_Kot': 'TextEdit', 'Desa_Kel': 'TextEdit', 'Tk_Ruas_Aw': 'TextEdit', 'Tk_Ruas_Ak': 'TextEdit', 'Kon_Baik': 'TextEdit', 'Kon_Sdg': 'TextEdit', 'Kon_Rgn': 'TextEdit', 'Kon_Rusak': 'TextEdit', 'Kon_Mntp': 'TextEdit', 'Kon_T_Mntp': 'TextEdit', 'Tipe_Keras': 'TextEdit', 'Panjang': 'TextEdit', 'Kecamatan': 'TextEdit', 'Status': 'TextEdit', });
lyr_KualaJambi_5.set('fieldImages', {'Name': '', 'Nomor': '', 'Nama Jalan': '', 'Nomor Ruas': '', 'Panjang': '', 'Lebar': '', 'Kecamatan': '', 'Status': '', 'Lon': '', 'Lat': '', 'Date': '', 'Instansi': '', 'Images': '', 'Path': '', });
lyr_Pola_Ruang_6.set('fieldImages', {'FID_PENUTU': 'Range', 'TUPLAH': 'TextEdit', 'SUMBER': 'TextEdit', 'LUAS': 'TextEdit', 'FID_Rencan': 'Range', 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Luas_1': 'TextEdit', 'Kecamatan': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SUMBER_1': 'TextEdit', 'PR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'LUAS_12': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas_12_13': 'TextEdit', 'area': 'TextEdit', 'are1': 'TextEdit', });
lyr_Sistemperkotaan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_Kabupaten_1.set('fieldLabels', {'KODE_KK': 'no label', 'KODE_PROV': 'no label', 'KAB_KOTA': 'no label', 'PROVINSI': 'no label', 'FID': 'no label', });
lyr_Desa_2.set('fieldLabels', {'FID': 'no label', 'NAME': 'no label', 'KODE_KEC': 'no label', 'KODE_KD': 'no label', 'KODE_KK': 'no label', 'KODE_PROV': 'no label', 'TIPE_KD': 'no label', 'KECAMATAN': 'no label', 'KEL_DESA': 'no label', 'KAB_KOTA': 'no label', 'PROVINSI': 'no label', 'JENIS_KD': 'no label', });
lyr_Kecamatan_3.set('fieldLabels', {'KODE_KEC': 'no label', 'KODE_KK': 'no label', 'KODE_PROV': 'no label', 'KECAMATAN': 'no label', 'KAB_KOTA': 'no label', 'PROVINSI': 'no label', 'FID': 'no label', });
lyr_JaringanJalan_4.set('fieldLabels', {'OBJECTID': 'no label', 'Kl_Dat_Das': 'no label', 'Nm_Ruas': 'no label', 'Thn_Data': 'no label', 'Fungsi': 'no label', 'Mendukung': 'no label', 'Kd_Inf': 'no label', 'Propinsi': 'no label', 'Kab_Kot': 'no label', 'Desa_Kel': 'no label', 'Tk_Ruas_Aw': 'no label', 'Tk_Ruas_Ak': 'no label', 'Kon_Baik': 'no label', 'Kon_Sdg': 'no label', 'Kon_Rgn': 'no label', 'Kon_Rusak': 'no label', 'Kon_Mntp': 'no label', 'Kon_T_Mntp': 'no label', 'Tipe_Keras': 'no label', 'Panjang': 'no label', 'Kecamatan': 'no label', 'Status': 'no label', });
lyr_KualaJambi_5.set('fieldLabels', {'Name': 'no label', 'Nomor': 'no label', 'Nama Jalan': 'no label', 'Nomor Ruas': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Kecamatan': 'no label', 'Status': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Date': 'no label', 'Instansi': 'no label', 'Images': 'no label', 'Path': 'no label', });
lyr_Pola_Ruang_6.set('fieldLabels', {'FID_PENUTU': 'no label', 'TUPLAH': 'no label', 'SUMBER': 'no label', 'LUAS': 'no label', 'FID_Rencan': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Luas_1': 'no label', 'Kecamatan': 'no label', 'KABUPATEN': 'no label', 'SUMBER_1': 'no label', 'PR': 'no label', 'Shape_Leng': 'no label', 'LUAS_12': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Luas_12_13': 'no label', 'area': 'no label', 'are1': 'no label', });
lyr_Sistemperkotaan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Kategori': 'no label', 'Keterangan': 'no label', });
lyr_Sistemperkotaan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});