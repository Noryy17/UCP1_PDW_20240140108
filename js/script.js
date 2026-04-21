
const video = document.getElementById('myVideo');
const audio = document.getElementById('myAudio');
const gambar = document.getElementById('myImage');
const kotakNotifikasi = document.getElementById('notifikasi');

function tampilkanPesan(pesanTeks) {
    kotakNotifikasi.innerText = pesanTeks; 
    kotakNotifikasi.style.display = 'block'; 

    setTimeout(function() {
        kotakNotifikasi.style.display = 'none';
    }, 3000);
}

video.addEventListener('play', function() {
    tampilkanPesan("▶️ Video sedang diputar!");
});


audio.addEventListener('play', function() {
    tampilkanPesan("🎵 Audio lofi sedang diputar!");
});


gambar.addEventListener('click', function() {
    tampilkanPesan("🖼️ Kamu mengklik gambar Lofi!");
});