//返回顶部动态加载
$(()=>{
    $(window).scroll(()=>{
        if(document.body.scrollTop<400){
            $(".totop>img").addClass("none");
        }else{
            $(".totop>img").removeClass("none");
        }
    });
})

