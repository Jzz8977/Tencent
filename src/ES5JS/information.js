"use strict";

window.onload = function () {
  load();

  function load() {
    var cartStr = $.cookie('cart');
    var cartObj = JSON.parse(cartStr);
    var total = 0;

    for (var i = 0; i < cartObj.length; i++) {
      var data = cartObj[i]; // for()

      for (var id in data) {
        total += data[id].num;
      }
    }

    console.log(total);
    $('.lol-cart a').html("<s class=\"lol-cart-ic\"></s>\u8D2D\u7269\u8F66(".concat(total, ")"));
  }
};

$(function () {
  var bools = true;
  $('.enlarge').click(function () {
    $('<div>').prependTo($(document.body)).addClass('mark2');
    $('<div>').prependTo($('.mark2')).addClass('float2');
    var str = '<img  src= "../img/list/mian-right-05-la.jpg">';
    $('.float2').html(str);
    $(document).click(function () {
      $(".float2").parents('.mark2').remove();
    });
    return false;
  });
  $('.collection').click(function () {
    if (bools) {
      $(this).find('.collectionL').css({
        "backgroundPosition": "-180px -525px"
      });
      bools = false;
    } else {
      $(this).find('.collectionL').css({
        "backgroundPosition": "0 -525px"
      });
      bools = true;
    }
  });
  $('.red').click(function () {
    $('<div>').prependTo($(document.body)).addClass('mark1');
    $('<div>').prependTo($('.mark1')).addClass('float1');
    var str = "\n            <h3>\u6E29\u99A8\u63D0\u793A</h3>\n            <div class=\"tip\">\n                <p>\u9053\u5177\u5DF2\u6210\u529F\u52A0\u5165\u8D2D\u7269\u8F66</p>\n                <a href=\"javascript:;\" class=\"continue\">\u7EE7\u7EED\u8D2D\u7269</a>\n                <a href=\"cart.html\">\u53BB\u8D2D\u7269\u8F66\u7ED3\u7B97</a>\n            </div>\n        ";
    $('.float1').html(str);
    $('.continue').click(function () {
      // alert(1);
      $(this).parents('.mark1').remove();
    });
  });
  $('.appcode').mouseenter(function () {
    $(this).css({
      "backgroundPosition": "-137px -340px"
    });
    $(this).find('div').css({
      "display": "block"
    });
  });
  $('.appcode').mouseleave(function () {
    $(this).css({
      "backgroundPosition": "0 -340px"
    });
    $(this).find('div').css({
      "display": "none"
    });
  });
  $('.lol-cart').click(function () {
    location.href = "cart.html";
  });
});