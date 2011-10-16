var versions = ["sakofdonuts", 2, 3, 4.1, 5, 6, 7, 7.1, 7.2, 7.3, 7.4, 8.1, 8.3];

var settings = {
	"Dirt and Grass": {
		"icy":  6,
		"warm": 7.4,
		"dark": 8.3,
		"coords": [[2,0],[3,0],[4,4],[6,2]]},
	"Mycelium": {
		"grass": 8.3,
		"squishy": "sakofdonuts",
		"coords": [[13,4],[14,4]]},
	"Stone & Ore": {
		"dark":   6,
		"light":  7.3,
		"cobble": 7.4,
		"big":    8.3,
		"coords": [[1,0], [0,2], [1,2], [2,2], [2,3], [3,3], [0,10]]},
	"Cobble & Moss": {
		"dark":   6,
		"bricks": 7,
		"light":  7.2,
		"round":  7.4,
		"even":   8.3,
		"coords": [[0,1],[4,2]]},
	"Sand": {
		"swirly": 3,
		"flat":   7.3,
		"wavey":  7.4,
		"dark":   8.3,
		"coords": [[2,1]]},
	"Stone Slab": {
		"cobble":   6,
		"shaded":   7,
		"unshaded": 7.2,
		"rough":    7.3,
		"double":   7.4,
		"smooth":   8.3,
		"coords": [[5,0],[6,0]]},
	"Planks": {
		"light": 6,
		"mixed": 7,
		"dark":  8.3,
		"coords": [[4,0]]},
	"Brickwall": {
		"stone":      6,
		"mortarless": 7,
		"mortar":     7.3,
		"3d":         7.4,
		"rough":      8.3,
		"coords": [[7,0]]},
	"TNT": {
		"sticks": 6,
		"boxed":  8.3,
		"coords": [[8,0],[9,0],[10,0]]},
	"Mineral blocks": {
		"solid":  7.3,
		"framed": 8.3,
		"coords": [[6,1],[7,1],[8,1],[0,9]]},
	"Obsidian": {
		"firey": 6,
		"black": 8.3,
		"coords": [[5,2]]},
	"Nether": {
		"low contrast":  6,
		"high contrast": 8.3,
		"coords": [[7,6],[8,6]]},
	"Wool": {
		"rough":     6,
		"stitched":  7.1,
		"smooth":    7.2,
		"patterned": 7.3,
		"smoother":  7.4,
		"3d":        8.3,
		"coords": [[0,4],
			[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
			[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13]]},
	"Clay": {
		"smooth":  7.4,
		"swirly":  8.3,
		"coords": [[8,4]]},
	"Log": {
		"round":    3,
		"cornered": 7.4,
		"dark":     8.3,
		"coords": [[4,1],[5,1]]},
	"Wooden door": {
		"crude planks": 3,
		"fancy window": 6,
		"plain window": 7.4,
		"beige":        8.3,
		"coords": [[1,5],[1,6]]},
	"Iron door": {
		"bars":   7.4,
		"heavy":  8.3,
		"framed": "sakofdonuts",
		"coords": [[2,5],[2,6]]},
	"Ladder": {
		"bound":   7,
		"loose":   7.3,
		"looser": "sakofdonuts",
		"nailed":  7.4,
		"sparse":  8.3,
		"coords": [[3,5]]},
	"Trapdoor": {
		"solid":  8.3,
		"grate": "sakofdonuts",
		"coords": [[4,5]]},
	"Glass": {
		"light frame": 6,
		"heavy frame": 7,
		"only frame":  7.1,
		"grate":       7.3,
		"mini grate":  7.4,
		"fine":        8.3,
		"wood frame":  "sakofdonuts",
		"coords": [[1,3]]},
	"Glowstone": {
		"organic":    6,
		"frame":      7,
		"asian":      7.1,
		"grate":      7.3,
		"mini grate": 7.4,
		"pale":       8.1,
		"lantern":    8.3,
		"wood frame": "sakofdonuts",
		"coords": [[9,6]]},
	"Wheat": {
		"chaotic":  6,
		"upright":  7.4,
		"wild":     8.3,
		"vertical": "sakofdonuts",
		"coords": [[8,5],[9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5]]},
	"Shrooms": {
		"skinny": 8.3,
		"fat":    "sakofdonuts",
		"coords": [[12,1],[13,1]]},
	"Cactus": {
		"smooth": 5,
		"pointy": 7.3,
		"edgy":   8.3,
		"coords": [[5,4],[6,4],[7,4]]},
	"Sugar Cane": {
		"green":  7.3,
		"bamboo": 8.3,
		"coords": [[9,4]]},
	"Pumpkin": {
		"jack":        6,
		"unlit":       7,
		"lit":         7.4,
		"offset jack": 8.3,
		"creeper": "sakofdonuts",
		"coords": [[6,6],[6,7],[7,7],[8,7]]},
	"Shrubs & Saplings": {
		"leafy": 7.4,
		"bushy": 8.3,
		"coords": [[7,3],[8,3],[15,0],[15,3],[15,4]]},
	"High Grass": {
		"sharp": 7.4,
		"bushy": 8.3,
		"coords": [[7,2],[10,11],[11,11],[12,11],[13,11],[14,11],[15,11]]},
	"Torch": {
		"slim":       6,
		"guarded":    7.3,
		"reinforced": 7.4,
		"fine":       8.3,
		"coords": [[0,5],[0,6]]},
	"Bookshelf": {
		"plain":      7.2,
		"glossy":     7.3,
		"reinforced": 7.4,
		"dark":       8.3,
		"coords": [[3,2]]},
	"Workbench": {
		"tools": 7.2,
		"beige": 8.3,
		"coords": [[11,2],[11,3],[12,3]]},
	"Jukebox": {
		"wooden":  7.2,
		"iron":    7.4,
		"remixed": 8.3,
		"coords": [[10,4],[11,4]]},
	"Break Animation": {
		"curly":    3,
		"bashed":   4.1,
		"straight": 8.3,
		"coords": [[0,15],[1,15],[2,15],[3,15],[4,15],[5,15],[6,15],[7,15],[8,15],[9,15]]},
	"Bed": {
		"brown":    7.3,
		"crimson":  7.4,
		"brownish": 8.3,
		"creeper": "sakofdonuts",
		"coords": [[6,8],[7,8],[5,9],[6,9],[7,9],[8,9]]},
	"Web": {
		"dusty": 8.3,
		"white": "sakofdonuts",
		"coords": [[11,0]]},
	
	//this setting is used to specify overrides. textures are sawpped with it immidiately after initial painting
	"override": {
		"pack": "sakofdonuts",
		"coords": [
			[3,8], [3,9],                     //repeater
			[8,8], [9,8],                     //melon
			[15,6], [15,7],                   //stems
			[13,7], [14,7], [13,8],           //funghi
			[10,8], [11,8], [10,9], [11,9],   //cauldron
			[12,9], [13,9],                   //brewing stand
			[14,9], [15,9], [14,10], [15,10], //whitestone, end portal
			[6,10], [6,11], [7,11]            //enchanting table
		]}
	//TODO (custom alternative): other break anims
	//TODO: externalize
};