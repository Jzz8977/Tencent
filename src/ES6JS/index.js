
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
		console.log($.cookie('user'));
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
			
			var userName;
			var userPwd;
			//获取cookie
			var $cookieStr = $.cookie('user');
			var cartObj = JSON.parse($cookieStr);
			// console.log(cartObj);
			// console.log(typeof cartObj);
			var dataa = cartObj[0];
			// console.log(typeof dataa);
			for(var i  in dataa){
				// console.log(cartObj);
				var data = dataa[i];
				console.log(data);
				userName = data.name;
				userPwd = data.pwd;

			}
			
			// console.log(userName, userPwd);	
			//待比较
			if($name === userName  && $pwd === userPwd){
				console.log("登录成功");
				$.cookie('login',`${$name}`,{path:'/',expires:7});
				$(this).parents('.mark').remove();
				$('.register-login').empty().html(`欢迎您,<a href="javascript:;" class="out">退出</a><a href="javascript:;" class="">${$.cookie('login')  }</a>`)
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
//轮播图
$(function(){
	var $ul = $('.banner-middle ul');
    var $ol = $('.banner-middle ol');
	var $ulli = $('.banner-middle ul li');
	
	var $olli = $('.banner-middle ol li');
	var timerA = null;
	var index = 0;
	var wid = $ulli.eq(0).width();
	$ul.append($ulli.eq(0).clone());
	// console.log( $ul.index());
	// console.log(wid * $ulli.size());
	$ul.css({"width":wid*($ulli.size()+1)});
	
	$ulli.each(function(){
		$(this).find('p').html($(this).find('img').attr('alt'));
	});
	
	$ul.click(function(){
		console.log($ul.index());
	})
	timerA = setInterval(auto,2000);
	function auto(){
		// console.log($ulli.index());
		$olli.eq(index).addClass('red').siblings().removeClass();
		$ul.animate({left:wid* -index},500,function(){
			if(index==6){
			index = 1;
			$olli.eq(0).addClass('red').siblings().removeClass();
			$ul.finish();
			$ul.css({left:0});
			}
		});
		index++;
	}
	$olli.click(function(){
		
		console.log($(this).index());
		index=$(this).index();
		console.log($ulli.index(index),index);
		$ul.animate({left: -index*wid});
		$(this).addClass('red').siblings().removeClass();
	})
	$('#bot4').mouseenter(function(){
		clearInterval(timerA);
	})
	$('#bot4').mouseleave(function(){
		timerA = setInterval(auto,2000);
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


//shop
$(function(){
	//    $('#shop-top').load('header.html');
	//    $('#shop-top').load('header.html');
	   $("#shop-bottom").load('footer.html');
	   
	   //列表页
	   $('.navbox-firstli').mouseenter(function(){
		   $(this).children('.navbox-firstli-ul').css("display","block");
	   })
	   $('.navbox-firstli').mouseleave(function(){
		$(this).children('.navbox-firstli-ul').css("display","none");
	})
	   $('.navbox-firstli-ul>li:not(.navbox-firstli-ul-firstli)').mouseenter(function(){
		$(this).css({background:'#fff',color:'#f55656'}).children('div').css('display','block');
	   })
	   $('.navbox-firstli-ul>li').mouseleave(function(){
        $(this).css({background:'#f55656',color:'#fff'}).children('div').css('display','none');
	});
})
	