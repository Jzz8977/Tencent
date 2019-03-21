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
  $('.banner-left li:not(.banner-left-firstli)').mouseenter(function () {
    $(this).css({
      background: '#fff',
      color: '#61656e'
    });
  });
  $('.banner-left li').mouseleave(function () {
    $(this).css({
      background: '#ee4545',
      color: '#fff'
    });
  }); // var $ul = $('.banner-middle ul');
  // var $ol = $('.banner-middle ol');
  // var $uli = $('.banner-middle ul li');
  // var $oli = $('.banner-middle ol li');
  // var timerA = null;
  // var index =0;
  // $uli.each(function(){
  // 	$(this).find('p').html($(this).find('img').attr('alt'));
  // })
  // var timer1 =setInterval(autoPlay,1000);
  // 	timerA = setInterval(function(){
  // 		index ++;
  // 		if(index ==$uli.size()){
  // 			index=0;
  // 		}
  // 	},5000);
  // 	Go();
  // 	function Go()	{
  // 		$ul.css({left : -770});
  // 		$oli.eq(index).addClass('red').siblings().removeClass('red');
  // 	}
  // 	$uli.mouseenter(function(){
  // 		clearInterval(timerA);
  // 			$oli.click(function(){
  // 	//		alert($(this).index() +1);
  // 			index = $(this).index() +1;
  // 			Go();
  // 		})
  // 	})
  // 	$uli.mouseleave(function(){
  // 		Go();
  // 	})
});