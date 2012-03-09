jQuery.fn.tabs = function() {
	var tabList = this.children("ul:first");
	
	var tabIds2Tab = {};
	tabList.children().each(function(index, li) {
		var link = $(li).children();
		var idSelector = link.attr("href");
		tabIds2Tab[idSelector] = $(li);
		link.click(function() {
			showTab(idSelector);
			return false;
		});
	});
	
	function showTab(showId) {
		for (var tabId in tabIds2Tab) {
			var tab = tabIds2Tab[tabId];
			var tabContent = $(tabId);
			if (tabId == showId) {
				tabContent.show("fast");
				tab.addClass("active");
			} else {
				tabContent.hide("fast");
				tab.removeClass("active");
			}
		}
	}
	
	tabList.addClass("tab-container");
	//show first tab
	for (var firstKey in tabIds2Tab) {
		showTab(firstKey);
		break;
	}
};