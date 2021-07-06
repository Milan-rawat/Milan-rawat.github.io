(function ($) {
  "use strict";

  // PRELOADER
  $(window).on("load", function () {
    setTimeout(function () {
      $(".pin").text("Loading");
      $(".loader-wrap").fadeTo(750, 1, function () {
        $("#main").animate(
          {
            opacity: "1",
          },
          750
        );
      });
    }, 1500);
    setTimeout(function () {
      $(".preloader").css("opacity", "0");
    }, 2500);
  });

  // LANDING SCREEN TEXT CAROUSEL
  $("#text-slider").owlCarousel({
    nav: false,
    items: 1,
    navSpeed: 400,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
  });

  // ON CLICK MENU ITEMS
  $(".menu-block, .menu-item").on("click", function () {
    $(".name-block").addClass("reverse");
    $(".name-block-container").addClass("reverse");
    $(".main-menu").addClass("hidex");
    $(".main-menu").addClass("hide");
    $(".left-menu").removeClass("hidex");
    $(".left-menu").removeClass("hide");
    $(".menu-blocks").addClass("hidex");
    $(".inline-menu-container").addClass("showx");
    $(".inline-menu-container.style2").addClass("dark");
  });

  //  ON CLICK ABOUT BLOCK
  $(".about-block, .menu-item.about").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.about").addClass("showx");
    $(".content-blocks").addClass("hide");
    $(".content-blocks.about").removeClass("hide");
    $(".menu-item").removeClass("active");
    $(".menu-item.about").addClass("active");
  });

  //  ON CLICK EXPERIENCE BLOCK
  $(".timeline-block, .menu-item.timeline").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.timeline").addClass("showx");
    $(".content-blocks").addClass("hide");
    $(".content-blocks.timeline").removeClass("hide");
    $(".menu-item").removeClass("active");
    $(".menu-item.timeline").addClass("active");
    $("#timeline-1").timeline();
    $("#timeline-2").timeline();
    $("#timeline-3").timeline();
  });

  //  ON CLICK SKILLS BLOCK
  $(".skills-block, .menu-item.skills").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.skills").addClass("showx");
    $(".content-blocks").addClass("hide");
    $(".content-blocks.skills").removeClass("hide");
    $(".menu-item").removeClass("active");
    $(".menu-item.skills").addClass("active");
  });

  // ON CLICK PORTFOLIO BLOCK
  $(".portfolio-block, .menu-item.portfolio").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.portfolio").addClass("showx");
    $(".content-blocks").addClass("hide");
    $(".content-blocks.portfolio").removeClass("hide");
    $(".menu-item").removeClass("active");
    $(".menu-item.portfolio").addClass("active");
  });

  // ON CLICK PORTFOLIO BLOCK
  $(".blog-block, .menu-item.blog").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.blog").addClass("showx");
    $(".content-blocks").addClass("hide");
    $(".content-blocks.blog").removeClass("hide");
    $(".menu-item").removeClass("active");
    $(".menu-item.blog").addClass("active");
  });

  // ON CLICK CONTACT BLOCK
  $(".contact-block, .menu-item.contact").on("click", function () {
    $(".content-blocks").removeClass("showx");
    $(".content-blocks.contact").addClass("showx");
    $(".content-blocks").addClass("hide");
    $(".content-blocks.contact").removeClass("hide");
    $(".menu-item").removeClass("active");
    $(".menu-item.contact").addClass("active");
  });

  // ON CLICK CLOSE BLOCKS BUTTON
  $("#close").on("click", function () {
    $(".name-block").removeClass("reverse");
    $(".name-block-container").removeClass("reverse");
    $(".main-menu").removeClass("hidex");
    $(".main-menu").removeClass("hide");
    $(".left-menu").addClass("hidex");
    $(".left-menu").addClass("hide");
    $(".content-blocks").removeClass("showx");
    $(".content-blocks").addClass("hide");
    $(".menu-blocks").removeClass("hidex");
    $(".inline-menu-container").removeClass("showx");
    $(".menu-item").removeClass("active");
  });

  $(".menu-block, .menu-item, #close").on("click", function () {
    $(".content-blocks").animate({ scrollTop: 0 }, 800);
  });

  // EXPERIENCE BLOCK SCROLL
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline-img",
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    var itemLength = selectors.item.length;

    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min - 180) {
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };

  // PORTFOLIO BLOCK BACKGROUND CHANGE
  $(".project-box")
    .on("mouseover", function () {
      var index = $(".project-box").index(this);
      $(".bg-changer .section-bg")
        .removeClass("active")
        .eq(index)
        .addClass("active");
    })
    .on("mouseleave", function () {
      $(".bg-changer .section-bg").removeClass("active");
    });

  // CONTACT FORM VALIDATIONS
  $("form[name='contact-form']").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
      msg: "required",
    },
    messages: {
      name: "Please enter your full name!",
      email: "Please enter a valid email address!",
      msg: "Please leave a message...",
    },

    submitHandler: function (form) {
      $("form").submit(function (event) {
        event.preventDefault();

        if (!$(this).val()) {
          $(this).addClass("error");
        } else {
          $(this).removeClass("error");
        }
        var email = "anushkarvp1999@gmail.com";
        var useremail = $("#email").val();
        var username = $("#name").val();
        var subject = $("#subject").val();
        var msg = $("#msg").val();
        var emailBody = `
									${msg}
									%0A%0A
									Please get back to me at: ${useremail}
									%0A%0A
									${username}
								`;
        // console.log(emailBody);
        window.open(
          "mailto:" + email + "?subject=" + subject + "&body=" + emailBody
        );
        $("#email").val("");
        $("#name").val("");
        $("#subject").val("");
        $("#msg").val("");
      });
    },
  });
})(jQuery);
