$(document).foundation()


var x = new google.maps.LatLng(52.395715, 4.888916);
var stavanger = new google.maps.LatLng(58.983991, 5.734863);
var amsterdam = new google.maps.LatLng(52.395715, 4.888916);
var nairobi = new google.maps.LatLng(51.508742, -0.120850);

function initialize() {
    var mapProp = {
        center: x,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var myTrip = [nairobi, westlands, kenya];
    var flightPath = new google.maps.Polyline({
        path: myTrip,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });

    flightPath.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);




//slider


$(document).ready(function () {


    $('#leftNav').click(moveSlideLeft).click(setMarginWidth);
    $('#rightNav').click(moveSlideRight).click(setMarginWidth);


    var slidePosition = 0;

    function setMarginWidth() {
        var slideHolderMargin = -100 * slidePosition;
        $('.slide-holder').css("margin-left", slideHolderMargin + '%');
    }

    function moveSlideRight() {
        if (slidePosition == 1) {
            slidePosition = 0
        } else {
            slidePosition++;
        }
    }

    function moveSlideLeft() {
        if (slidePosition == 0) {
            slidePosition = 1
        } else {
            slidePosition = slidePosition - 1;
        }
    }



});
