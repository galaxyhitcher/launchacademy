$(function() {
  if (localStorage.activeNav) {
    $('.active').removeClass('active');
    $('a').eq(localStorage.activeNav).addClass('active');
    toggleArticle(localStorage.activeNav);
  }

  if (localStorage.backgroundColor) {
    $('body').css({
      'background-color': localStorage.backgroundColor,
    });
  }

  if (localStorage.note) {
    $('textarea').text(localStorage.note);
  }

  $('li').change(function() {
    var backgroundColor = $(this).find('input').val();
    $('body').css({
      'background-color': backgroundColor,
    });
    localStorage.setItem('backgroundColor', backgroundColor);
  });

  $('a').click(function(e) {
    e.preventDefault();
    $('.active').removeClass('active');
    $(e.target).addClass('active');
    clickedIndex = $('a').index(this);
    toggleArticle(clickedIndex);
  });

  function toggleArticle(justClickedIndex) {
    localStorage.setItem('activeNav', justClickedIndex);
    $('article:visible').css({
      display: 'none',
    });

    $('article').eq(justClickedIndex).css({
      display: 'block',
    });
  }
});

$(window).on("unload", function() {
  var note = $('textarea').val();
  localStorage.setItem('note', note);
});
