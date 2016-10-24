var templates = {},
    photos,
    comments = [];

$.ajax({
  url: '/photos',
  type: 'get'
}).done(function(json) {
  photos = json;
  $('#slides').html(templates.photos({ photos: photos }));
  photos.forEach(function(photo, idx) {
    $.ajax({
      url: '/comments?photo_id=' + String(idx + 1),
    })
    .done(function(json) {
      comments.push(json);
      renderPhotoInfo(0);
    });
  });
});



$("script[type='text/x-handlebars']").each(function(i, temp) {
  templates[$(temp).attr('id')] = Handlebars.compile($(temp).html());
});

(function() {
  slideshow = {
    currentSlide: 0,
    fadeOutCurrent: function() {
      $('figure:visible').fadeOut(500);
    },
    fadeInCurrent: function() {
      $('figure').eq(this.currentSlide).fadeIn(500);
    },
    incrementSlideNumber: function() {
      this.currentSlide = this.currentSlide === 2 ? 0 : ++this.currentSlide;
    },
    decrementSlideNumber: function() {
      this.currentSlide = this.currentSlide === 0 ? 2 : --this.currentSlide;
    },
    nextSlide: function() {
      this.fadeOutCurrent();
      this.incrementSlideNumber();
      this.fadeInCurrent();
      renderPhotoInfo(this.currentSlide);
    },
    prevSlide: function() {
      this.fadeOutCurrent();
      this.decrementSlideNumber();
      this.fadeInCurrent();
      renderPhotoInfo(this.currentSlide);
    },
    renderMediaButtons: function() {
      console.log($('.actions a'));
    },
    bind: function() {
      $('a.next').on('click', $.proxy(this.nextSlide, this));
      $('a.prev').on('click', $.proxy(this.prevSlide, this));
      $('.actions a').on('click', function(e) {
        e.preventDefault();
        $.ajax({
          url: $(e.target).attr('href'),
          type: 'post',
          data: {
            photo_id: +$('figure:visible').attr('data-id'),
          }
        })
        .done(function(json) {
          $(e.target).html($(e.target).html().replace(/\d+/, json.total));
        });
      });
    },
    init: function() {
      this.bind();
      this.renderMediaButtons();
    },
  }
})();

Handlebars.registerPartial('comment', $('#comment').html());

function renderPhotoInfo(idx) {
  console.log(idx);
  $('#comments ul').html(templates.comments({ comments: comments[idx] }));
}

slideshow.init();
