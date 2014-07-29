/*============================================*/
/* JS DAY THREE */
/*============================================*/

// ==========================================================
// Loop over the first image that is available.  Add a title.
// ==========================================================
var firstPart = '<div style=" background-image: url(';
var lastPart = ') " class="box"></div>' 

items.forEach(function(item){
    var totalString = '<a href="' + item.url + '"style="background-image: url(' + item.Images[0].url_570xN + ') " target="_blank" class="box"></a>'
    $('.main').append(totalString)
	var totalString = '<div class="boxTitle">' + item.category_path[0] + " | " + item.category_path[1] + '</div>'
    $('.box').last().append(totalString)
    var totalString = '<div class="boxPrice">' + "$" + item.price + '</div>'
    $('.boxTitle').last().append(totalString)
})

// ===============================================
items.forEach(function(item){
	var totalString = '<div style="background-color: #' + item.Images[0].hex_code + '" class="box"></div>'
    $('.main').append(totalString)
})