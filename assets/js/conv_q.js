(function (){
	var k = document;
	var c = new function () {
		this._rnd = function () {
			return Math.round(Math.random() * 10000)
		};
		this._trc = location.protocol + "//t3.adsage.com/trc/";
		this._trc_rf = this._trc + "track/" + this._rnd() + ".js?";
		this._screen = screen.width + "*" + screen.height;
		this._send = function (l) {
			var e = k.getElementsByTagName("head")[0],
			d = k.createElement("script");
			d.async = true;
			d.src = l;
			d.type = "text/javascript";
			e.appendChild(d)
		};
		this._judgeBrowser = function(){
			var appName= navigator.appName;
			var language="";
			if (appName == "Microsoft Internet Explorer") {
				language = encodeURIComponent(navigator.browserLanguage);
			}else if (appName == "Netscape") {
				language = encodeURIComponent(navigator.language);
			}else {
				language = encodeURIComponent(appName);
			}
			return language;
		};
		if (typeof(_e360_keywordid) == "undefined") {
			_e360_keywordid='0';	
		};
		if (typeof(_e360_creativeid) == "undefined") {
			_e360_creativeid='0'
		};
		this._send(this._trc_rf + "ver=360_1"
			+ "&s=" + this._screen
			+ "&l=" + this._judgeBrowser()
			+ "&url=" + encodeURIComponent(k.URL)
			+ "&refurl=" + encodeURIComponent(k.referrer)
			+ "&360kwd=" + encodeURIComponent(_e360_keywordid)
			+ "&360ctid=" + encodeURIComponent(_e360_creativeid)
			+ "&360uid=" + encodeURIComponent(_e360_uid)
		);
	};
})();
