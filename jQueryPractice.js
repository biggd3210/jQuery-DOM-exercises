// 1. wait for DOM content to load to console.log message

$(document).ready(function() {
    console.log("Let's get ready to party with jQuery!")
})

// 2. Give all images inside of an article tag the class of image-center

$('article img').attr('class', 'image-center');

// 3. Remove the last paragraph in the article.

$('article p').eq(5).remove();

// 4. Set the font size of the title to be a random pixel size from 0-100.

$('h1').css('font-size', (Math.random() * 100 + 'px'))

// 5. Add an item to the list: it can say whatever you want.

$('ol').append("<li>I'm something new in the list</li>")

// 6. Remove the aside and put a paragraph in apologize for the list's existance. 

$('aside').children().remove();
$('aside').append('<p>I am so sorry that list even existed</p>');

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$('.form-control').on('keyup blue change', function () {
    let red = $(".form-control").eq(0).val();
    let green = $(".form-control").eq(1).val();
    let blue = $(".form-control").eq(2).val();
    $('body').css('background-color', "rgb(" + red + "," + green + "," + blue + ")");
});

// 8. Add an event listener so that when you click on the image, it is removed from the DOM.

$('img').on('click', function(e) {
    $(e.target).remove();
})