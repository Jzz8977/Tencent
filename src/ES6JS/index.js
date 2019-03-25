
$(function(){
	if($.cookie("login")){
		$('.register-login').empty().html(`欢迎您,<a href="javascript:;" class="out">退出</a><a href="javascript:;" class="">${$.cookie('login')  }</a>`)
		$('.out').click(function(){
			$('.register-login').html(`您还未登录，请<a href="javascript:;" class="login">登录</a>`);
		})
	}
   $('.game-index').mouseenter(function(){
       $('.game-table-hidden').css({display:'block'});
   })
   $('.game-index,.game-table-hidden').mouseleave(function(){
       $('.game-table-hidden').css('display','none');
       return false;
   })

 	$('.banner-left>li:not(.banner-left-firstli)').mouseenter(function(){
        $(this).css({background:'#fff',color:'#f55656'}).children('div').css('display','block');
    });
    $('.banner-left>li').mouseleave(function(){
        $(this).css({background:'#f55656',color:'#fff'}).children('div').css('display','none');
	});
	
	$('#game .game-section-middle li').not(".game-section-middle-minh").mouseenter(function(){
		$(this).animate({paddingLeft:25},100);
	})
	$('#game .game-section-middle li').not(".game-section-middle-minh").mouseleave(function(){
		$(this).finish();
		$(this).animate({paddingLeft:15},100);
		
	})
	//登录
	$('.login').click(function(){
		$('<div>').prependTo($(document.body)).addClass('mark');
		$('<div>').prependTo($('.mark')).addClass('float');
		var str  = `
			<a class="close" >x</a>
			<h5>账号密码登录</h5>
			<span>推荐使用<a class="quick">快速安全登录</a>,防止盗号</span>
			<p><input type="text" id="userName" placeholder="支持QQ号/邮箱/手机号"></p>
			<p><input type="password" id="userPwd" placeholder="密码"></p>
			<p><input type="button" id="sbtn" value="登录"></p>
			<div class="res"><b>忘了密码？</b><i>|</i><b>注册新账号</b><i>|</i><b>意见反馈</b></div>
		`;
		
		$('.float').html(str);
		$('.float').click(function(){
			return false;
		})
		$('.close').click(function(){
			$(this).parents('.mark').remove();
		})
		$('.mark').click(function(){
			$(this).remove();
			
		})
		$('#sbtn').click(function(){
			// alert(1);
			var $name = $(this).parent().prev().prev().children().val();
			
			var $pwd = $(this).parent().prev().children().val();
			console.log($name, $pwd);	
			//获取cookie
			var $cookieStr = $.cookie('user');
			var $cookieObj = JSON.parse($cookieStr);
			console.log($cookieStr);	
			console.log($cookieObj.pwd);	
			var userName = 	$cookieObj.name;
			var userPwd = $cookieObj.pwd;
			//待比较
			if($name ==userName  && $pwd==userPwd){
				console.log("登录成功");
				$.cookie('login',`${$name}`,{path:'/',expires:7});
				$(this).parents('.mark').remove();
			}
			
		})
		$('.res  b').eq(1).click(function(){
			// alert(1);
			// location.href="dist\html\register.html";
			location.href="dist/html/register.html"
		})
		
	})

	$('.toHeader').mouseenter(function(){
		$(this).css({'background':'#f55656',"cursor":"pointer"});
		$('.toHeader s').css("background-position","-162px -159px");
	})
	$('.toHeader').mouseleave(function(){
		$(this).css('background','#fff');
		$('.toHeader s').css("background-position","-121px -159px");
	})
	$('.toHeader').click(function(){
		
		$('html , body').animate({scrollTop: 0},'slow');
		
	})
	$('.feedback').mouseenter(function(){
		$(this).css({'background':'#f55656',"cursor":"pointer"});
		
	})
	$('.feedback').mouseleave(function(){
		$(this).css('background','#fff');
	})
})
$(function(){
	var $ul = $('.banner-middle ul');
    var $ol = $('.banner-middle ol');
	var $ulli = $('.banner-middle ul li');
	var $olli = $('.banner-middle ol li');
	var timerA = null;
	var index = 4;
	
	$ulli.each(function(){
		$(this).find('p').html($(this).find('img').attr('alt'));
	});
	timerA=setInterval(function(){
		
		// console.log(index+"a");
		// console.log(index);
		$ulli.eq(index --).stop().animate({left:-770},500,function(){
			$(this).prependTo($ul);
			// $ul.animate({"left": "60%"},500);
		
			$olli.eq(4-index).addClass('red').siblings().removeClass();
			$(this).animate({left:0},200,function(){
				// $ul.animate({"left": "0%"},500);
			})
		})
		if(index ==-1){
			index =4;
		}
		
		
	}, 2000);
	$ul.mouseenter(function(){
		clearInterval(timerA);
		timerA = null;
	})
	$ul.mouseover(function(){
		timerA = setInterval(function(){
			$ulli.eq(index --).stop().animate({left:-770},500,function(){
				$(this).prependTo($ul);
				$olli.eq(4-index).addClass('red').siblings().removeClass();
				$(this).animate({left:0},200,function(){})
			})
			if(index ==-1){
				index =4;
			}
			
			
		}, 2000);
	})
})

$(function(){
	var nowdate = new Date();
	
	var fuldate = new Date(nowdate.getFullYear(),nowdate.getMonth(),nowdate.getDate()+3);
	
	setInterval(function(){
		var nowDate = new Date();
		var cdate = fuldate - nowDate;
		var day = parseInt(cdate/86400000);
		var hours = parseInt(cdate%86400000/3600000);
		var minutes = parseInt(cdate%86400000%3600000/60000);
		var seconds = parseInt(cdate%86400000%3600000%60000/1000);
		$('.time .day').html(day).siblings('.hour').html(hours).siblings('.minute').html(minutes).siblings('.second').html(seconds);
	})
})


$(function(){
	$(".shop").click(function(){
		location.href = "dist/html/shop.html";
	})
})