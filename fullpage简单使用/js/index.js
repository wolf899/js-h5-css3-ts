$(function () {
    //初始化fullpage
    $('.container').fullpage({
        /*配置参数*/
        //每一幕的背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        //滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function (index) {
            //当前页面进入时添加一个now属性
            $(".section").eq(index - 1).addClass('now');
        },
        //离开某一个页面的时候调用
        onLeave: function (index, nextIndex) {
            var nowSection = $(".section").eq(index - 1);
            if (index == 2 && nextIndex == 3) {
                //第二屏到第三屏的时候
                nowSection.addClass('leaved');
            } else if (index == 3 && nextIndex == 4) {
                //从第三屏到第四屏
                nowSection.addClass('leaved');
            } else if (index == 5 && nextIndex == 6) {
                //从第五屏到第六屏
                nowSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
            } else if (index == 6 && nextIndex == 7) {
                //从第六屏到第七屏
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i) {
                    /*delay是延时方法,单位毫秒*/
                    $(this).delay(i * 0.5 * 1000).fadeIn();
                });
            }
        },
        //页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
        afterRender: function () {
            $(".more").on("click", function () {
                //$.fn可以用来自定义封装jq方法 
                //moveSectionDown是fullpage插件封装的方法，往下滑
                $.fn.fullpage.moveSectionDown();
            });
            /*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.screen04 .cart').on('transitionend', function () {
                $('.screen04 .text').addClass('show');
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
            });
            /*第八屏图片跟鼠标走功能*/
            $('.screen08').on('mousemove', function (e) {
                $(this).find('.hand').css({
                    left: e.clientX - 470,
                    top: e.clientY - 360
                });
            }).find('.again').on('click', function () {
                /*点击按钮返回第一屏并且能重新播放动画*/
                /*因为是通过不同的方法做动画，所以要挨个清除*/
                /*去掉now,leave,show类属性*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*去掉content中的css属性，jq方法也是多加style属性*/
                $('.content [style]').removeAttr('style');
                /* 最后回到第一屏*/
                $.fn.fullpage.moveTo(1);
            });
        },
        //修改页面切换的时间，默认是700
        scrollingSpeed: 1000
    });
});