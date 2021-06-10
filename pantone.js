// PANTONE &reg; and other Pantone trademarks are the property of Pantone LLC.

// Thanks to James Pederson (https://github.com/jpederson) for the Pantone JSON files.

var pantoneData = {
  
  
  'coated' : 'pantone.json',
  
  
};

function renderList(url, target) {
  $.getJSON(url)
    .then(function(data) {
    var colors = [];
    var sideLength = Math.max(40,
                             (Math.max(window.innerHeight, window.innerWidth) / Math.sqrt(data.length)));
    $.each(data, function(index, color) {
      var el = 
        $('<li>').append($('<div class="pantone">').attr('data-hex', color.hex).attr('data-pantone', color.pantone).css('background-color', color.hex).css('width', sideLength).css('height', sideLength));
      colors.push(el.html());
    });
    var list = $('<ul class="colors">').html(colors.join(''));
    $(target).html(list);
  })
  .fail(function(error) {
    $(target).html('<h1>There was an error getting color data. :(</h1>');
  });
}

function renderSwatchText(rawText) {
  var textArr = rawText.split('-');
  var numIndex = -1;
  textArr.some(function(el, i) {
    if (!isNaN(el)) {
      numIndex = i;
      return true;
    }
  });
  var code = (numIndex >= 0) ? textArr.slice(numIndex).join('-').replace(/-(\D)$/, ' $1') : '';
  var name = (numIndex >= 0) ? textArr.slice(0, numIndex).join(' ') : textArr.join(' ');
    
  $('.color-code').html(code);
  $('.color-name').html(name);
}

renderList(pantoneData.uncoated, '#target');

$('#target').on('click', '.pantone', function() {
  $('#swatch').toggleClass('active');
  $('.swatch-color').css('background-color', $(this).data('hex'));
  renderSwatchText($(this).data('pantone'))
});

$('#options').on('click', 'input', function() {
  $('#swatch').removeClass('active');
  renderList(pantoneData[$(this).val()], '#target');
});