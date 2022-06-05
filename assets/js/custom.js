$(document).ready(function () {
  //------------------  indicator active------------------ //
  $(".list").click(function () {
    $(".list").removeClass("active");
    $(this).addClass("active");
  });
  //------------------  Header Js------------------ //
  const list = document.querySelectorAll(".list");

  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));
  //------------------  Header Js end ------------------ //
  //------------------ OnClick Change one-page Section Start------------------//
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
      removeBackSection();
      for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
          addBackSection(j);
        }
        if (navList[j].classList.contains("active")) {
          addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
        navList[j].classList.remove("active");
      }
      this.classList.add("active")
      showSection(this);
    })
  }
  function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
  }
  function addBackSection(num) {
    allSection[num].classList.add("back-section");
  }
  function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
  }
  function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
      navList[i].classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
        navList[i].querySelector("a").classList.add("active");
      }
      if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
        navList[i].classList.add("active");
      }
    }
  }
  document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  })
  document.querySelector(".about-us").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  })
  //------------------ OnClick Change one-page Section End ----------------------//
  // ------------------   CURSOR    ---------------------- //
  var myCursor = jQuery(".mouse-cursor");

  if (myCursor.length) {
    if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
      let n,
        i = 0,
        o = !1;
      (window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      }),
      $("body").on("mouseenter", "a,.trigger, .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        }),
        $("body").on("mouseleave", "a,.trigger, .cursor-pointer", function () {
          ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
          (e.classList.remove("cursor-hover"),
            t.classList.remove("cursor-hover"));
        }),
        (e.style.visibility = "visible"),
        (t.style.visibility = "visible");
    }
  }
  // ------------------   CURSOR    ---------------------- //
  //------------------   owl carousel------------------ //
  $("#testimonial").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

/**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
   /**
   * Initiate blog page lightbox 
   */
    const blogDetailsLightbox = GLightbox({
      selector: '.blog-page-lightbox',
      width: '90%',
      height: '90vh'
    });
    
    /**
   * Portfolio details slider
   */
  new Swiper('.blog-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  
var mixer = mixitup(".portfolio-list");
//------------------    add all to same gallery------------------   //
$(".gallery a").attr("data-fancybox", "mygallery");
// assign captions and title from alt-attributes of images:
$(".gallery a").each(function () {
  $(this).attr("data-caption", $(this).find("img").attr("alt"));
  $(this).attr("title", $(this).find("img").attr("alt"));
});
// start fancybox:
//$(".gallery a").fancybox();

// Mixitup Js And Fancy Box Js For ProtFolio End ---------------------- //

/*$("[data-fancybox]").fancybox({*/
  /* "TRICK" selector - group only visible items */
  /*selector: ".mix:visible a",
  loop: true,
  hash: true,
  transitionEffect: "slide",*/
  /* zoom VS next////////////////////
    clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */
  /*clickContent: function (current, event) {
    return current.type === "image" ? "next" : false;
  },
});
*/
// Mixitup Js And Fancy Box Js For ProtFolio End ---------------------- //

//------------------    Counter Js------------------   //
$(".funfacts-box").each(function () {
  var pos_y = $(this).offset().top - window.innerHeight;
  var $this = $(this).find(".counter"),
    countTo = $this.attr("data-to"),
    during = parseInt($this.attr("data-time")),
    topOfWindow = $(window).scrollTop();

  if (pos_y < topOfWindow) {
    $({
      countNum: $this.text(),
    }).animate({
      countNum: countTo,
    }, {
      duration: during,
      easing: "swing",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      },
    });
  }
});
//------------------    Counter Js------------------   //
