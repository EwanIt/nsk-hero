setTimeout(function() {
  $('#info-block').fadeOut('fast');
}, 5000); // <-- time in milliseconds

//код для бургер-меню
let menuBtn = document.querySelector('.menu-btn')
let menu = document.querySelector('.menu')

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active')
  menu.classList.toggle('active')
})

//код для анимаций при скролле(Блоку с классом anim добавляет animated)

function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
		change.target.classList.add('animated');
	  }
	});
  }
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.anim');
  for (let elm of elements) {
	observer.observe(elm);
  }

//код для плавной прокрутки до id(jque)

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });