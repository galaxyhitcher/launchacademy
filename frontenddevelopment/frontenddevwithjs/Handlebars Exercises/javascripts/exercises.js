
var post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
  tags: ['one fish', 'two fish', 'red fish', 'blue fish'],
};

var posts = [];
posts.push(post);
posts.push({
  title: 'Here is the title',
  published: 'October 10, 2016',
  body: '<p>Here is the paragraph</p>',
});

var postsTemplate = Handlebars.compile($('#posts').html());
Handlebars.registerPartial('tag', $('#tag').html());
$('body').append(postsTemplate({posts: posts}));
