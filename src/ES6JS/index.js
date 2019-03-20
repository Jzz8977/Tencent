$(function(){
   $('.game-index').mouseenter(function(){
       $('.game-table-hidden').css({display:'block'});
   })
   $('.game-index,.game-table-hidden').mouseleave(function(){
       $('.game-table-hidden').css('display','none');
       return false;
   })
})
