"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(function () {
  var cartStr = $.cookie('cart') || "{}";
  var cartObj = JSON.parse(cartStr); // console.log(cartObj);
  // for(var i = 0 ; i < cartObj.length; i++){

  var dataa = cartObj[0]; // console.log(dataa);

  for (var key in dataa) {
    // console.log(dataa[key]);
    var data = dataa[key];
    var str = "\n                <tr class=\"".concat(key, "\">\n                    <td><input type=\"checkbox\" class=\"buy\"></td>\n                    <td class=\"name\"><img src=\"").concat(data.src, "\" class=\"left\" ><span class=\"left\" >").concat(data.tit, "</span></td>\n                    <td>").concat(data.alt, "</td>\n                    <td>").concat(data.price, " Q\u5E01</td>\n                    <td>\u6C38\u4E45</td>\n                    <td>\n                        <input type=\"button\" value=\"-\" class=\"reduce\">\n                        <input type=\"text\" value = \"").concat(data.num, "\" class=\"txt\">\n                        <input type=\"button\" value=\"+\" class=\"add\">\n                    </td>\n                    <td>\u65E0\u4F18\u60E0</td>\n                    <td>").concat((data.price * data.num).toFixed(2), "Q\u5E01</td>\n                    <td><a class=\"delete\">\u5220\u9664</a></td>\n                </tr>\n            ");
    $('.player-info2-main .td').append(str);
  } // }


  $('.reduce').on("click", function () {
    var pub = $(this).parent().parent().attr('class'); // console.log(pub);
    // alert(1);

    var cartStr = $.cookie('cart');
    var cartObj = JSON.parse(cartStr); // console.log(cartObj);
    // for(var i = 0 ; i < cartObj.length; i++){

    var data = cartObj[0]; // console.log(data);

    if (data[pub].num > 1) {
      var num = data[pub].num--; // console.log(typeof num,$(this).next()[0]);

      $(this).next().val(num - 1);
      $(this).parent().next().next().html((data[pub].num * data[pub].price).toFixed(2) + "Q币");

      var _str = JSON.stringify(cartObj);

      $.cookie('cart', _str, {
        expires: 7,
        path: '/'
      });
    }
  });
  $('.add').on("click", function () {
    var pub = $(this).parent().parent().attr('class'); // console.log(pub);
    // alert(1);

    var cartStr = $.cookie('cart');
    var cartObj = JSON.parse(cartStr);
    console.log(cartObj);
    console.log(cartStr);
    var data = cartObj[0];
    var num = data[pub].num++;
    $(this).prev().val(num + 1);
    $(this).parent().next().next().html((data[pub].num * data[pub].price).toFixed(2) + "Q币");
    var str = JSON.stringify(cartObj);
    $.cookie('cart', str, {
      expires: 7,
      path: '/'
    });
  });
  $('.delete').on("click", function () {
    var pub = $(this).parent().parent().attr('class');
    $(this).parent().parent().remove();
    console.log(pub); // alert(1);

    var cartStr = $.cookie('cart');
    var cartObj = JSON.parse(cartStr);
    console.log(cartObj);
    var data = cartObj[0];
    console.log(data);

    for (var i in data) {
      if (pub == i) {
        alert(1);
        console.log(data[i]);
        delete data[pub];

        var _str2 = JSON.stringify(cartObj);

        $.cookie('cart', _str2, {
          expires: 7,
          path: '/'
        });
      }
    }
  });
  $('.txt').blur(function () {
    var num = parseInt($(this).val());
    var pub = $(this).parent().parent().attr('class');
    var cartStr = $.cookie('cart');
    var cartObj = JSON.parse(cartStr); // console.log(cartObj);
    // console.log(cartStr);

    var data = cartObj[0];
    data[pub].num = num; // $(this).prev().val(num+1);

    $(this).parent().next().next().html((data[pub].num * data[pub].price).toFixed(2) + "Q币");
    var str = JSON.stringify(cartObj);
    $.cookie('cart', str, {
      expires: 7,
      path: '/'
    });
  });
  $('.buy').each(function () {
    $(this).click(function () {
      var num = parseInt($(this).val());
      var pub = $(this).parent().parent().attr('class');
      var cartStr = $.cookie('cart');
      var cartObj = JSON.parse(cartStr); // console.log(cartObj);
      // console.log(cartStr);

      var data = cartObj[0];

      if ($(this)[0].checked) {
        console.log(_typeof(parseFloat($('.money').html())), _typeof((data[pub].num * data[pub].price).toFixed(2)));
        $('.money').html(parseFloat($('.money').html()) + parseFloat((data[pub].num * data[pub].price).toFixed(2)));
        $('.btn').css({
          'background': "red"
        });
      } else {
        $('.money').html(parseFloat($('.money').html()) - parseFloat((data[pub].num * data[pub].price).toFixed(2)));

        if (parseFloat($('.money').html()) == 0) {
          $('.btn').css({
            'background': "#666666"
          });
        }
      }
    });
  });
  $('.logo').click(function () {
    location.href = "../../index.html";
  });
});

window.onload = function () {
  var str = $.cookie('cart'); // var obj = JSON.parse(str);
  // console.log(str);
  // console.log(obj);

  if (str) {
    $('.no').css("display", "none");
  } else {
    $('.no').css("display", "block");
  }
};