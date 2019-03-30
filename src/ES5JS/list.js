"use strict";

window.onload = function () {
  load();

  function load() {
    var cartStr = $.cookie('cart') || '{}';
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
  $.getJSON('../json/cart.json', function (obj) {
    for (var i = 0; i < obj.length; i++) {
      var pubObj = obj[i].pub; //          console.log(pubObj);

      var str = "\n            <li class=\"left\" data-good-id=\"pub".concat(i, "\">\n                <img src=\"").concat(pubObj.src, "\" alt=\"").concat(pubObj.alt, "\">\n                <h5>").concat(pubObj.tit, "</h5>\n                <p>Q\u5E01\u4EF7\uFF1A<span>").concat(pubObj.QP, "</span> </p>\n                <p>\u5FAE\u4FE1\u4EF7\uFF1A<span>").concat(pubObj.WP, "</span></p>\n                <a href=\"javascript:;\" class=\"buy\">\u7ACB\u5373\u8D2D\u4E70</a>\n            </li>\n           ");
      $("#getCart").append(str);
    }

    $('#getCart li').mouseenter(function () {
      $(this).css({
        "background": "url(../img/indexico.png) no-repeat -237px -386px"
      });
    });
    $('#getCart li').mouseleave(function () {
      $(this).css({
        "background": "url(../img/indexico.png) no-repeat -237px -6px"
      });
    }); // $('#getCart li .buy').on({
    //     "click" : function(){
    //         alert(1);
    //     }
    // })

    $('#getCart li').on('click', function () {
      // alert(1);
      location.href = "information.html";
    });
    $('#getCart li .buy').on('click', function () {
      // alert(1); 
      var pub = $(this).parents('li').attr('data-good-id');
      var src = $(this).siblings('img').attr('src');
      var alt = $(this).siblings('img').attr('alt');
      var tit = $(this).siblings('h5').html();
      var price = parseFloat($(this).siblings('p').eq(0).find('span').html());
      $('<div>').prependTo($(document.body)).addClass('mark1');
      $('<div>').prependTo($('.mark1')).addClass('float1');
      var str = "\n                <h3>\u52A0\u5165\u8D2D\u7269\u8F66 <span class=\"close\">X</span></h3>\n                <div>\n                    <div>\n                        <img src=\"".concat(src, "\" alt=\"").concat(alt, "\">\n                        <h5>").concat(tit, "</h5>\n                    </div>\n                    <div>\n                        <p>\u4EF7\u683C\uFF1A<span>").concat(price, "</span> <i>Q\u5E01</i> </p>\n                        <a href=\"javascript:;\" class=\"toCart\">\u786E\u5B9A</a>\n                    </div>\n                </div>\n            ");
      $('.float1').html(str);
      $('.close').click(function () {
        $(this).parents('.mark1').remove();
      });
      $('.toCart').click(function () {
        console.log(pub, src);
        var objStr = "[{ \"".concat(pub, "\" :{  \"src\" : \"").concat(src, "\",\"alt\" : \"").concat(alt, "\",\"tit\" : \"").concat(tit, "\",\"price\" : \"").concat(price, "\",\"num\" : 1}}]"); // var cartObj = { id :{  "src" : src,"alt" : alt ,"tit" : tit ,"price" : price."num" : 1}}`;

        var cartStr = $.cookie('cart');
        console.log(cartStr);

        if (!cartStr) {
          $.cookie('cart', objStr, {
            expires: 7,
            path: '/'
          });
        } else {
          var obj = JSON.parse(cartStr);

          for (var i = 0; i < obj.length; i++) {
            var data = obj[i];
            console.log(i, data);

            if (pub in data) {
              data[pub].num++;
            } else {
              data[pub] = {
                src: src,
                alt: alt,
                tit: tit,
                price: price,
                num: 1
              };
            }
          }

          var Str = JSON.stringify(obj);
          $.cookie('cart', Str, {
            expires: 7,
            path: '/'
          });
        }

        var cartString = $.cookie('cart');
        var cartObject = JSON.parse(cartString);
        var total = 0;

        for (var i = 0; i < cartObject.length; i++) {
          var _data = cartObject[i]; // for()

          for (var id in _data) {
            total += _data[id].num;
          }
        }

        console.log(total);
        $('.lol-cart a').html("<s class=\"lol-cart-ic\"></s>\u8D2D\u7269\u8F66(".concat(total, ")"));
        $(this).parents('.mark1').remove();
        return false;
      });
      return false;
    });
  });
});