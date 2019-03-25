$(function(){
    var allFlag = false;
    var nameFlag = false;
    var pwdFlag = false;
    var phoneFlag = false;
    var argeeFlag = false;
    $('#userName').click(function(){
        $(this).css("border-color","#549df8").parent().animate({height:52,borderColor:"#549df8"});
    })
    $('#userName').blur(function(){
        // console.log(2);
        // console.log($(this).parent());
        var str = $(this).val();
        var par = /\S+/;
        if(!par.test(str)){
            $(this).css("border-color","red").parent().animate({height:75},500);
            $(this).next().css("display","none");
            return nameFlag = true;
        }else{
            $(this).next().css("display","block");
        }
    })
    
    $('#userpwd').click(function(){
        $('.pwderror').css("display","none");
        $(this).css("border-color","#549df8").parent().animate({height:120,borderColor:"#549df8"});
    })
    $('#userpwd').keyup(function(){
        var str = $(this).val();
        var space = /\s+/;
        var length = /\S{8,16}/;
        // var type = /([0-9]|[a-zA-Z]|[~!@#$%^&*?]){2,}/;
        
        var type = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[~!@#$%^&*?]+$)^\w{8,16}$/;
    
        if(space.test(str)){
            $('.spaceError').find("img").attr("src","../img/register/info.png");
           
        }else{
            $('.spaceError').find("img").attr("src","../img/register/green.png");
        }
        if(length.test(str)){
            $('.lengthError').find("img").attr("src","../img/register/green.png");
        }else{
            $('.lengthError').find("img").attr("src","../img/register/info.png");
           
        }
        if(type.test(str)){
            $('.typeError').find("img").attr("src","../img/register/green.png");
        }else{
            $('.typeError').find("img").attr("src","../img/register/info.png");
            
        }
        
    })
    $('#userpwd').blur(function(){
        // $(this).next().css("display","none");
        $('.spaceError').css("display","block");
        $('.lengthError').css("display","block");
        $('.typeError').css("display","block");
        
        var flag = true;
        var str = $(this).val();
        var space = /\s+/;
        var length = /\S{8,16}/;
        var type = /(?!^\d+$)(?!^[A-Za-z]+$)(?!^[~!@#$%^&*?]+$)^\w{8,16}$/;
        if(space.test(str)){
            // $('.spaceError').find("img").attr("src","../img/register/info.png");
            // $('.spaceError').css("display","block");
            flag = false;
        }else{
            // $('.spaceError').css("display","none");
        }
        if(length.test(str)){
            // $('.lengthError').css("display","none");
        }else{
            // $('.lengthError').css("display","block");
            flag = false;
        }
        if(type.test(str)){
            // $('.typeError').css("display","none");
        }else{
            // $('.typeError').css("display","block");
            flag = false;
        }
        if(flag == true){
            $(this).next().css("display","block");
            $('.spaceError').css("display","none");
            $('.lengthError').css("display","none");
            $('.typeError').css("display","none");
            $(this).css("border-color","#549df8").parent().animate({height:54},500);
            return pwdFlag = true;
        }else{
            $('.pwderror').css("display","block").parent().animate({height:75},100);
        }
    })

    $('#number').click(function(){
        $(this).css("border-color","#549df8").parent().animate({height:130,borderColor:"#549df8"});
    })
    $('#number').blur(function(){
        // alert(1);
        var str = $(this).val();
        var parSp = /\S+/;
        var parNum = /^1(3|4|5|7|8)\d{9}$/;
        if(!parSp.test(str)){
            // alert(2);
            $(this).parent().animate({height:70,borderColor:"#ccc"});
        }
        if(!parNum.test(str)){
            // $(this).siblings('.register-code').css("display","none");
            $(this).next().css("display","none");
            // alert(1);
            // $("numError").css("display","block");

            $(this).next().next().css("display","block");
            $(this).next().next().next().css("display","none");
            // $(this).parent().animate({height:73,borderColor:"#ccc"},0);
        }else{
            $(this).next().css("display","block");
            $(this).next().next().next().css("display","block");
            $(this).next().next().css("display","none");
            return phoneFlag = true;
            // $(this).parent().animate({height:73,borderColor:"#ccc"},0);
        }
    })
    $('.argeeNormal').click(function(){
        $(this).css("display","none").next().css("display","block");
        return argeeFlag = true;
    })
    $('.argeeCheck').click(function(){
        $(this).css("display","none").prev().css("display","block");
    })
    
    $('.register-btn').click(function(){
        if(nameFlag = true&& pwdFlag == true&&phoneFlag == true&&argeeFlag == true){
            allFlag = true;
        }else{
            allFlag = false;
        }
        console.log(nameFlag);
        console.log(pwdFlag);
        console.log(phoneFlag);
        console.log(argeeFlag);
        if(allFlag){
            $('<div>').prependTo($(document.body)).addClass('mark');
            $('<div>').prependTo($('.mark')).addClass('float');
            var str  = `
                <a class="close" >x</a>
                <h4>请发送短信帮助我们确认你的身份</h4>
                <h5>编辑短信： 1</h5>
                <h5>发送至： 1069 0700 511</h5>
                <span>除运营商收取的标准短信费用外，无额外费用。</span>
                <input type="button" id="sendmsg" value="我已发送短信，下一步">
               
            `;
            
            $('.float').html(str);
            $('.float').click(function(){
                return false;
            })
            $('.close').click(function(){
                $(this).parents('.mark').remove();
            })
            
            $('#sendmsg').click(function(){
                // alert(1);
                // alert(1);
                var $name = $('#userName').val();
                console.log($name);
                
                var $pwd = $('#userpwd').val();
                console.log($pwd);
                
                $.cookie('user',`{"name":"${$name}","pwd":"${$pwd}"}`,{path:'/',expires:7});
                location.href="../../index.html";
                
            })
        }
    })
})