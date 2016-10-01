$('document').ready(function() {
  $('li a').click(function(e) {
    e.preventDefault();
    $modal = $(this).parent().find('.modal');
    $modal_layer = $(this).parent().find('.modal_layer');
    $modal.css({
      display: 'block',
    });
    $modal_layer.css({
      display: 'block'
    });

    $modal.find('#close').click(function(e) {
      e.preventDefault();
      $modal.css({
        display: 'none'
      });
      $modal_layer.css({
        display: 'none'
      })
    })

    $modal_layer.click(function(e) {
      $modal.find('#close').trigger('click');
    })

    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        $modal.find('#close').trigger('click');
      }
    })
  })
})
