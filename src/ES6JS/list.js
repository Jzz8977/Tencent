window.onload = function(){
    load();
    function load(){
        var cartStr = $.cookie('cart')||'{}';
        var cartObj = JSON.parse(cartStr);
        var total = 0;
        for(var i = 0 ; i < cartObj.length;i++){
            var data = cartObj[i];
            // for()
            for(var id in data){
                total += data[id].num;
            }
            
        }
        console.log(total);
        $('.lol-cart a').html(`<s class="lol-cart-ic"></s>购物车(${total})`);
    }
}
$(function(){
   
    $.getJSON('../json/cart.json',function(obj){
        
        for(var i = 0 ; i < obj.length;i++ ){
            var pubObj = obj[i].pub;
//          console.log(pubObj);
            var str = `
            <li class="left" data-good-id="pub${i}">
                <img src="${pubObj.src}" alt="${pubObj.alt}">
                <h5>${pubObj.tit}</h5>
                <p>Q币价：<span>${pubObj.QP}</span> </p>
                <p>微信价：<span>${pubObj.WP}</span></p>
                <a href="javascript:;" class="buy">立即购买</a>
            </li>
           `;
           $("#getCart").append(str);
        }
        $('#getCart li').mouseenter(function(){
            $(this).css({"background":"url(../img/indexico.png) no-repeat -237px -386px"});
        })
        $('#getCart li').mouseleave(function(){
            $(this).css({"background":"url(../img/indexico.png) no-repeat -237px -6px"});
        })
        // $('#getCart li .buy').on({
        //     "click" : function(){
        //         alert(1);
        //     }
        // })
        $('#getCart li').on('click',function(){
        	// alert(1);
        	location.href="information.html";
        })
        
        $('#getCart li .buy').on('click',function(){
			
            // alert(1); 
            var pub = $(this).parents('li').attr('data-good-id');
            
        	var src = $(this).siblings('img').attr('src');
        	var alt = $(this).siblings('img').attr('alt');
        	var tit = $(this).siblings('h5').html();
        	var price = parseFloat($(this).siblings('p').eq(0).find('span').html());
        	$('<div>').prependTo($(document.body)).addClass('mark1');
            $('<div>').prependTo($('.mark1')).addClass('float1');
            var str  = `
                <h3>加入购物车 <span class="close">X</span></h3>
                <div>
                    <div>
                        <img src="${src}" alt="${alt}">
                        <h5>${tit}</h5>
                    </div>
                    <div>
                        <p>价格：<span>${price}</span> <i>Q币</i> </p>
                        <a href="javascript:;" class="toCart">确定</a>
                    </div>
                </div>
            `;
            $('.float1').html(str);
            $('.close').click(function(){
                $(this).parents('.mark1').remove(); 
            })
            $('.toCart').click(function(){
                console.log(pub,src);
                var objStr = `[{ "${pub}" :{  "src" : "${src}","alt" : "${alt}","tit" : "${tit}","price" : "${price}","num" : 1}}]`;
				// var cartObj = { id :{  "src" : src,"alt" : alt ,"tit" : tit ,"price" : price."num" : 1}}`;
                var cartStr = $.cookie('cart');
				console.log(cartStr);

				if(!cartStr){
					$.cookie('cart',objStr,{expires:7,path:'/'});
				}else{
					var obj = JSON.parse(cartStr);
					for(var i = 0 ; i < obj.length;i++){
						let data = obj[i];
						console.log(i,data);
						if(pub in data){
							data[pub].num++;
						}else{
							data[pub] = {
								src,
								alt,
								tit,
								price,
								num:1
							}
						}
						
					}
					var Str = JSON.stringify(obj);
					$.cookie('cart',Str,{expires:7,path:'/'});
                }
                var cartString = $.cookie('cart');
                var cartObject = JSON.parse(cartString);
                var total = 0;
                for(var i = 0 ; i < cartObject.length;i++){
                    let data = cartObject[i];
                    // for()
                    for(var id in data){
                        total += data[id].num;
                    }

                }
                console.log(total);
                $('.lol-cart a').html(`<s class="lol-cart-ic"></s>购物车(${total})`);
				$(this).parents('.mark1').remove();
				return false;
            }) 
			return false;
        })
    })

})
