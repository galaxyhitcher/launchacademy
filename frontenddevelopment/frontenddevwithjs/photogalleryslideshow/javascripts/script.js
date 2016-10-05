$(document).ready(function(){
  $('.thumbnails img').click(function(e) {
    var clicked = $(this);
    e.preventDefault();
    var current_index,
        $current_image;
    $current_index = $(this).index();
    if (!$(this).hasClass('active')) {
      $('.thumbnails img').each(function(index, value) {
        if ($(value).hasClass('active')) {
          $(value).removeClass('active');
        }
      });

      $(this).addClass('active');
      $('.large_container img').each(function(index, value) {
        if ($(value).hasClass('active')) {
          $(value).fadeOut('fast', function() {
            $(value).removeClass('active');
            current_index = clicked.index();
            $current_image = $($('.large_container img').get(current_index));
            $current_image.fadeIn('fast');
            $current_image.addClass('active');
          });
        }
      });

    };
  });

  $('a#back').click(function(e) {
    e.preventDefault();
    var current_image_index;
    var currently_selected = $('.thumbnails img').filter(function(key, value) {
      return $(value).hasClass('active');
    })[0];

    for (var i = 0; i < $('.thumbnails img').length; i++) {
      if (currently_selected === $('.thumbnails img').get(i)) {
        current_image_index = i;
      }
    }

    var previous_thumbnail = $('.thumbnails img').get((current_image_index + 3) % 4);

    var $previous_thumbnail = $(previous_thumbnail);
    $previous_thumbnail.trigger('click');
  });

  $('a#forward').click(function(e) {
    e.preventDefault();
    var current_image_index;
    var currently_selected = $('.thumbnails img').filter(function(key, value) {
      return $(value).hasClass('active');
    })[0];

    for (var i = 0; i < $('.thumbnails img').length; i++) {
      if (currently_selected === $('.thumbnails img').get(i)) {
        current_image_index = i;
      }
    }

    var $next_thumbnail = $($('.thumbnails img').get((current_image_index + 5) % 4));

    $next_thumbnail.trigger('click');
  })

});
