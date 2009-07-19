Alex = Class.create({
	initialize: function(options) {
		if (typeof(console) == 'undefined') {
			var Console = Class.create({
				log: function() {},
				error: function() {}
			});
			 console = new Console();
		}
		debug = true;
		document.observe('keydown', this.keyFunk);
	},

	keyFunk: function(keyEvent) {
  	var main = $('main');

		this._chars = $w("&#x2318; &#x2311; &#x235F; &#x23CF; &#x2388; &#x232C; &#x2426; &#x1D122; &#x1D11E; &#x1D110; &#x2230; &#x22C7; &#x2A37; &#x2981; &#x29BF; &#x2592; &#x263C; &#x2655; &#x2603; &#x2602; &#x2656; &#x262F; &#x2638; &#x20A9; &#x2763; &#x2042; &#x10417; &#x10427; &#x67C;");
		var id = (Math.random() * this._chars.length).floor();
		this._element = $('inner');
		var ch = this._chars[id];	
		console.log("id= " + id);
		this._element.update(ch);
		var color = '#';
		for (var i=0; i<3; i++) {
			color += (1 + 8 * Math.random()).floor();
		}

		var top = (2 + 98 * Math.random()).floor();
		var left = (2 + 98 * Math.random()).floor();
		var style = { color: color, left: '', right: '', top: '', bottom: ''};

		if (top < 50)		style.top = top + '%';
		else						style.bottom = 100-top + '%';
		if (left < 50)	style.left = left + '%';
		else 						style.right = 100-left + '%';

		if (debug) {
			console.log(style);
			console.log(keyEvent);
		}
		this._element.setStyle(style);
		this._element.hide();
  	Effect.Appear(this._element.id, { duration: 0.2 });
		if(keyEvent.keyCode == 87 || 
			keyEvent.keyCode == 82 ||
			$R(48,57).include(keyEvent.keyCode) && (keyEvent.altKey || keyEvent.metaKey)) {
		} else {
			Event.stop(keyEvent);
		}
	}
});
