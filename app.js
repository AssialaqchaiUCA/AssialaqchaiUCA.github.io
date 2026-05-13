$(document).ready(function () {
  const canvas  = document.getElementById('particles');
  const ctx     = canvas.getContext('2d');
  let particles = [];   

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 8000); 
    const colors = ['#00f3ff', '#ff00a0', '#ffd700', '#7b2fff'];     

    for (let i = 0; i < count; i++) {
      particles.push({
        x:         Math.random() * canvas.width,
        y:         Math.random() * canvas.height,
        size:      Math.random() * 1.5 + 0.3,             
        opacity:   Math.random(),                          
        speed:     Math.random() * 0.008 + 0.002,         
        color:     colors[Math.floor(Math.random() * colors.length)],
        direction: Math.random() > 0.5 ? 1 : -1          
      });
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.opacity += p.speed * p.direction;
      if (p.opacity >= 1 || p.opacity <= 0) p.direction *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    });

    ctx.globalAlpha = 1; 
    requestAnimationFrame(animateParticles);
  }

  resizeCanvas();
  initParticles();
  animateParticles();

  $(window).on('resize', function () {
    resizeCanvas();
    initParticles();
  });

  const sections  = $('header, section');   
  const navLinks  = $('.nav-link');
  const navHeight = $('#navbar').outerHeight() || 70; 

  $(window).on('scroll.nav', function () {
    const scrollY = $(this).scrollTop();

    sections.each(function () {
      const sectionTop = $(this).offset().top - navHeight - 50;
      const sectionId  = $(this).attr('id');

      if (scrollY >= sectionTop) {
        navLinks.removeClass('active');
        $(`.nav-link[href="#${sectionId}"]`).addClass('active');
      }
    });
  });

  $(window).on('scroll.navbar', function () {
    if ($(this).scrollTop() > 50) {
$('#navbar').css('background', 'rgba(13, 10, 26, 0.97)');  
    } else {
      $('#navbar').css('background', 'rgba(13, 10, 26, 0.90)');
    }
  });
  const titles = [
    'Étudiant en Informatique',
    'Développeur Web Front-End',
    'Designer UI/UX',
    'En formation ANALYSE DES DONNÉES',
  ];

  let titleIndex = 0;    
  let charIndex  = 0;    
  let isDeleting = false; 

  function typeWriter() {
    const current = titles[titleIndex];
    const $target = $('#typing-title');

    if (!isDeleting) {
      $target.text(current.substring(0, charIndex + 1));
      charIndex++;

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1800); 
        return;
      }
      setTimeout(typeWriter, 80); 

    } else {
      $target.text(current.substring(0, charIndex - 1));
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        titleIndex  = (titleIndex + 1) % titles.length;
        setTimeout(typeWriter, 400); 
        return;
      }
      setTimeout(typeWriter, 40); 
    }
  }

  typeWriter(); 

  let countersStarted = false; 
  function startCounters() {
    if (countersStarted) return;
    countersStarted = true;

    $('.counter').each(function () {
      const $el   = $(this);
      const target = parseInt($el.attr('data-target'), 10);
      const duration = 1500; 
      const step   = duration / target; 

      let current = 0;
      const timer = setInterval(function () {
        current++;
        $el.text(current);
        if (current >= target) clearInterval(timer);
      }, step);
    });
  }

  $(window).on('scroll.counters', function () {
    const aboutTop    = $('#about').offset().top;
    const windowBottom = $(this).scrollTop() + $(this).height();
    if (windowBottom > aboutTop + 100) {
      startCounters();
    }
  });

  $('.section-header, .neon-card, .timeline-item, .stat-item, .filter-btn').addClass('anim-hidden');

  function checkAnimations() {
    const windowBottom = $(window).scrollTop() + $(window).height();

    $('.anim-hidden').each(function () {
      const elemTop = $(this).offset().top;
      if (windowBottom > elemTop + 60) {
        $(this).addClass('anim-show');
      }
    });
  }

  checkAnimations();
  $(window).on('scroll.animations', checkAnimations);

  $(document).on('click', '.accordion-header', function () {
    const $body  = $(this).find('.accordion-body');
    const $other = $('.accordion-header').not(this);

    $other.removeClass('open').find('.accordion-body').slideUp(300);

    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $body.slideUp(300);
    } else {
      $(this).addClass('open');
      $body.slideDown(300);
    }
  });

  $(document).on('click', '.filter-btn', function () {
    const filter = $(this).attr('data-filter');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.skill-category').stop(true).fadeIn(400);
    } else {
      $('.skill-category').each(function () {
        if ($(this).attr('data-category') === filter) {
          $(this).stop(true).fadeIn(400);
        } else {
          $(this).stop(true).fadeOut(200);
        }
      });
    }
  });
  let skillsAnimated = false;

  function animateSkillBars() {
    if (skillsAnimated) return;

    const skillsTop    = $('#skills').offset().top;
    const windowBottom = $(window).scrollTop() + $(window).height();

    if (windowBottom > skillsTop + 100) {
      skillsAnimated = true;

      $('.skill-bar-fill').each(function () {
        const level = $(this).attr('data-level') + '%';
        $(this).delay(200).animate({ width: level }, {
          duration: 1200,
          easing: 'swing'
        });
      });
    }
  }

  $(window).on('scroll.skills', animateSkillBars);

  $(document).on('submit', '#contact-form', function (e) {
    e.preventDefault(); 
    let isValid = true; 

    function showError($input, $errEl) {
      $input.addClass('error');
      $errEl.addClass('visible');
      isValid = false;
    }
    function clearError($input, $errEl) {
      $input.removeClass('error');
      $errEl.removeClass('visible');
    }

    const $name    = $('#contact-name');
    const $email   = $('#contact-email');
    const $message = $('#contact-message');

    const $errName    = $('#err-name');
    const $errEmail   = $('#err-email');
    const $errMessage = $('#err-message');

    clearError($name,    $errName);
    clearError($email,   $errEmail);
    clearError($message, $errMessage);

    if ($name.val().trim() === '') {
      showError($name, $errName);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test($email.val().trim())) {
      showError($email, $errEmail);
    }
    if ($message.val().trim().length < 10) {
      showError($message, $errMessage);
    }

    if (isValid) {
      $('#contact-form').fadeOut(300, function () {
        $('.form-success').addClass('visible').hide().fadeIn(400);
      });
    }
  });

  $(document).on('input', '.form-input, .form-textarea', function () {
    $(this).removeClass('error');
  });

  $('#year').text(new Date().getFullYear());

  setInterval(function () {
    const $glitch = $('.glitch-text');
    $glitch.css('transform', `translate(${Math.random() * 4 - 2}px, 0)`);
    setTimeout(function () {
      $glitch.css('transform', 'translate(0, 0)');
    }, 100);
  }, 4000);

}); 
