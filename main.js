var debug = false;
var commitURL = "https://github.com/api/v2/json/commits/list/flying-sheep/Texture-Pack-Customizer/zip?callback=?";

//INITIALIZATION
var urlSettings = {
	changedSettings: {},
	fromUrl: function() {
		if (location.hash) {
			var hash = location.href.substring(location.href.indexOf("#") + 1);
			decodeURI(hash).split("&&").forEach(function(settingString) {
				var setting = settingString.split("=");
				urlSettings.changedSettings[setting[0]] = setting[1];
			});
		}
	},
	toUrl: function() {
		var hash = [];
		for (settingName in urlSettings.changedSettings)
			if (settingName != "override")
				hash.push(settingName + "=" + urlSettings.changedSettings[settingName]);
		location.replace("#" + hash.join("&&"));
	},
	apply: function() {
		for (settingName in urlSettings.changedSettings)
			swap(settingName, urlSettings.changedSettings[settingName]);
	},
	set: function(settingName, optionName) {
		var setting = settings[settingName];
		
		if (setting[optionName] != lastVersion)
			urlSettings.changedSettings[settingName] = optionName;
		else
			delete urlSettings.changedSettings[settingName];
	}
}

urlSettings.fromUrl();

$.ajaxSetup({
	error: function(req, status, error) { console.error(error); }
});

var zips = {};

var util = {
	getCanvas: function(sheetName) {
		return $("#" + sheetName.replace(".png",""))
	},
	imgData: function(sheetName, version) {
		var data = "data:image/png;base64,";
		return data + btoa(zips[version].file(sheetName).data);
	},
	packUrl: function(version) {
		if (version.toFixed)
			version = version.toFixed(1);
		return "packs/johnsmith_v"+version+".zip";
	},
	loadPack: function(version, callback) {
		overlay.show();
		$.ajax({
			mimeType: "text/plain; charset=x-user-defined",
			url: util.packUrl(version),
			success: function(data) {
				zips[version] = new JSZip(data);
				overlay.hide();
				callback(data);
			}
		});
	}
}

var downloadURL;

function download() {
	overlay.show();
	
	for (var sheetName in settings) {
		if (sheetName == "mob") continue;
		
		var dataURI = util.getCanvas(sheetName).getCanvasImage();
		zips["custom"].file(sheetName, dataURI.substr(dataURI.indexOf(",")+1), { base64: true });
	}
	
	
	var URL = (window.URL || window.webkitURL);
	if (URL) {
		var content = zips["custom"].generate({ base64: false });
		var ab = new ArrayBuffer(content.length);
		var ia = new Uint8Array(ab);
		for (var c=0; c<content.length; c++)
			ia[c] = content.charCodeAt(c);
		
		var BlobBuilder = (window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder);
		var bb = new BlobBuilder();
		bb.append(ab);
		
		if (downloadURL)
			URL.revokeObjectURL(downloadURL);
		downloadURL = URL.createObjectURL(bb.getBlob("application/zip"));
	} else
		downloadURL = "data:application/zip;base64," + zips["custom"].generate();
	
	overlay.hide();
	location.href = downloadURL;
}

var overlay = {
	count: 0,
	show: function() {
		if (overlay.count++ == 0) {
			overlay.overlay = $("<div/>")
				.attr("id", "overlay")
				.appendTo("body")
				.append(
					$("<div/>")
						.spinner({
							innerRadius: 32,
							outerRadius: 64,
							strokeWidth: 12,
							color: "#fff"
						})
				);
		}
	},
	hide: function() {
		if (--overlay.count == 0)
			overlay.overlay.remove();
	}
};

function swap(sheetName, settingName, optionName) {
	if (debug) console.log("Setting in", sheetName, settingName, "to", optionName);
	
	var setting = settings[sheetName][settingName];
	var version = setting[optionName];
	
	var coords = setting.coords;
	
	if (debug) console.log("Use", sheetName, "for tiles", coords);
	
	var canvas = util.getCanvas(sheetName);
	
	var u = canvas.width()/16;
	
	function doSwap() {
		coords.forEach(function(coord) {
			var x = coord[0] * u + u/2;
			var y = coord[1] * u + u/2;
			
			canvas
				.clearCanvas({
					x:x,     y:y,
					width:u, height:u
				})
				.drawImage({
					source: util.imgData(sheetName, version),
					sx:x,     sy:y,
					sWidth:u, sHeight:u,
					x:x,     y:y,
					width:u, height:u
				});
		});
	}
	
	if (!zips[version])
		util.loadPack(version, doSwap);
	else doSwap();
}

$(function() {
	$("#settings").tabs();
	$("#settings button").click(download);
	
	for (var sheetName in settings) {
		if (sheetName == "mob") continue;
		
		var sheet = settings[sheetName];
		var canvas = util.getCanvas(sheetName)
			.attr("width",  512)
			.attr("height", 512); //TODO
		
		util.loadPack(lastVersion, function(data) {
			zips["custom"] = new JSZip(data);
			canvas.drawImage({
				source: util.imgData(sheetName, lastVersion),
				x: 256, y: 256,
				load: function() {
					if ("override" in sheet)
						swap(sheetName, "override", "pack");
				}
			});
		});
		
		for (var settingName in sheet) {
			if (settingName == "override") break;
			
			setting = sheet[settingName];
			
			var select = $("<select/>", {id: settingName})
				.appendTo(
					$("<div/>")
						.append(
							$("<label/>", {for: settingName})
								.text(settingName)
						)
						.appendTo(canvas.parent())
				);
			
			for (var optionName in setting) {
				if (optionName == "coords") break;
				
				var option = $("<option/>")
					.text(optionName)
					.appendTo(select);
				
				if (setting[optionName] == lastVersion)
					option.attr("selected", "selected");
			}
			
			function selected(aEvt) {
				var sel  = aEvt.target;
				var opt  = sel.options[sel.selectedIndex].textContent;
				swap(sheetName, sel.id, opt);
			}
			select.change(selected);
			select.keyup(selected);
		}
	}
	
	$("#version").text(lastVersion);
	$("select").yaselect();
	blockToggle("versions");
	blockToggle("guide");
	
	loadCommitPage(1);
});

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
				display: "none",
				float: "right"
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