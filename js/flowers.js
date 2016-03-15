/**
* javascript document
*
*
*/

/**
 * @namespace CBC
 */

var CBC = CBC || {};

/**
 * @namespace CBC.cp
 */

(function(cp) {

/**
 * @class Main
 * @constructor
 * @namespace CBC.cp
 */

cp.Main = function(node) {
  this.$head = null;
  this.$head = null;
  this.$title = null;
  this.$catch = null;
  this.$particle = null;
  this.$petals = null;
  this.petal = null;
  this.init(node);
  this.wind = 600;
  this.fall = 600;

  this.checkTimer = null;
  this.timer = null;
  this.active = false;
};

cp.Main.prototype.getRandomArbitary = function(min, max) {
  // min から max までの乱数を返す関数
  return Math.random() * (max - min) + min;
};

cp.Main.prototype.getRandomInt = function(min, max) {
  // min から max までの乱整数を返す関数
  // Math.round() を用いると、非一様分布になります!
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

cp.Main.prototype.init = function(node) {
  var _this = this;
  this.$head = $('#cp_head');
  this.$title = $('#cp_title');
  this.$catch = $('#cp_catch');
  this.$particle = $('#cp_particle');
  this.$flowers = $('#cp_particle span');
  this.$petals = $('#cp_petal');
  this.petal = [
    '<span><img src="./img/petal.png" alt=""></span>',
    '<span><img src="./img/petal2.png" alt=""></span>',
    '<span><img src="./img/petal3.png" alt=""></span>'
  ];

  $(window).scroll(function() {
    $.proxy(_this.onScroll(), _this);
  }).trigger('scroll');

  this.start();
};

cp.Main.prototype.start = function() {
  var tl = new TimelineLite();
  tl
    .set(this.$head, {scale: 1.5})
    .set(this.$title, {scale: 1.5})
//    .set(this.$catch, {scale: 0.5})
//    .set(this.$particle, {scale: 0.5})
    .to(this.$head, 0.8, { opacity: 1, scale: 1, delay: 3, ease: Cubic.easeOut})
    .to(this.$title, 0.8, { opacity: 1, scale: 1, delay: -0.3, ease: Cubic.easeOut})
//    .staggerTo(textFields, 1, {top:"+=150", ease:CubicIn.ease}, 0.2);
    .staggerTo(this.$flowers, 0.5, { opacity: 1, ease: Back.easeOut}, 0.03)
    .to(this.$catch, 1.5, { opacity: 1, scale: 1, delay: -0.3, ease: Cubic.easeOut})
};

cp.Main.prototype.onScroll = function() {
  var _this = this;
  clearTimeout(this.checkTimer);
  this.checkTimer = setTimeout(function() {
    _this.check();
  }, 100); 
};

cp.Main.prototype.check = function() {
  var st = $(window).scrollTop();
  if ( this.fall < st ) {
    if (this.active) {
      clearInterval(this.timer);
      this.active = false;
    }
  } else {
    if (!this.active) {
      this.active = true;
      this.flowers();
    }
  }
};

cp.Main.prototype.flowers = function() {
  var _this = this;
  clearInterval(this.timer);
  this.timer = setInterval(function() {
//    console.log('setInterval');
    var idx = _this.getRandomInt(0, 2);
    var leftRight = _this.getRandomInt(0, 1);
    var $petal = $(_this.petal[idx] ).addClass( 'pe' + _this.getRandomInt(1, 5) ).clone();
    var petalSize = _this.getRandomArbitary(0.8, 1);
    $petal.css({
      left : leftRight ? _this.getRandomInt(-210, 250) : _this.getRandomInt(730, 900),
      transform : 'scale(' + petalSize + ') rotate(' + _this.getRandomInt(0, 360) + 'deg)'
    }).appendTo(_this.$petals);
    TweenMax.to(
      $petal,
      (_this.getRandomInt(10, 13)),
      {
        top: '+=' + _this.fall + 'px',
        left: '+=' + _this.getRandomInt((-1 * _this.wind), _this.wind) + 'px',
        ease: Power1.easeOut
      }
    );
    setTimeout(function() {
      $petal.fadeOut(1000, function() {
        $petal.remove();
      });
    }, _this.getRandomInt(6000, 9000));
  }, 300);
};

// end CBC

})(CBC.cp = CBC.cp || {});


/**
 * document.ready
 */

$(function() {
  CBC.cp.main = new CBC.cp.Main();
});


