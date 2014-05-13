// items.forEach(function(item){
//     $('.container'.append('<div style="background-image: url(' + items.Images.url_75x75 + '; class="box"></div>'))
// })

// items.forEach(function(item) {
// 	console.log(item.Images.hex_code);
// })

// items.forEach(function(item){
// 	$('container').append('<div style"background-color: #' + item.Images.hex_code + ';" class="box"></div>')
// })


// ======================================
// Loop over all of the images available.
// ======================================
// var firstPart = '<div style=" background: url(';
// var lastPart = ') " class="box"></div>' 

// items.forEach(function(item){
//   item.Images.forEach(function(image){
//     var totalString = firstPart + image.url_75x75 + lastPart
//     $('.container').append(totalString)
//   })
// })


// ==========================================================
// Loop over the first image that is available.  Add a title.
// ==========================================================
var firstPart = '<div style=" background-image: url(';
var lastPart = ') " class="box"></div>' 

// items.forEach(function(item){
//     var totalString = firstPart + item.Images[0].url_570xN + lastPart
//     $('.main').append(totalString)
// 	var totalString = '<div class="boxTitle">' + item.title + '</div>'
//     $('.box').last().append(totalString)
// })

// ==========================================================
// Loop over first image.  Add a title + stuff
// ==========================================================
// var firstPart = '<div style=" background-image: url(';
// var lastPart = ') " class="box"></div>' 

items.forEach(function(item){
    // var totalString = firstPart + item.Images[0].url_570xN + lastPart
    // $('.main').append(totalString)
    var totalString = '<a href="' + item.url + '"style="background-image: url(' + item.Images[0].url_570xN + ') " target="_blank" class="box"></a>'
    $('.main').append(totalString)
	var totalString = '<div class="boxTitle">' + item.category_path[0] + " | " + item.category_path[1] + '</div>'
    $('.box').last().append(totalString)
    var totalString = '<div class="boxPrice">' + "$" + item.price + '</div>'
    $('.boxTitle').last().append(totalString)
})

// ==========================================================
// List of Links to leftBar
// ==========================================================

// =============================================
// Loop over the first image hex_code available.
// =============================================
// var firstPart = '<div style=" background: #';
// var lastPart = '" class="box"></div>'

// items.forEach(function(item){
//     var totalString = firstPart + item.Images[0].hex_code + lastPart
//     $('.main').append(totalString)
// })

// ===============================================
// Contain the loop, avoid var = a bunch of times.
// ===============================================

items.forEach(function(item){
	var totalString = '<div style="background-color: #' + item.Images[0].hex_code + '" class="box"></div>'
    $('.main').append(totalString)
})






// ============================================
// Insert a space after each section of images.
// ============================================













