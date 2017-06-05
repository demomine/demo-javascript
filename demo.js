$(document).ready(function(){
    $("button").click(function(){
        $(this).hide();
    });
});

//简单选择器

/*
$(function () {//延迟加载
    //id选择器  id名字相同会失明  只认第一个   应遵守id唯一原则
   //$('#span1').css('color', 'red');
    //元素选择器
    //$('div').css('color','yellow')
    //类选择器
    //$('.span1').css('color', 'green');
    //如果选择到的元素不存在 jQuery不报错误 可以通过 size>0来实现
   /!* if ($('.aa').size() > 0) {
        $('.aa').css('color', 'green');
    }
    *!/
    //不能通过[0].css去控制其中一个的样式行为
   // $('.span1').css('color','green');


});
*/

//常规选择器
$(function () {
    //群组
    //$('.span1,#span1').css('color','red');
    //后代选择器
    //$('div p').css('color','blue');
    //通配符选择器  全局通配符消耗资源大 不建议使用
    //$('*').css('color','orange');
    $('div *').css('color','orange');
    $('.p1.p2').css('color','orange');


});


