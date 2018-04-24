 // var  insertLgContactUs= 'http://wxerptest.winwayworld.com/insertLgContactUs'; //test
 var  insertLgContactUs= 'http://www.bfsuma.com';
$(function(){
    /*主页导航滚动*/
    layui.use('layer', function(){
        var layer = layui.layer;
    });
    //滚动高度监听
    // $(window).scroll(function(event){
    //     if($(window).scrollTop()>880){
    //         $('.header').attr("style","border-bottom:1px solid #009444")
    //     }
    //     if($(window).scrollTop()<880){
    //         $('.header').attr("style","border:none")
    //     }
    // });


    $('.headerLi a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    /*案例图片效果*/
    $('#content1_case').find('img').hover(
        function(){
        $('#content1_case').find('img').stop(true,true);
        $(this).velocity({
            'width':'343px',
            'height':'294px',
            'margin-left':'-29px',
            'margin-top':'-25px'
        });
    },
        function(){
        $('#content1_case').find('img').stop(true,true);
        $(this).velocity({
            'width':'285px',
            'height':'244px',
            'margin-left':'0px',
            'margin-top':'0px'
        });
    }
    );


    $(document).scroll(function(){
       //console.log($(document).scrollTop());
        if($(document).scrollTop()<780){
        	removeCls();
        }else if($(document).scrollTop()<1526 && $(document).scrollTop()>=780){
        	removeCls();
            $('.liContent1').addClass('selected');
        }else if($(document).scrollTop()<2876 && $(document).scrollTop()>=1526){
            removeCls();
            $('.liContent2').addClass('selected');
        }else if($(document).scrollTop()<4807 && $(document).scrollTop()>=2876){
            removeCls();
            $('.liContent3').addClass('selected');
        }else if($(document).scrollTop()<5806 && $(document).scrollTop()>=4807){
            removeCls();
            $('.liContent4').addClass('selected');
        }else if($(document).scrollTop()<6076 && $(document).scrollTop()>=5806){
            removeCls();
            $('.liContent5').addClass('selected');
        }else if($(document).scrollTop()<7657 && $(document).scrollTop()>=6076){
            removeCls();
            $('.liContent6').addClass('selected');
        }
    });

    //旋转兼容ie8
    radians = parseInt(118) * Math.PI * 2 / 360;
    calSin = Math.sin(radians);
    calCos = Math.cos(radians);
    
    $('.contact').on('click',function(){
        $('#name').val('');
        $('#email').val('');
        $('#company').val('');
        $('#message').val('');
        $('.contact').hide();
    	$('.aside_window').attr('style','display: block;')
    })
    $('.window_header_right').on('click',function(){
        $('.contact').show();
    	$('.aside_window').attr('style','display: none;')
    })
    function texteffects(){
        $('#vision').velocity("callout.swing");
    }

    function scrollcontent(obj){
        obj.velocity("scroll", 500);
    };

    function removeCls(){
        $('.headerLi ').each(function(i){
            if($(this).hasClass('selected')){
                $(this).removeClass('selected');
            }
        });
    }
    function testemail()
    {
        var temp = document.getElementById("email");
        //对电子邮件的验证
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!myreg.test(temp.value))
        {
            layer.open({
                type:4
                ,content: ['Please enter a valid email address!','#email']
                ,style: 'color:#fff; border:none;' //自定风格
                ,time: 1000
            });
            return false;
        }
    }

    $('.send').click(function(){

        var name = $.trim($('#name').val());
        var email = $.trim($('#email').val());
        var company = $.trim($('#company').val());
        var message = $.trim($('#message').val());
        if( !name){
            return layer.open({
                type:4
                ,content: ['Please enter a name!','#name']
                ,style: 'color:#fff; border:none;' //自定风格
                ,time: 2000
            });
        }
        if( !email){
            return layer.open({
                type:4
                ,content: ['Please enter a email address!','#email']
                ,style: 'color:#fff; border:none;' //自定风格
                ,time: 2000
            });
        }
        if( !company){
            return layer.open({
                type:4
                ,content: ['Please enter a company!','#company']
                ,style: 'color:#fff; border:none;' //自定风格
                ,time: 2000
            });
        }

        if( !message){
            return layer.open({
                type:4
                ,content: ['Please enter message!','#message']
                ,style: 'color:#fff; border:none;' //自定风格
                ,time: 2000
            });
        }
        if(testemail()==false) return false;
        $.ajax({
            type:"post",
            url:insertLgContactUs
            ,data:{
                name:name
                ,email:email
                ,company:company
                ,message:message
            }
            ,success:function(result){
                if(result.isSuccess){
                    $('.contact').show();
                    $('.aside_window').attr('style','display: none;')
                    layer.msg("Send successfully !")
                }else{
                    layer.open({content:result.message,btn:"我知道了"})
                }
            }
            ,error:function(){

            }
            ,complete:function(){

            }
        });
    })



});