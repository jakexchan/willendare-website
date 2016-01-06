(function(){

	/* get the class element*/
	var	getClass = function(tagName, className){
		if(document.getElementsByClassName){
			return document.getElementsByClassName(className);
		}else{
			var tags = document.getElementsByTagName(tagName);
			var tagArr = [];
			for(var i = 0, len = tags.length; i < len; i++){
				if(tags[i].class = className){
					tagArr[tagArr.length] = tags[i];
				}
			}
			return tagArr;
		}
	};

	/* get css file attribute*/
	var getStyle = function(obj, attr){
		return obj.currenStyle ? obj.currenStyle[attr] : document.defaultView.getComputedStyle(obj, null)[attr];
	};

	var Scroll = { 
		timer : null,

		getScrollTop : function(){
			if(document.documentElement && document.documentElement.scrollTop){
				scrollTop = document.documentElement.scrollTop;
			}else if(document.body){
				scrollTop = document.body.scrollTop;
			}
				return scrollTop;
		},

		setScrollTop : function(top){
			if(document.documentElement && document.documentElement.scrollTop){
				document.documentElement.scrollTop = top;
			}else if(document.body){
				document.body.scrollTop = top;
			}
		},

		moveScrollTop : function(target, time){
			clearInterval(Scroll.timer);
			Scroll.timer = setInterval(function(){
				var cur = Scroll.getScrollTop();
				var speed = (target - cur) / time;
				speed = speed > 0 ? Math.ceil( speed ) : Math.floor( speed );
				var top = cur + speed;
				if(top === target)
				{
					clearInterval(Scroll.timer);
				}else{
					Scroll.setScrollTop(top);
				}
			}, 50);
		}

	};

	var willendare = {};

 willendare.setHeight = function(){
   var proBlock = document.getElementById('pro-block');

   var height = window.innerHeight;
   
   proBlock.style.height = height + 'px';
 };

 willendare.setHeight();

	willendare.downHandle = function(){
		var downObj = document.getElementById("down");
		downObj.onclick = function(){
			var navHeight = document.getElementById('navbar').clientHeight;
			var proBlockHeight = document.getElementById('pro-block').clientHeight;
			var height = proBlockHeight - navHeight;
			Scroll.moveScrollTop(height, 6);
		};

	};

	willendare.downHandle();

	window.sr = new scrollReveal();


}());