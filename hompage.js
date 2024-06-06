document.addEventListener('DOMContentLoaded', function() {
  const nailColorSelect = document.getElementById('nailColor');
  const comfortLevelSelect = document.getElementById('comfortLevel');

  nailColorSelect.addEventListener('change', applyFilters);
  comfortLevelSelect.addEventListener('change', applyFilters);

  function applyFilters() {
      const nailColor = nailColorSelect.value;
      const comfortLevel = comfortLevelSelect.value;
      filterImages(nailColor, comfortLevel);
  }

  function filterImages(nailColor, comfortLevel) {
      const images = document.querySelectorAll('.imageGrid img');

      images.forEach(image => {
          const nailColorAttr = image.getAttribute('data-nail-color');
          const comfortLevelAttr = image.getAttribute('data-comfort-level');

          const showImage = (nailColor === 'all' || nailColorAttr === nailColor)
              && (comfortLevel === 'all' || comfortLevelAttr === comfortLevel);

          image.style.display = showImage ? 'block' : 'none';
      });
  }
});
