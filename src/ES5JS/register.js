"use strict";

$(function () {
  var allFlag = false;
  var nameFlag = false;
  var pwdFlag = false;
  var phoneFlag = false;
  var argeeFlag = false;
  $('#userName').click(function () {
    $(this).css("border-color", "#549df8").parent().animate({
      height: 52,
      borderColor: "#549df8"
    });
  });
  $('#userName').blur(function () {
    // console.log(2);
    // console.log($(this).parent());
    var str = $(this).val();
    var par = /\S+/;

    if (!par.test(str)) {
      $(this).css("border-color", "red").parent().animate({
        height: 75
      }, 500);
      $(this).next().css("display", "none");
      return nameFlag = true;
    } else {
      $(this).next().css("display", "block");
    }
  });
  $('#userpwd').click(function () {
    $('.pwderror').css("display", "none");
    $(this).css("border-color", "#549df8").parent().animate({
      height: 120,
      borderColor: "#549df8"
    });
  });
  $('#userpwd').keyup(function () {
    var str = $(this).val();
    var space = /\s+/;
    var length = /\S{8,16}/; // var type = /([0-9]|[a-zA-Z]|[~!@#$%^&*?]){2,}/;

    var type = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[~!@#$%^&*?]+$)^\w{8,16}$/;

    if (space.test(str)) {
      $('.spaceError').find("img").attr("src", "../img/register/info.png");
    } else {
      $('.spaceError').find("img").attr("src", "../img/register/green.png");
    }

    if (length.test(str)) {
      $('.lengthError').find("img").attr("src", "../img/register/green.png");
    } else {
      $('.lengthError').find("img").attr("src", "../img/register/info.png");
    }

    if (type.test(str)) {
      $('.typeError').find("img").attr("src", "../img/register/green.png");
    } else {
      $('.typeError').find("img").attr("src", "../img/register/info.png");
    }
  });
  $('#userpwd').blur(function () {
    // $(this).next().css("display","none");
    $('.spaceError').css("display", "block");
    $('.lengthError').css("display", "block");
    $('.typeError').css("display", "block");
    var flag = true;
    var str = $(this).val();
    var space = /\s+/;
    var length = /\S{8,16}/;
    var type = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[~!@#$%^&*?]+$)^\w{8,16}$/;

    if (space.test(str)) {
      // $('.spaceError').find("img").attr("src","../img/register/info.png");
      // $('.spaceError').css("display","block");
      flag = false;
    } else {// $('.spaceError').css("display","none");
    }

    if (length.test(str)) {// $('.lengthError').css("display","none");
    } else {
      // $('.lengthError').css("display","block");
      flag = false;
    }

    if (type.test(str)) {// $('.typeError').css("display","none");
    } else {
      // $('.typeError').css("display","block");
      flag = false;
    }

    if (flag == true) {
      $(this).next().css("display", "block");
      $('.spaceError').css("display", "none");
      $('.lengthError').css("display", "none");
      $('.typeError').css("display", "none");
      $(this).css("border-color", "#549df8").parent().animate({
        height: 54
      }, 500);
      return pwdFlag = true;
    } else {
      $('.pwderror').css("display", "block").parent().animate({
        height: 75
      }, 100);
    }
  });
  $('#number').click(function () {
    $(this).css("border-color", "#549df8").parent().animate({
      height: 130,
      borderColor: "#549df8"
    });
  });
  $('#number').blur(function () {
    // alert(1);
    var str = $(this).val();
    var parSp = /\S+/;
    var parNum = /^1(3|4|5|7|8)\d{9}$/;

    if (!parSp.test(str)) {
      // alert(2);
      $(this).parent().animate({
        height: 70,
        borderColor: "#ccc"
      });
    }

    if (!parNum.test(str)) {
      // $(this).siblings('.register-code').css("display","none");
      $(this).next().css("display", "none"); // alert(1);
      // $("numError").css("display","block");

      $(this).next().next().css("display", "block");
      $(this).next().next().next().css("display", "none"); // $(this).parent().animate({height:73,borderColor:"#ccc"},0);
    } else {
      $(this).next().css("display", "block");
      $(this).next().next().next().css("display", "block");
      $(this).next().next().css("display", "none");
      return phoneFlag = true; // $(this).parent().animate({height:73,borderColor:"#ccc"},0);
    }
  });
  $('.argeeNormal').click(function () {
    $(this).css("display", "none").next().css("display", "block");
    return argeeFlag = true;
  });
  $('.argeeCheck').click(function () {
    $(this).css("display", "none").prev().css("display", "block");
  });
  console.log($.cookie('user'));
  $('.register-btn').click(function () {
    if (nameFlag = true && pwdFlag == true && phoneFlag == true && argeeFlag == true) {
      allFlag = true;
    } else {
      allFlag = false;
    }

    console.log(nameFlag);
    console.log(pwdFlag);
    console.log(phoneFlag);
    console.log(argeeFlag);

    if (allFlag) {
      $('<div>').prependTo($(document.body)).addClass('mark');
      $('<div>').prependTo($('.mark')).addClass('float');
      var str = "\n                <a class=\"close\" >x</a>\n                <h4>\u8BF7\u53D1\u9001\u77ED\u4FE1\u5E2E\u52A9\u6211\u4EEC\u786E\u8BA4\u4F60\u7684\u8EAB\u4EFD</h4>\n                <h5>\u7F16\u8F91\u77ED\u4FE1\uFF1A 1</h5>\n                <h5>\u53D1\u9001\u81F3\uFF1A 1069 0700 511</h5>\n                <span>\u9664\u8FD0\u8425\u5546\u6536\u53D6\u7684\u6807\u51C6\u77ED\u4FE1\u8D39\u7528\u5916\uFF0C\u65E0\u989D\u5916\u8D39\u7528\u3002</span>\n                <input type=\"button\" id=\"sendmsg\" value=\"\u6211\u5DF2\u53D1\u9001\u77ED\u4FE1\uFF0C\u4E0B\u4E00\u6B65\">\n               \n            ";
      $('.float').html(str);
      $('.float').click(function () {
        return false;
      });
      $('.close').click(function () {
        $(this).parents('.mark').remove();
      });
      console.log($.cookie('user'));
      $('#sendmsg').click(function () {
        // alert(1);
        // alert(1);
        var name = $('#userName').val(); //                 console.log($name);
        //                 

        var pwd = $('#userpwd').val(); //                 console.log($pwd);
        //                 var str = `[{}]`
        //                 $.cookie('user',`{"name":"${$name}","pwd":"${$pwd}"}`,{path:'/',expires:7});
        //                 location.href="../../index.html";
        //               

        var phone = $('#number').val();
        var objStr = "[{ \"".concat(phone, "\" :{  \"name\" : \"").concat(name, "\",\"pwd\" : \"").concat(pwd, "\"}}]"); // var cartObj = { id :{  "src" : src,"alt" : alt ,"tit" : tit ,"price" : price."num" : 1}}`;

        var cartStr = $.cookie('user');
        console.log(cartStr);

        if (!cartStr) {
          $.cookie('user', objStr, {
            expires: 7,
            path: '/'
          });
        } else {
          var obj = JSON.parse(cartStr);
          console.log(obj);

          for (var i = 0; i < obj.length; i++) {
            // console.log(i);
            var data = obj[i];
            console.log(i, data);

            if (phone in data) {
              alert('次电话已经注册了！');
            } else {
              data[phone] = {
                name: name,
                pwd: pwd
              };
            }
          }

          var Str = JSON.stringify(obj);
          $.cookie('user', Str, {
            expires: 7,
            path: '/'
          });
          console.log($.cookie('user'));
          location.href = "../../index.html";
        }
      });
    }
  });
});