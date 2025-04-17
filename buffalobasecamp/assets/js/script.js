jQuery(document).ready(function($) {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();

    $(window).scroll(function () {
        updateProgress();
        if ($(this).scrollTop() > 50) {
            $('.progress-wrap').addClass('active-progress');
        } else {
            $('.progress-wrap').removeClass('active-progress');
        }
    });

    $('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 550);
        return false;
    });
});

document.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
  document.body.classList.toggle('#menu-open');
<script>
  let index = 0;
  const images = document.getElementById('carouselimages');
  const total = images.children.length;

  function showSlide(i) {
    index = (i + total) % total;
    images.style.transform = `translateX(-${index * 500}px)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }

  setInterval(nextSlide, 3000); // auto-slide every 3 seconds
</script>




});
});