/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/assets/js/maps2.js ***!
  \********************************/
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

CustomMarker.prototype = new google.maps.OverlayView();

function CustomMarker(opts) {
  this.setValues(opts);
}

CustomMarker.prototype.draw = function () {
  var self = this;
  var div = this.div;

  if (!div) {
    div = this.div = window.jQuery('' + '<div>' + '<div class="shadow"></div>' + '<div class="pulse"></div>' + '<div class="pin-wrap wow animate-dropy">' + '<div class="pin"></div>' + '</div>' + '</div>' + '')[0];
    this.pinWrap = this.div.getElementsByClassName('pin-wrap');
    this.pin = this.div.getElementsByClassName('pin');
    this.pinShadow = this.div.getElementsByClassName('shadow');
    div.style.position = 'absolute';
    div.style.cursor = 'pointer';
    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
    google.maps.event.addDomListener(div, "click", function (event) {
      google.maps.event.trigger(self, "click", event);
    });
  }

  var point = this.getProjection().fromLatLngToDivPixel(this.position);

  if (point) {
    div.style.left = point.x + 'px';
    div.style.top = point.y + 'px';
  }
};

CustomMarker.prototype.animateDrop = function () {
  dynamics.stop(this.pinWrap);
  dynamics.css(this.pinWrap, {
    'transform': 'scaleY(2) translateY(-' + $('#maphigh').outerHeight() + 'px)',
    'opacity': '1'
  });
  dynamics.animate(this.pinWrap, {
    translateY: 0,
    scaleY: 1.0
  }, {
    type: dynamics.gravity,
    duration: 1800
  });
  dynamics.stop(this.pin);
  dynamics.css(this.pin, {
    'transform': 'none'
  });
  dynamics.animate(this.pin, {
    scaleY: 0.8
  }, {
    type: dynamics.bounce,
    duration: 1800,
    bounciness: 600
  });
  dynamics.stop(this.pinShadow);
  dynamics.css(this.pinShadow, {
    'transform': 'scale(0,0)'
  });
  dynamics.animate(this.pinShadow, {
    scale: 1
  }, {
    type: dynamics.gravity,
    duration: 1800
  });
};

CustomMarker.prototype.animateBounce = function () {
  dynamics.stop(this.pinWrap);
  dynamics.css(this.pinWrap, {
    'transform': 'none'
  });
  dynamics.animate(this.pinWrap, {
    translateY: -30
  }, {
    type: dynamics.forceWithGravity,
    bounciness: 0,
    duration: 500,
    delay: 150
  });
  dynamics.stop(this.pin);
  dynamics.css(this.pin, {
    'transform': 'none'
  });
  dynamics.animate(this.pin, {
    scaleY: 0.8
  }, {
    type: dynamics.bounce,
    duration: 800,
    bounciness: 0
  });
  dynamics.animate(this.pin, {
    scaleY: 0.8
  }, {
    type: dynamics.bounce,
    duration: 800,
    bounciness: 600,
    delay: 650
  });
  dynamics.stop(this.pinShadow);
  dynamics.css(this.pinShadow, {
    'transform': 'none'
  });
  dynamics.animate(this.pinShadow, {
    scale: 0.6
  }, {
    type: dynamics.forceWithGravity,
    bounciness: 0,
    duration: 500,
    delay: 150
  });
};

CustomMarker.prototype.animateWobble = function () {
  dynamics.stop(this.pinWrap);
  dynamics.css(this.pinWrap, {
    'transform': 'none'
  });
  dynamics.animate(this.pinWrap, {
    rotateZ: -45
  }, {
    type: dynamics.bounce,
    duration: 1800
  });
  dynamics.stop(this.pin);
  dynamics.css(this.pin, {
    'transform': 'none'
  });
  dynamics.animate(this.pin, {
    scaleX: 0.8
  }, {
    type: dynamics.bounce,
    duration: 800,
    bounciness: 1800
  });
};

var marker;
window.jQuery(document).ready(function () {
  var _google$maps$Map;

  var contentString = '<div id="mapaddress">' + '<h1>Beverley Beavers Badminton Club</h1>' + '<div id="bodyContent">' + '<p>Beverley High School<br>Norwood, Beverley<br>HU17 9EX</p>' + '</div>' + '<div><a target="_blank" href="https://www.google.com/maps/place/Beverley+Beavers+Badminton+Club/@53.8474553,-0.4312357,17z/data=!3m1!4b1!4m2!3m1!1s0x4878c7697f686de1:0x9876762ef30322e2?hl=en-GB">View on Google Maps</a></div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var pos = new google.maps.LatLng(53.846407, -0.430485);
  var map = new google.maps.Map(document.getElementById('maphigh'), (_google$maps$Map = {
    zoom: 16,
    center: pos,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false
  }, _defineProperty(_google$maps$Map, "disableDefaultUI", true), _defineProperty(_google$maps$Map, "styles", [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
      "saturation": 36
    }, {
      "color": "#ffffff"
    }, {
      "lightness": 40
    }]
  }, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#000000"
    }, {
      "lightness": 16
    }]
  }, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "on"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 17
    }, {
      "weight": 1.2
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 21
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#7B2250"
    }, {
      "lightness": 17
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#7B2250"
    }, {
      "lightness": 29
    }, {
      "weight": 0.2
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": "#7B2250"
    }, {
      "lightness": 18
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
      "color": "#7B2250"
    }, {
      "lightness": 16
    }]
  }, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 19
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
      "lightness": 17
    }]
  }]), _google$maps$Map));
  marker = new CustomMarker({
    position: pos,
    map: map
  });
  google.maps.event.addListener(marker, 'click', function (e) {
    marker.animateWobble();
    infowindow.open(map, marker);
  });
});
/******/ })()
;
//# sourceMappingURL=maps2.js.map