var lastVersion = 9.7;

var settings = {
	"mob": {
		"Skeleton": {
			"Oo": 6,
			"Fanged": 8.1,
			"dark": lastVersion}
	},
	"terrain.png": {
		"Dirt and Grass": {
			"icy":  6,
			"warm": 7.4,
			"dark": lastVersion,
			"coords": [[2,0],[3,0],[4,4],[6,2]]},
		"Mycelium": {
			"grass": lastVersion,
			"squishy": "alt",
			"coords": [[13,4],[14,4]]},
		"Stone & Ore": {
			"dark":        6,
			"light":       7.3,
			"cobble":      7.4,
			"big":         8.4,
			"raw diamond": 9,
			"big diamond": lastVersion,
			"coords": [[1,0], [0,2], [1,2], [2,2], [2,3], [3,3], [0,10]]},
		"Cobble & Moss": {
			"dark":   6,
			"bricks": 7,
			"light":  7.2,
			"round":  7.4,
			"even":   lastVersion,
			"coords": [[0,1],[4,2]]},
		"Sand": {
			"swirly": 3,
			"flat":   7.3,
			"wavey":  7.4,
			"dark":   8.3,
			"warm":   lastVersion,
			"coords": [[2,1]]},
		"Stone Slab": {
			"cobble":   6,
			"shaded":   7,
			"unshaded": 7.2,
			"rough":    7.3,
			"double":   7.4,
			"smooth":   lastVersion,
			"coords": [[5,0],[6,0]]},
		"Planks": {
			"light": 6,
			"mixed": 7,
			"dark":  lastVersion,
			"coords": [[4,0]]},
		"Brickwall": {
			"stone":      6,
			"mortarless": 7,
			"mortar":     7.3,
			"3d":         7.4,
			"rough":      9.3,
			"fine":       lastVersion,
			"coords": [[7,0]]},
		"TNT": {
			"sticks": 6,
			"boxed":  lastVersion,
			"coords": [[8,0],[9,0],[10,0]]},
		"Mineral blocks": {
			"solid":        7.3,
			"framed":       8.4,
			"bevelled":     9,
			"lapis bricks": 9.6,
			"gold bricks":  lastVersion,
			"coords": [[6,1],[7,1],[8,1],[0,9]]},
		"Obsidian": {
			"firey": "alt",
			"black": lastVersion,
			"coords": [[5,2],[6,10],[6,11],[7,11]]},
		"Snow & Ice": {
			"scratched":  4.1,
			"glittering": 7.2,
			"glossy":     9.3,
			"glacier":    lastVersion,
			"coords": [[2,4],[3,4]]},
		"Dragon egg": {
			"organic": "alt",
			"obsidian": lastVersion,
			"coords": [[7,10]]},
		"Nether": {
			"low contrast":   6,
			"green soulsand": 8.1,
			"high contrast":  lastVersion,
			"coords": [[7,6],[8,6]]},
		"Nether Brick": {
			"big":   lastVersion,
			"small": "alt",
			"coords": [[0,14]]},
		"Wool": {
			"rough":     6,
			"stitched":  7.1,
			"smooth":    7.2,
			"patterned": 7.3,
			"smoother":  7.4,
			"3d":        8.4,
			"pastel":    9.3,
			"fuzzy":     9.5,
			"framed":    lastVersion,
			"coords": [[0,4],
				[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
				[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13]]},
		"Clay": {
			"smooth":  7.4,
			"swirly":  lastVersion,
			"coords": [[8,4]]},
		"Log": {
			"round":    3,
			"cornered": 7.4,
			"dark":     9.2,
			"smooth":   lastVersion,
			"coords": [[4,1],[5,1]]},
		"Jungle Log": {
			"viney": 9.2,
			"dark":  lastVersion,
			"coords": [[9,9]]},
		"Wooden door": {
			"crude planks": 3,
			"fancy window": 6,
			"plain window": 7.4,
			"beige":        8.3,
			"neat planks":  lastVersion,
			"coords": [[1,5],[1,6]]},
		"Iron door": {
			"bars":   7.4,
			"heavy":  lastVersion,
			"framed": "alt",
			"coords": [[2,5],[2,6]]},
		"Ladder": {
			"bound":   7,
			"loose":   7.3,
			"looser": "alt",
			"nailed":  7.4,
			"sparse":  lastVersion,
			"coords": [[3,5]]},
		"Trapdoor": {
			"solid":      8.4,
			"reinforced": lastVersion,
			"grate":      "alt",
			"coords": [[4,5]]},
		"Glass": {
			"light frame": 6,
			"heavy frame": 7,
			"only frame":  7.1,
			"grate":       7.3,
			"mini grate":  7.4,
			"fine":        lastVersion,
			"wood frame":  "alt",
			"coords": [[1,3]]},
		"Glowstone": {
			"organic":    6,
			"frame":      7,
			"asian":      7.1,
			"grate":      7.3,
			"mini grate": 7.4,
			"pale":       8.1,
			"lantern":    9,
			"lamp":       9.6,
			"diamond":    lastVersion,
			"wood frame": "alt",
			"coords": [[9,6]]},
		"Lantern": {
			"lamp":    9.6,
			"diamond": lastVersion,
			"coords": [[3,13],[4,13]]},
		"Wheat": {
			"chaotic":  6,
			"upright":  7.4,
			"wild":     lastVersion,
			"vertical": "alt",
			"coords": [[8,5],[9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5]]},
		"Shrooms": {
			"skinny": lastVersion,
			"fat":    "alt",
			"coords": [[12,1],[13,1]]},
		"Cactus": {
			"smooth": 5,
			"pointy": 7.3,
			"edgy":   lastVersion,
			"coords": [[5,4],[6,4],[7,4]]},
		"Sugar Cane": {
			"green":  7.3,
			"bamboo": lastVersion,
			"coords": [[9,4]]},
		"Pumpkin": {
			"jack":        6,
			"unlit":       7,
			"lit":         7.4,
			"offset jack": 8.3,
			"round":       lastVersion,
			"creeper":     "alt",
			"coords": [[6,6],[6,7],[7,7],[8,7]]},
		"Shrubs & Saplings": {
			"leafy": 7.4,
			"bushy": lastVersion,
			"coords": [[7,3],[8,3],[15,0],[15,3],[15,4]]},
		"High Grass": {
			"sharp": 7.4,
			"bushy": lastVersion,
			"coords": [[7,2],[10,11],[11,11],[12,11],[13,11],[14,11],[15,11]]},
		"Torch": {
			"slim":       6,
			"guarded":    7.3,
			"reinforced": 7.4,
			"fine":       lastVersion,
			"coords": [[0,5],[0,6]]},
		"Bookshelf": {
			"plain":      7.2,
			"glossy":     7.3,
			"reinforced": 7.4,
			"dark":       lastVersion,
			"coords": [[3,2]]},
		"Workbench": {
			"tools": 7.2,
			"beige": lastVersion,
			"coords": [[11,2],[11,3],[12,3]]},
		"Furnace & Dispenser": {
			"irregular": 8.3,
			"tiled":     lastVersion,
			"coords": [[12,2],[13,2],[14,2],[13,3],[14,3]]},
		"Jukebox": {
			"wooden":   7.2,
			"iron":     7.4,
			"remixed":  8.4,
			"end":      lastVersion,
			"coords": [[10,4],[11,4]]},
		"End Stone & Portal": {
			"cheese": "alt",
			"black":  lastVersion,
			"coords": [[14,9],[15,9],[14,10],[15,10]]},
		"Break Animation": {
			"curly":    3,
			"bashed":   "alt",
			"straight": lastVersion,
			"coords": [[0,15],[1,15],[2,15],[3,15],[4,15],[5,15],[6,15],[7,15],[8,15],[9,15]]},
		"Bed": {
			"brown":    7.3,
			"crimson":  7.4,
			"brownish": lastVersion,
			"creeper": "alt",
			"coords": [[6,8],[7,8],[5,9],[6,9],[7,9],[8,9]]},
		"Web": {
			"dusty": lastVersion,
			"white": "alt",
			"coords": [[11,0]]},
		
		//this setting is used to specify overrides. textures are swapped with it immidiately after initial painting
		"override": {
			"pack": "alt",
			"coords": [
				[3,8], [3,9],          //repeater
				[13,7], [14,7], [13,8] //funghi
			]}
		//TODO (custom alternative): other break anims
	}
};

var versions = {};
for (var settingName in settings) {
	var setting = settings[settingName];
	for (var optionName in setting) {
		var version = setting[optionName];
		if (typeof version == "number" || typeof version == "string")
			versions[version] = true;
	}
}