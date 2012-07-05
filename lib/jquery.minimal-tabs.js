jQuery.fn.tabs = function() {
	var tabList = this.children("ul:first");
	
	var tabIds2Tab = {};
	var firstTab;
	tabList.children().each(function(index, li) {
		var link = $(li).children("a");
		if (link.length) {
			var idSelector = link.attr("href");
			tabIds2Tab[idSelector] = $(li);
			if (!firstTab) firstTab = idSelector;
			link.click(function() {
				showTab(idSelector);
				return false;
			});
		}
	});
	
	function showTab(showId) {
		for (var tabId in tabIds2Tab) {
			var tab = tabIds2Tab[tabId];
			var tabContent = $(tabId);
			if (tabId == showId) {
				tabContent.show("fast");
				tab.addClass("active");
				console.log(tabId + " shown");
			} else {
				tabContent.hide("fast");
				tab.removeClass("active");
				console.log(tabId + " hidden");
			}
		}
	}
	
	tabList.addClass("tab-container");
	//show first tab
	showTab(firstTab);
};