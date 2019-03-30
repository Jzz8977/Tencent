window.onload = function(){
    load();
    function load(){
        var cartStr = $.cookie('cart');
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
    var bools = true;
    $('.enlarge').click(function(){
        $('<div>').prependTo($(document.body)).addClass('mark2');
        $('<div>').prependTo($('.mark2')).addClass('float2');
        var str = '<img  src= "../img/list/mian-right-05-la.jpg">';
        $('.float2').html(str);
        $(document).click(function(){
            $(".float2").parents('.mark2').remove();
        })
        return false;
    })
    $('.collection').click(function(){
        
        if(bools){
            $(this).find('.collectionL').css({"backgroundPosition":"-180px -525px"});
            bools =false;
        }else{
            $(this).find('.collectionL').css({"backgroundPosition":"0 -525px"});
            bools =true;
        }
        
    })
    $('.red').click(function(){
         $('<div>').prependTo($(document.body)).addClass('mark1');
        $('<div>').prependTo($('.mark1')).addClass('float1');
        var str = `
            <h3>温馨提示</h3>
            <div class="tip">
                <p>道具已成功加入购物车</p>
                <a href="javascript:;" class="continue">继续购物</a>
                <a href="cart.html">去购物车结算</a>
            </div>
        `;
        $('.float1').html(str);

        $('.continue').click(function(){
            // alert(1);
            $(this).parents('.mark1').remove();
        })

    })
    $('.appcode').mouseenter(function(){
        $(this).css({"backgroundPosition":"-137px -340px"});
        $(this).find('div').css({"display":"block"})
    })
    $('.appcode').mouseleave(function(){
        $(this).css({"backgroundPosition":"0 -340px"});
        $(this).find('div').css({"display":"none"})
    })
    $('.lol-cart').click(function(){
        location.href="cart.html";
    })
})