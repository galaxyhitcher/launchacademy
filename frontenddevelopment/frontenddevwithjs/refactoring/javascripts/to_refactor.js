$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass('opened');
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass('opened');
  });

  $(".button,button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next(".accordion").toggleClass("opened");
  });

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val(),
        odd_total = 0,
        even_total = 0;

    cc_number = cc_number.split("").reverse();

    function sumOddAndEven(arr) {
      var odd = 0,
          even = 0;
      arr.forEach(function(num, i) {
        if (i % 2 === 0) {
          odd += +num;
        } else {
          even += +num;
        }
      });
      return [odd, even];
    }

    odd_total = sumOddAndEven(cc_number)[0];
    even_total = sumOddAndEven(cc_number)[1];
    $(this).find(".success").hide();
    $(this).find(".error").hide();
    if ((odd_total + even_total) % 10 == 0) {
      $(this).find(".success").toggle();
    }
    else {
      $(this).find(".error").toggle();
    }
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
        $stone = $("#birthstone"),
        settings = {
          January: "Your birthstone is garnet",
          February: "Your birthstone is amethyst",
          March: "Your birthstone is aquamarine or bloodstone",
          April: "Your birthstone is diamond",
          May: "Your birthstone is emerald",
          June: "Your birthstone is pearl, moonstone, or alexandrite",
          July: "Your birthstone is ruby",
          August: "Your birthstone is peridot",
          September: "Your birthstone is sapphire",
          October: "Your birthstone is opal or tourmaline",
          November: "Your birthstone is topaz or citrine",
          December: "Your birthstone is turquoise, zircon, or tanzanite"
        };

    $stone.text(settings[month]);
  });
});
