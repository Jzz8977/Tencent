"use strict";

$(function () {
  $('.game-index').mouseenter(function () {
    $('.game-table-hidden').css({
      display: 'block'
    });
  });
  $('.game-index,.game-table-hidden').mouseleave(function () {
    $('.game-table-hidden').css('display', 'none');
    return false;
  });
  $('.banner-left>li:not(.banner-left-firstli)').mouseenter(function () {
    $(this).css({
      background: '#fff',
      color: '#61656e'
    }).children('div').css('display', 'block');
  });
  $('.banner-left>li').mouseleave(function () {
    $(this).css({
      background: '#ee4545',
      color: '#fff'
    }).children('div').css('display', 'none');
  });
  $('#game .game-section-middle li').not(".game-section-middle-minh").mouseenter(function () {
    $(this).animate({
      paddingLeft: 25
    }, 100);
  });
  $('#game .game-section-middle li').not(".game-section-middle-minh").mouseleave(function () {
    $(this).finish();
    $(this).animate({
      paddingLeft: 15
    }, 100);
  });
});
$(function () {
  var $ul = $('.banner-middle ul');
  var $ol = $('.banner-middle ol');
  var $ulli = $('.banner-middle ul li');
  var $olli = $('.banner-middle ol li');
  var timerA = null;
  var index = 4;
  $ulli.each(function () {
    $(this).find('p').html($(this).find('img').attr('alt'));
  });
  setInterval(function () {
    console.log(index + "a"); // console.log(index);

    $ulli.eq(index--).stop().animate({
      left: -770
    }, 500, function () {
      $(this).prependTo($ul);
      $(this).animate({
        left: 0
      }, 200, function () {});
    });

    if (index == -1) {
      index = 4;
    } // $ul.animate({"left": "60%"},500);
    // $ul.animate({"left": "50%"},500);

  }, 2000);
});