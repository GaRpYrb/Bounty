
$(function($) {
		$('.slider1').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: 'div',
			arrows: false
		});
	})

	$(function($) {
		$('.ba-test__content--slider').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			slide: 'div',
			arrows: false
		});
	})

	function initMap() {
  var uluru = {lat: 63.0453316, lng: 14.1820366};
  var map = new google.maps.Map(
  document.getElementById('map'), {zoom: 6, center: uluru});
 


var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: "img/Marker.svg"
});

}


var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.first').text();
    return parseInt( number, 10 ) > 50;
  },
  
};
// bind filter button click
$('.filters-button-group').on( 'click', 'li', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'li', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
