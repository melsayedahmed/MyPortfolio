"serviceWorker" in navigator &&
  navigator.serviceWorker
    .register("sw.js")
    .then((e) => {})
    .catch((e) => {
      console.log(e);
    }),
  $(window).on("load", function () {
    console.clear(),
      setTimeout(() => {
        $(".loader-box").fadeOut(100);
      }, 1500);
  });
var f = 0;
$("#nav-btn").click(function () {
  0 == f
    ? ((f = 1),
      $(this).addClass("act").html("close"),
      $("#menu-box,#menu-box ul,.back,header,.container").addClass("act"))
    : ((f = 0),
      $(this).removeClass("act").html("menu"),
      $("#menu-box,#menu-box ul,.back,header,.container").removeClass("act"));
}),
  $(document).click(function (e) {
    "nav-btn" !== e.target.id &&
      "mode" !== e.target.id &&
      "menu-box" !== e.target.id &&
      ($("#nav-btn").removeClass("act").html("menu"),
      $("#menu-box,#menu-box ul,.back,header,.container").removeClass("act"));
  });
var typed = new Typed("#text", {
  strings: [
    "Mohab",
    "Mohab Mohammed",
    "Junior",
    "Junior Front-end developer",
    "Youtuber",
    "Freelancer",
  ],
  typeSpeed: 45,
  backSpeed: 50,
  loop: !0,
});
$("a").click(function () {
  $("html,body").animate(
    { scrollTop: $($(this).attr("href")).offset().top },
    1e3
  );
}),
  $(window).on("scroll", () => {
    window.scrollY > 200
      ? $("#b-btn").addClass("act")
      : $("#b-btn").removeClass("act");
  });
var t =
    "A self taught Web Developer with hands on experience of build Websites. My name is Mohab, Junior Front-end developer. have a Bachelor's degree in Computers and Information from The Egyptian University for E-Learning (EELU)",
  w = 0;
setInterval(() => {
  (document.getElementById("about-text").innerHTML += t.charAt(w)), w++;
}, 80);
const sr = ScrollReveal({ distance: "100px" });
ScrollReveal().reveal("header .img", { duration: 2e3, origin: "top" }),
  ScrollReveal().reveal("header .text", { duration: 2e3, origin: "bottom" }),
  ScrollReveal().reveal(".about-section", { duration: 2e3, origin: "bottom" });
var imgs = document.querySelectorAll(".project-section img");
ScrollReveal().reveal(imgs[0], { duration: 2e3, origin: "left" }),
  ScrollReveal().reveal(imgs[1], { duration: 2e3, origin: "top" }),
  ScrollReveal().reveal(imgs[2], { duration: 2e3, origin: "right" }),
  ScrollReveal().reveal(imgs[3], { duration: 2e3, origin: "left" }),
  ScrollReveal().reveal(imgs[4], { duration: 2e3, origin: "bottom" }),
  ScrollReveal().reveal(imgs[5], { duration: 2e3, origin: "right" }),
  ScrollReveal().reveal(imgs[6], { duration: 2e3, origin: "left" }),
  ScrollReveal().reveal(imgs[7], { duration: 2e3, origin: "top" }),
  ScrollReveal().reveal(imgs[8], { duration: 2e3, origin: "right" }),
  ScrollReveal().reveal(imgs[9], { duration: 2e3, origin: "left" }),
  ScrollReveal().reveal(imgs[10], { duration: 2e3, origin: "bottom" }),
  ScrollReveal().reveal(imgs[11], { duration: 2e3, origin: "right" }),
  ScrollReveal().reveal(imgs[0], { duration: 2e3, origin: "left" }),
  ScrollReveal().reveal(imgs[1], { duration: 2e3, origin: "top" }),
  ScrollReveal().reveal(imgs[2], { duration: 2e3, origin: "right" }),
  ScrollReveal().reveal(imgs[3], { duration: 2e3, origin: "left" }),
  ScrollReveal().reveal(imgs[4], { duration: 2e3, origin: "bottom" });
var card = document.querySelectorAll(".service-section .card");
ScrollReveal().reveal(card[0], { duration: 2e3, origin: "left" }),
  ScrollReveal().reveal(card[1], { duration: 2e3, origin: "bottom" }),
  ScrollReveal().reveal(card[2], { duration: 2e3, origin: "right" }),
  ScrollReveal().reveal(".skills-section", { duration: 2e3, origin: "bottom" }),
  ScrollReveal().reveal(".contact-section", {
    duration: 2e3,
    origin: "bottom",
  }),
  $("#b-btn").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1e3), $(this).removeClass("act");
  }),
  $("#dt").html(new Date().getFullYear());
