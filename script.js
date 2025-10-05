// Lightbox untuk gambar
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Buka WhatsApp dengan pesan default (nomor: 083861333877 → format 6283861333877)
function openWhatsApp() {
    const phone = '6283861333877'; // Nomor asli dalam format internasional
    const message = 'Halo, saya tertarik membeli gula dari Sahmon Sipayung. Info lebih lanjut?';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Tutup lightbox jika klik di luar gambar atau tombol close
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target.classList.contains('lightbox') || e.target.classList.contains('close')) {
        closeLightbox();
    }
});

// Tutup lightbox dengan tombol ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});