//Link Corona
var link = "https://api.kawalcorona.com/";

//Memanggil API
var api = new XMLHttpRequest();
api.open("GET", link);
api.send();
api.addEventListener("load", () => {
    var xml = JSON.parse(api.responseText);
    var aktif =  xml[18].attributes.Active;
    var konfirmasi = xml[18].attributes.Confirmed;
    var negara = xml[18].attributes.Country_Region;
    var waktu = xml[18].attributes.Last_Update;
    var lintang = xml[18].attributes.Lat;
    var bujur = xml[18].attributes.Long_;
    var sembuh = xml[18].attributes.Recovered;
    var meninggal = xml[18].attributes.Deaths;
    document.getElementById("aktif").innerHTML += formatAngkaRibuan(aktif);
    document.getElementById("konfirmasi").innerHTML += formatAngkaRibuan(konfirmasi);
    document.getElementById("meninggal").innerHTML += formatAngkaRibuan(meninggal);
    document.getElementById("sembuh").innerHTML += formatAngkaRibuan(sembuh); 
    document.getElementById("negara").innerHTML += negara;
    document.getElementById("lintang").innerHTML += lintang;
    document.getElementById("bujur").innerHTML += bujur;
    document.getElementById("waktu").innerHTML += waktus(waktu);
});

function waktus(waktu) {
    var waktun = new Date(waktu);
    var hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at'", "Sabtu"];
    var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var tahun = waktun.getFullYear();
    var jam = "0" + waktun.getHours();
    var menit = "0" +waktun.getMinutes();
    var detik = "0" +waktun.getSeconds();
    var tanggal = waktun.getDate();
    return jam.substr(-2) + ":" + menit.substr(-2) + ":" + detik.substr(-2) + " | " + hari[waktun.getDay()] + ", " + tanggal + " " + bulan[waktun.getMonth()] + " " + tahun
}

function waktuss(waktu) {
    var jam = "0" + waktu.getHours();
    var menit = "0" +waktu.getMinutes();
    var detik = "0" +waktu.getSeconds();
    return jam.substr(-2) + ":" + menit.substr(-2) + ":" + detik.substr(-2);
}

document.getElementById("waktuu").innerHTML += waktuss(new Date());

function formatAngkaRibuan(angka) {
    var stringa = angka.toString(),
	    sisa 	= stringa.length % 3,
	    rupiah 	= stringa.substr(0, sisa),
	    ribuan 	= stringa.substr(sisa).match(/\d{3}/g);
		
    if (ribuan) {
	    separator = sisa ? '.' : '';
	    rupiah += separator + ribuan.join('.');
    }
    return rupiah;
}
