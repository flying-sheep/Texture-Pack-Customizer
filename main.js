var debug = false;
var commitURL = "https://github.com/api/v2/json/commits/list/flying-sheep/Texture-Pack-Customizer/gh-pages?callback=?";

//compatibility for new format
var settings = settings["terrain.png"];

//INITIALIZATION
var urlSettings = {
	"changedSettings": {},
	"fromUrl": function() {
		if (location.hash) {
			var hash = location.href.substring(location.href.indexOf("#") + 1);
			decodeURI(hash).split("&&").forEach(function(settingString) {
				var setting = settingString.split("=");
				urlSettings.changedSettings[setting[0]] = setting[1];
			});
		}
	},
	"toUrl": function() {
		var hash = [];
		for (settingName in urlSettings.changedSettings)
			if (settingName != "override")
				hash.push(settingName + "=" + urlSettings.changedSettings[settingName]);
		location.replace("#" + hash.join("&&"));
	},
	"apply": function() {
		for (settingName in urlSettings.changedSettings)
			swap(settingName, urlSettings.changedSettings[settingName]);
	},
	"set": function(settingName, optionName) {
		var setting = settings[settingName];
		
		if (setting[optionName] != lastVersion)
			urlSettings.changedSettings[settingName] = optionName;
		else
			delete urlSettings.changedSettings[settingName];
	}
}

urlSettings.fromUrl();

//FINISH INITIALISATION
$(document).ready(function() {
	$("#version").text(lastVersion);
	
	var canvas = $("#terrain")
		.attr("width",  512)
		.attr("height", 512) //TODO
		.click(saveCanvas)
		.bind("contextmenu", saveCanvas)
		.drawImage({
			source: imgPath(lastVersion),
			x: 256, y: 256,
			load: function() {
				if ("override" in settings)
					swap("override", "pack");
				urlSettings.apply();
			}
		});
	
	var form = $("#settings");
	
	for (var settingName in settings) {
		if (settingName == "override") break;
		
		setting = settings[settingName];
		
		var select = $("<select/>", {"id": settingName})
			.appendTo(
				$("<div/>")
					.append(
						$("<label/>", {"for": settingName})
							.text(settingName)
					)
					.appendTo(form)
			);
		
		for (var optionName in setting) {
			if (optionName == "coords") break;
			
			var option = $("<option/>")
				.text(optionName)
				.appendTo(select);
			
			if (urlSettings.changedSettings[settingName]) {
				if (urlSettings.changedSettings[settingName] == optionName)
					option.attr("selected", "selected");
			} else if (setting[optionName] == lastVersion)
				option.attr("selected", "selected");
		}
		
		function selected(aEvt) {
			var sel  = aEvt.target;
			var opt  = sel.options[sel.selectedIndex].textContent;
			swap(sel.id, opt);
		}
		select.change(selected);
		select.keyup(selected);
	}
	
	blockToggle("guide");
	blockToggle("versions");
	$("#settings select").yaselect();
	
	loadCommitPage(1);
	
	if (debug) for (var v in versions) {
		$("body")
			.append(
				$("<h1/>")
					.text("terrain.png version: "+v)
			)
			.append(
				$("<img/>")
					.attr("src", imgPath(versions[v]))
			);
	}
});

//HELPER FUNCTIONS
function saveCanvas() {Canvas2Image.saveAsPNG($("#terrain")[0])}
function imgPath(name) {return "terrain.png/"+name+".png"}

function swap(settingName, optionName) {
	if (debug) console.log("Set", settingName, "to", optionName);
	
	var setting = settings[settingName];
	
	urlSettings.set(settingName, optionName);
	urlSettings.toUrl();
	
	var img = imgPath(setting[optionName]);
	var coords = setting.coords;
	
	if (debug) console.log("Use", img, "for tiles", coords);
	
	var canvas = $("#terrain");
	
	var u = canvas.width()/16;
	
	coords.forEach(function(coord) {
		var x = coord[0] * u + u/2;
		var y = coord[1] * u + u/2;
		
		canvas
			.clearCanvas({
				x:x,     y:y,
				width:u, height:u
			})
			.drawImage({
				source: img,
				sx:x,     sy:y,
				sWidth:u, sHeight:u,
				x:x,     y:y,
				width:u, height:u
			});
	});
}

function loadCommitPage(p) {
	var versionContainer = $("#versions > ul");
	
	$.getJSON(commitURL+"&page="+p, function(data) {
		if (!data.error) {
			if (p != 1)
				$("<li><hr/></li>")
					.addClass("divider")
					.appendTo(versionContainer);
			
			data.commits.forEach(function(commit) {
				$("<li/>")
					.text(commit.message)
					.appendTo(versionContainer);
			});
			
			loadCommitPage(p+1);
		}
	});
}
function blockToggle(id) {
	var inButton = $("#"+id+"_button");
	var content  = $("#"+id);
	
	var outButton = inButton.prev("button");
	
	if (outButton.length == 0) {
		outButton = $("<button/>")
			.text("×")
			.css({
				"display": "none",
				"float": "right"
			})
			.insertBefore(inButton);
	}
	
	inButton.click(function() {
		inButton.toggle();
		content.fadeToggle("fast", function() {
			outButton.slideToggle("fast");
		});
	});
	outButton.click(function() {
		outButton.toggle();
		content.fadeToggle("fast", function() {
			inButton.slideToggle("fast");
		});
	});
}