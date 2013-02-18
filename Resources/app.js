
// This is a single context application with multiple windows in a stack
(function() {
	
	function getVerdict(colour) {
		var indicator = colour.charAt(1);
		var msg;
		// Make a crude decision on the strength of the tea based on the 2nd character of the hex color
		switch(indicator) {
			case 'F': msg = 'Milky'; break;
			case 'D': msg = 'Nice'; break;
			case 'C': msg = 'Perfect'; break;
			case '9': msg = 'A bit strong'; break;
			case '8': msg = 'Builders tea'; break;
			case '6': msg = 'Send it back'; break;
			case '3': msg = 'No milk here'; break;
		}
		
		return msg;
	};
	
	function showTeaVerdict(_args) {
		var teaVerdict = Ti.UI.createWindow({layout:'vertical'});
		
		teaVerdict.backgroundColor = _args;
		teaVerdict.msg = getVerdict(_args);
		
		var judgement = Ti.UI.createLabel({text:teaVerdict.msg, top:'50%'});
		var close = Ti.UI.createButton({title:'Choose again', top:'25%'});
		close.addEventListener('click', function(e) 
			{teaVerdict.close(); 
			// release the resources
			teaVerdict = null;
			});
		
		teaVerdict.add(judgement);
		teaVerdict.add(close);
		teaVerdict.open();
	}
	
	var Teas = ['#F5F5DC', '#FFE4B5', '#FFE4C4', '#D2B48C', '#C3B091', '#C3B091', '#926F5B', '#804000', '#654321', '#3D2B1F'];
	
	var win1 = Titanium.UI.createWindow({  
	    title:'Select Color',
	    backgroundColor:'#fff'
	});
	
	allRows = [];
	var theColours = Ti.UI.createTableView({});
	
	for (var i=0; i<Teas.length; i++) {
		theRow = Ti.UI.createTableViewRow({backgroundColor: Teas[i], height:50, TeaColour:Teas[i]});
		allRows.push(theRow);
	}
	
	theColours.setData(allRows);
	
	theColours.addEventListener('click', function(e) {showTeaVerdict(e.source.TeaColour)});
	win1.add(theColours);
	// open window
	win1.open();

})();


