document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<span class="lightbox-close">&times;</span><img class="lightbox-img" alt="">';
  document.body.appendChild(overlay);
  var lightboxImg = overlay.querySelector('.lightbox-img');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  var images = document.querySelectorAll('img');
  images.forEach(function (img) {
    // Skip the nav logo
    if (img.closest('.nav')) return;
    // Skip homepage card thumbnails — those already navigate on click
    if (img.classList.contains('thumb')) return;

    img.classList.add('zoomable');
    img.addEventListener('click', function (e) {
      e.stopPropagation();
      openLightbox(img.src, img.alt);
    });
  });
});
