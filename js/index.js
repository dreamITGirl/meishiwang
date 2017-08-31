
$(()=> {
    //为购物车添加动态效果
    $("#menu").mouseover(e=> {
        $(e.target).next().show();
    });
    $("#shopping").mouseout(e=> {
        $(e.target).hide()
    })
} );
   //为nav导航条中的菜谱添加下拉效果
$(()=>{
var li=document.querySelector("#sub-cate");
li.onmouseover=function(){
    var ul=this.children[1];
    ul.style.display="block";
};
li.onmouseout=function(){
    var ul=this.children[1];
    ul.style.display="none";
}
});
//广告轮播banner部分
$(()=>{
    var imgs=[
     "images/1492594326.jpg",
     "images/1492594371.jpg",
     "images/1491908712.jpg",
     "images/1492594406.jpg",
     "images/1491908802.jpg"
    ];
    var $ulImgs=$("#imgs"),
            LIWIDTH=700,
            $ulIdxs=$("#index"),
            moved=0,
            interval=500,
            WAIT=3000+interval,
            timer=null;
        var str="",strIdxs="",i=1;
        for(var src of imgs){
            str+=`<li><img src="${src}"></li>`;
            strIdxs+=`<li>${i++}</li>`;
        }
        str+=`<li><img src="${imgs[0]}"></li>`;
        $ulImgs.append(str)
            .css("width",(imgs.length+1)*LIWIDTH);
        $ulIdxs.append(strIdxs)
            .children().first()
            .addClass("hover");

        //启动周期性定时器:
        function play(){
            timer=setInterval(()=>{
                moved++;
                $ulImgs.animate({
                    left:-moved*LIWIDTH
                },interval,()=>{//每次移动后判断
                    if(moved==5){//如果移动到最后一张
                        moved=0;//就瞬间返回第一张
                        $ulImgs.css("left",0);
                    }
                    //将$ulIdxs下第moved个li设为hover
                    $ulIdxs.children(":eq("+moved+")")
                        .addClass("hover")
                        .siblings().removeClass("hover");
                })//每次移动耗时0.5秒
            },WAIT);//每隔3.5秒动一次
        }
        play();
        //当鼠标进入slider时
        $("#ads").hover(
            ()=>{
                clearInterval(timer);
                timer=null;
            },
            ()=>play()
        );
        //为$ulIdxs绑定单击事件
        $ulIdxs.on("click","li",e=>{
            var $tar=$(e.target);
            moved=$tar.index();
            $ulImgs.stop(true).animate({
                left:-moved*LIWIDTH
            },interval,()=>{
                $tar.addClass("hover")
                    .siblings().removeClass("hover");
            })
        });
    });

//屏幕滚动时题目的效果
$(()=> {
    $(window).scroll(function () {
        if (document.body.scrollTop >= 1200) {
            $(".actives").addClass("swing");
            $(".method").addClass("bounceInRight");
        }else{
            $(".actives").removeClass("swing");
            $(".method").removeClass("bounceInRight");
        }

    })
});








