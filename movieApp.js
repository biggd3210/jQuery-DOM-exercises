// Empty title value under focus.
$('.title').on('focus', function() {
    $('.title').val('');
})

$('#add').on('click', function() {
    let title = $('.title').val();
    let rating = $('.rating').val();
    if (title.length >= 2 && rating >= 0 && rating <= 10) {
    $('.movie-list').append(`<li>${title}, ${rating}<button class="remove">Remove</button></li>`)
    }
})

// create event listener to remove parent of remove button from DOM

$('.movie-list').on('click', '.remove', function(e) {
    $(e.target).parent().remove();
})

// sort handling

//I tried to figure out sort, but I've not been able to figure it out yet. I'm going to ask my mentor. 

/* $('#title-asc').on('click', function() {
let titles = $('.movie-list li').get();
titles.sort(function(a,b){
    let keyA = $(a).text();
    let keyB = $(b).text();

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;

let ul = $('.movie-list');
$.each(titles, function(i, li) {
    ul.append(li);
})

})
console.log(titles);
})

*/