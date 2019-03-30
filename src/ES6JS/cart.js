$(function(){
    var cartStr = $.cookie('cart')||"{}";
    var cartObj = JSON.parse(cartStr);
    // console.log(cartObj);
    // for(var i = 0 ; i < cartObj.length; i++){
        var dataa = cartObj[0];
        // console.log(dataa);
        for(var key in dataa){
            // console.log(dataa[key]);
            var data = dataa[key];
            var str = `
                <tr class="${key}">
                    <td><input type="checkbox" class="buy"></td>
                    <td class="name"><img src="${data.src}" class="left" ><span class="left" >${data.tit}</span></td>
                    <td>${data.alt}</td>
                    <td>${data.price} Q币</td>
                    <td>永久</td>
                    <td>
                        <input type="button" value="-" class="reduce">
                        <input type="text" value = "${data.num}" class="txt">
                        <input type="button" value="+" class="add">
                    </td>
                    <td>无优惠</td>
                    <td>${(data.price * data.num).toFixed(2)}Q币</td>
                    <td><a class="delete">删除</a></td>
                </tr>
            `;
            $('.player-info2-main .td').append(str);
        }
    // }

    $('.reduce').on("click",function(){
        var pub = $(this).parent().parent().attr('class');
        // console.log(pub);
        // alert(1);
        var cartStr = $.cookie('cart');
        var cartObj = JSON.parse(cartStr);
        // console.log(cartObj);
        // for(var i = 0 ; i < cartObj.length; i++){
            var data = cartObj[0];
            // console.log(data);
            if(data[pub].num>1){
                let num = data[pub].num--;
                // console.log(typeof num,$(this).next()[0]);
                $(this).next().val(num-1);
                $(this).parent().next().next().html((data[pub].num*data[pub].price).toFixed(2)+"Q币")
                let str = JSON.stringify(cartObj);
                $.cookie('cart',str,{expires:7,path:'/'});
            }
       
            
        
    })
    $('.add').on("click",function(){
        var pub = $(this).parent().parent().attr('class');
        // console.log(pub);
        // alert(1);
        var cartStr = $.cookie('cart');
        var cartObj = JSON.parse(cartStr);
        console.log(cartObj);
        console.log(cartStr);
        var data = cartObj[0];
        
        var num = data[pub].num++;
        $(this).prev().val(num+1);
        $(this).parent().next().next().html((data[pub].num*data[pub].price).toFixed(2)+"Q币")
        let str = JSON.stringify(cartObj);
        $.cookie('cart',str,{expires:7,path:'/'});
    })
    $('.delete').on("click",function(){
        var pub = $(this).parent().parent().attr('class');
        $(this).parent().parent().remove();
        console.log(pub);
        // alert(1);
        var cartStr = $.cookie('cart');
        var cartObj = JSON.parse(cartStr);
        console.log(cartObj);
        var data =cartObj[0];
        console.log(data);
        for(var i in data){
            if(pub == i){
                alert(1);
                console.log(data[i]);
                delete data[pub];
                let str = JSON.stringify(cartObj);
                $.cookie('cart',str,{expires:7,path:'/'});
            }
        }
            
    })
    $('.txt').blur(function(){
        var num = parseInt($(this).val());
        var pub = $(this).parent().parent().attr('class');
        var cartStr = $.cookie('cart');
        var cartObj = JSON.parse(cartStr);
        // console.log(cartObj);
        // console.log(cartStr);
        var data = cartObj[0];
        
         data[pub].num = num ;
        // $(this).prev().val(num+1);
        $(this).parent().next().next().html((data[pub].num*data[pub].price).toFixed(2)+"Q币")
        let str = JSON.stringify(cartObj);
        $.cookie('cart',str,{expires:7,path:'/'});
    })
    $('.buy').each(function(){
        $(this).click(function(){
            var num = parseInt($(this).val());
            var pub = $(this).parent().parent().attr('class');
            var cartStr = $.cookie('cart');
            var cartObj = JSON.parse(cartStr);
            // console.log(cartObj);
            // console.log(cartStr);
            var data = cartObj[0];
            if($(this)[0].checked){
                console.log(typeof parseFloat($('.money').html()),typeof (data[pub].num*data[pub].price).toFixed(2));
                $('.money').html(parseFloat($('.money').html())+parseFloat((data[pub].num*data[pub].price).toFixed(2)));
                $('.btn').css({'background':"red"});
            }else{
                $('.money').html(parseFloat($('.money').html())-parseFloat((data[pub].num*data[pub].price).toFixed(2)));
                if(parseFloat($('.money').html())==0){
                    $('.btn').css({'background':"#666666"});
                }
            }
        })
        
    })
    $('.logo').click(function(){
        location.href = "../../index.html";
    })
})
window.onload = function(){
    var str = $.cookie('cart');
    // var obj = JSON.parse(str);
    // console.log(str);
    // console.log(obj);
    if(str){
        $('.no').css("display","none");
        
    }else{
        $('.no').css("display","block");
    }
}