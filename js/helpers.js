espaApp.service('helpers', function () {
	return{
		toggleActiveTab:function (location){
$('.nav-tabs a').parents('li').removeClass('active');
$('.nav-tabs a[href="#/'+location+'"]').parents('li').addClass('active');	
		},
		changeValue:function(select){
			
			
		var num=0;
			if(select[select.length-2]==":"){
			num=parseInt(select.slice(-1),10);		
			}else{
			num=parseInt(select.slice(-2),10);	
			}
			
		return num;
		
		}, 
		
	changeValueRange:function(select,minmax){
		var regex = /\d+/g;

var matches = select.match(regex);  // creates array from matches

if(minmax=="min"){
	return matches[0];
}else if(minmax=="max"){
	return matches[1];
}
		
		}
	};

    });
	