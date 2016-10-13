var templates = {},
    photos,
    likes,
    favorites;

$("script[type='text/x-handlebars']").each(function() {
  templates[$(this).attr('id')] = Handlebars.compile($(this).html());
});

$("[data-type=partial]").each(function() {
    var $partial = $(this);
    Handlebars.registerPartial($partial.attr("id"), $partial.html());
});

$.ajax({
  url: "/photos",
  success: function(json) {
    photos = json;
    renderPhotos();
    renderPhotoInformation(0);
    getCommentsFor(photos[0].id);
  },
});

(function() {
  slideshow = {
    currentSlideIndex: 0,
    fadeCurrentOut: function(time) {
      var that = this;
      $('#slides figure').eq(that.currentSlideIndex).fadeOut(time);
    },
    fadeCurrentIn: function(time) {
      var that = this;
      $('#slides figure').eq(that.currentSlideIndex).fadeIn(time);
    },
    incrementSlideNumber: function() {
      var that = this;
      that.currentSlideIndex = (that.currentSlideIndex === 2 ? 0 : ++that.currentSlideIndex);
    },
    decrementSlideNumber: function() {
      var that = this;
      that.currentSlideIndex = (that.currentSlideIndex === 0 ? 2 : --that.currentSlideIndex);
    },
    bind: function() {
      var that = this;
      $('.next').click(function(e) {
        e.preventDefault();
        that.fadeCurrentOut(500);
        that.incrementSlideNumber();
        that.fadeCurrentIn(500);
        renderPhotoInformation(that.currentSlideIndex);
        getCommentsFor(photos[that.currentSlideIndex].id);
      });

      $('.prev').click(function(e) {
        e.preventDefault();
        that.fadeCurrentOut(500);
        that.decrementSlideNumber();
        that.fadeCurrentIn(500);
        renderPhotoInformation(that.currentSlideIndex);
        getCommentsFor(photos[that.currentSlideIndex].id);
      });
    },
    init: function() {
      this.bind();
    },
  }
})();

$("section > header").on("click", ".actions a", function(e) {
  e.preventDefault();
  var $e = $(e.target);

  $.ajax({
    url: $e.attr("href"),
    type: "post",
    data: "photo_id=" + $e.attr("data-id"),
    success: function(json) {
      $e.text(function(i, txt) {
        return txt.replace(/\d+/, json.total);
      });
    }
  });
});

$("form").on("submit", function(e) {
  e.preventDefault();
  var $f = $(this);

  $.ajax({
    url: $f.attr("action"),
    type: $f.attr("method"),
    data: $f.serialize(),
    success: function(json) {
      $("#comments ul").append(templates.comment(json));
    }
  })
})

function renderPhotos() {
  $("#slides").html(templates.photos({ photos: photos }));
}

function renderPhotoInformation(idx) {
  $("[name=photo_id]").val(idx + 1);
  $("section > header").html(templates.photo_information(photos[idx]));

}

function getCommentsFor(idx) {
  $.ajax({
    url: "/comments",
    data: "photo_id=" + idx,
    success: function(comment_json) {
     $("#comments ul").html(templates.comments({ comments: comment_json }));
    },
  });
}

slideshow.init();
