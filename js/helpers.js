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
		
		}, 
		changeInputA1Oik:function(input){
		if(input<=12000){
				return 10;
			}else if(input<=35000){
				return (((35000-input)/12500)*10).toFixed(2);
			}else{
				return 0};	
		},
		changeInputA1Ato:function(input){
			if(input<=7500){
				return 10;
			}else if(input<=20000){
				return (((20000-input)/12500)*10).toFixed(2);
			}else{
				return 0};
		
		},
		changeInputG1:function(months){
			if(months>=12){
				return 10;
			}else{
				return months/12*10;
				}

		}
	};

    });
	