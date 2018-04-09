;$(function(){
	'use strict';
	
	var sidebar = $('#sidebar'),
	    mask = $('.mask'),
	    backButton=$('.back-to-top'),
	    sidebar_trigger = $('#sidebar_trigger');
	    
	    function showSideBar()//显示侧栏
	    {
	    	
	    	mask.fadeIn();
	    	sidebar.css('right',0);//调整侧栏相关的css
	    }
	    
	    function hideSideBar()//隐藏侧栏
	    {
	    	mask.fadeOut();
	    	sidebar.css('right',-sidebar.width());
	    }
	    
	    sidebar_trigger.on('click',showSideBar);//监听点击事件
	    mask.on('click',hideSideBar);
	    backButton.on('click',function(){
	    	$('html,body').animate({
	    		scrollTop:0
	    	},600)
	    })
	    
	    $(window).on('scroll',function(){//监听windowscroll事件
	    	if($(window).scrollTop() > $(window).height())
	    	   backButton.fadeIn();
	    	else
	    	 backButton.fadeOut();
	    })
	    
	    $(window).trigger('scroll');
	    
	   
})
	
	

