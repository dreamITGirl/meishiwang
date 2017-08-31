//为评论区添加效果
$(()=>{
var imgs=document.getElementsByClassName("praise");
    for(var i=0,len=imgs.length;i<len;i++){
    imgs[i].onclick=function(){
     var li=this.parentNode.nextElementSibling;
     var n=parseInt(li.innerHTML);
     n++;
     li.innerHTML=n;
}
    }
});
//屏幕滚动时题目的效果
$(()=> {
    $(window).scroll(function () {
        if (document.body.scrollTop >= 1100) {
            $("#animated").addClass("tada");
        }else{
            $("#animated").removeClass("tada");
        }

    })
});
//为浏览其他内容添加滚动监听效果
$(()=>{
  $(".kld-list>img:first-child").mouseenter((e)=>{
   $(e.target).addClass("flash");
});
$(".kld-list>img:first-child").mouseleave((e)=>{
    $(e.target).removeClass("flash");
});
});
//广告区的轮播

$(()=>{
    var imgs=[
        "images/k1.jpg",
        "images/k2.jpg",
        "images/k3.jpg",
        "images/k4.jpg",
        "images/k5.jpg"
    ];

    var $ulimgs=$("#adtm"),
        LIWIDTH=274,
        moved=0,
        interval=500,
       WAIT=3000+interval,
        timer=null;
    var str="";i=1;
    for(var src of imgs){
        str+=`<li><img src="${src}"></li>`;
    }
    str+=`<li><img src="${imgs[0]}"></li>`;
$ulimgs.append(str).css("width",(imgs.length+1)*LIWIDTH);
 function player(){
     timer=setInterval(()=>{
         moved++;
         $ulimgs.animate({
             left:-moved*LIWIDTH
         },interval,()=>{
             if(moved==5){
                 moved=0;
                 $ulimgs.css("left",0);
             }
         })
     },WAIT)
 }
   player();
    $("#slider").hover(
        ()=>{
            clearInterval(timer);
            timer=null;
        },
        ()=>player()
    );
})