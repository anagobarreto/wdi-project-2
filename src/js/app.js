$('.lightbox').click(function(){
  const src = $(this).find('img').attr('src');

  const container = $('<div />');
  container.addClass('lightbox-container');
  container.click(function(){
    $(this).remove();
  });
  $('body').append(container);

  const image = $('<img />');
  image.attr('src', src);
  container.append(image);
});
