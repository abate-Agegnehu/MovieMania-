let index = 0;
const totalWorkItems = $(".work-item").length;
$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").addClass("loaded");
  });

  $(".nav-toggle").click(function () {
    $(".header .nav").slideToggle();
  });
  $(".header .nav a").click(function () {
    if ($(window).width() < 768) {
      $(".header .nav").slideToggle();
    }
  });
  // fixed header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });

  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $(".work-item-inner").click(function () {
    index = $(this).parent(".work-item").index();
    $(".lightbox").addClass("open");
    lightboxSlideShow();
    const parentElement = $(this).parent(".work-item")[0]; // Get the native DOM element
    const rect = parentElement.getBoundingClientRect();
    const marginTop = rect.top;
    const marginRight = window.innerWidth - rect.right;
    const marginBottom = window.innerHeight - rect.bottom;
    const marginLeft = rect.left;
    const width = $(this).width();
    $(".lightbox").css("margin-left", marginLeft + 15);
    $(".lightbox").css("margin-top", marginTop + 15);
    $(".lightbox").css("height", "200px");
    $(".lightbox").css("width", width);

    $(window).scroll(function () {
      $(".lightbox").css("display", "none");
    });
  });

  $(".lightbox .prev").click(function () {
    if (index == 0) {
      index = totalWorkItems - 1;
    } else {
      index--;
    }
    lightboxSlideShow();
  });

  $(".lightbox .next").click(function () {
    if (index == totalWorkItems - 1) {
      index = 0;
    } else {
      index++;
    }
    lightboxSlideShow();
  });

  $(".lightbox-close").click(function () {
    $(".lightbox").removeClass("open");
    $(".lightbox").css("display", "none");
  });

  function lightboxSlideShow() {
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totalWorkItems + "/" + (index + 1));
    $(".lightbox").css("display", "flex");
  }

  $("#button").click(function () {
    $("#dialog").html(
      " Thank you for contactiing us. We'll get back to soon. Don't forget to check your Email."
    );
    $("#dialog").dialog({
      title: "Thankyou for contacting",
      closeOnEscape: false,
      modal: true,
      autoOpen: false,
    });
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if (
      name == null ||
      name === "" ||
      email == null ||
      email === "" ||
      message == null ||
      message === ""
    ) {
      $("#dialog").html(
        "Please fill all information correctly for contacting us"
      );
      $("#dialog").dialog("open");
      $("#dialog").dialog({
        title: "All field required",
        closeOnEscape: false,
        modal: true,
        autoOpen: false,
      });
    } else {
      $("#dialog").dialog("open");
    }
  });
  $("#dialog").dialog({
    title: "Thankyou for contacting",
    closeOnEscape: false,
    modal: true,
    autoOpen: false,
  });
});
