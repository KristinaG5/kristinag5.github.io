/* jQuery Pre loader */
$(window).load(function () {
  $(".preloader").fadeOut(1000);
});

// Arrow to scroll to About Me section
$(function () {
  const arrow = $(".scroll");
  arrow.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#aboutMe").offset().top,
      },
      1500
    );
  });
});

// Arrow to scroll to project section
$(function () {
  const arrow = $(".scrollProject");
  arrow.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#project").offset().top,
      },
      1500
    );
  });
});
