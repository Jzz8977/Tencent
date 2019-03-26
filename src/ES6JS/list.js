$(function(){
    // alert(1);
    $.getJSON('../json/cart.json',function(obj){
        
        for(var i = 0 ; i < obj.length;i++ ){
            var pubObj = obj[i].pub;
//          console.log(pubObj);
            var str = `
            <li class="left">
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
            // alert(1);
            // console.log(1);
            $(this).css({"background":"url(../img/indexico.png) no-repeat -237px -6px"});
        })
        // $('#getCart li .buy').on({
        //     "click" : function(){
        //         alert(1);
        //     }
        // })
        $('#getCart li .buy').on('click',function(){
            // alert(1);
        	var src = $(this).siblings('img').attr('src');
        	var alt = $(this).siblings('img').attr('alt');
        	var tit = $(this).siblings('h5').html();
        	var price = parseFloat($(this).siblings('p').eq(0).find('span').html());
        	console.log(src,alt,tit,price);
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
                var cartObj = {
                    "src" : src,
                    "alt" : alt,
                    "tit" : tit,
                    "price" : price,
                    "num" : 1
                };
                var cartStr = $.cookie('cart');
                if(cartStr){
                    $.cookie('cart',JSON.stringify(cartObj));
                }else{
                    var obj = JSON.parse(cartStr);
                    obj.num++;
                    $.cookie('cart',JSON.stringify(obj));
                }
            })
        })
    })

})
$(function(){
        // var cartStr = $.cookie('cart');
        // var cartObj = JSON.parse(cartStr);
        // console.log(cartObj);
        // var to = 0;
        // for(var i in cartObj){
        //     to += cartObj[i].num;
        // }
        // $('#buy').val("购物车("+to+")");
    

})