var versions = ["sakofdonuts", 2, 3, 4.1, 5, 6, 7, 7.1, 7.2, 7.3, 7.4];

var settings = {
	"Stone & Ore": {
		"dark":   6,
		"light":  7.3,
		"cobble": 7.4,
		"coords": [[1,0], [0,2], [1,2], [2,2], [2,3], [3,3], [0,10]]},
	"Cobble & Moss": {
		"dark":   6,
		"bricks": 7,
		"light":  7.2,
		"round":  7.4,
		"coords": [[0,1],[4,2]]},
	"Sand": {
		"swirly": 3,
		"flat":   7.3,
		"wavey":  7.4,
		"coords": [[2,1]]},
	"Stone Slab": {
		"cobble":   6,
		"shaded":   7,
		"unshaded": 7.2,
		"rough":    7.3,
		"double":   7.4,
		"coords": [[5,0],[6,0]]},
	"Planks": {
		"light": 6,
		"mixed": 7,
		"dark":  7.4,
		"coords": [[4,0]]},
	"Brickwall": {
		"stone":      6,
		"mortarless": 7,
		"mortar":     7.3,
		"3d":         7.4,
		"coords": [[7,0]]},
	"TNT": {
		"sticks": 6,
		"boxed":  7.4,
		"coords": [[8,0],[9,0],[10,0]]},
	"Mineral blocks": {
		"solid":  7.3,
		"framed": 7.4,
		"coords": [[6,1],[7,1],[8,1],[0,9]]},
	"Obsidian": {
		"firey": 6,
		"black": 7.4,
		"coords": [[5,2]]},
	"Nether": {
		"low contrast":  6,
		"high contrast": 7.4,
		"coords": [[7,6],[8,6]]},
	"Wool": {
		"rough":     6,
		"stitched":  7.1,
		"smooth":    7.2,
		"patterned": 7.3,
		"smoother":  7.4,
		"coords": [[0,4],
			[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],
			[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13]]},
	"Log": {
		"round":    3,
		"cornered": 7.4,
		"coords": [[4,1],[5,1]]},
	"Iron door": {
		"bars":   7.4,
		"framed": "sakofdonuts",
		"coords": [[2,5],[2,6]]},
	"Wooden door": {
		"crude planks": 3,
		"fancy window": 6,
		"plain window": 7.4,
		"coords": [[1,5],[1,6]]},
	"Ladder": {
		"bound":    7,
		"loose":   7.3,
		"loose 2": "sakofdonuts",
		"nailed":  7.4,
		"coords": [[3,5]]},
	"Trapdoor": {
		"solid":  7.4,
		"grate": "sakofdonuts",
		"coords": [[4,5]]},
	"Glass": {
		"light frame": 6,
		"heavy frame": 7,
		"only frame":  7.1,
		"grate":       7.3,
		"mini grate":  7.4,
		"wood frame":  "sakofdonuts",
		"coords": [[1,3]]},
	"Glowstone": {
		"organic":    6,
		"frame":      7,
		"asian":      7.1,
		"grate":      7.3,
		"mini grate": 7.4,
		"wood frame": "sakofdonuts",
		"coords": [[9,6]]},
	"Wheat": {
		"chaotic":  6,
		"upright":  7.4,
		"vertical": "sakofdonuts",
		"coords": [[8,5],[9,5],[10,5],[11,5],[12,5],[13,5],[14,5],[15,5]]},
	"Shrooms": {
		"skinny": 7.4,
		"fat":    "sakofdonuts",
		"coords": [[12,1],[13,1]]},
	"Cactus": {
		"smooth": 5,
		"pointy": 7.3,
		"edgy":   7.4,
		"coords": [[5,4],[6,4],[7,4]]},
	"Sugar Cane": {
		"green":  7.3,
		"bamboo": 7.4,
		"coords": [[9,4]]},
	"Snowy grass": {
		"iced":   6,
		"topped": 7.4,
		"coords": [[4,4]]},
	"Pumpkin": {
		"jack":  6,
		"unlit": 7,
		"lit":   7.4,
		"creeper": "sakofdonuts",
		"coords": [[6,6],[6,7],[7,7],[8,7]]},
	"Torch": {
		"slim":       6,
		"guarded":    7.3,
		"reinforced": 7.4,
		"coords": [[0,5]]},
	"Bookshelf": {
		"plain":      7.2,
		"glossy":     7.3,
		"reinforced": 7.4,
		"coords": [[3,2]]},
	"Jukebox": {
		"wooden": 7.2,
		"iron":   7.4,
		"coords": [[10,4],[11,4]]},
	"Break Animation": {
		"curly":    3,
		"bashed":   4.1,
		"straight": 7.3,
		"coords": [[0,15],[1,15],[2,15],[3,15],[4,15],[5,15],[6,15],[7,15],[8,15],[9,15]]},
	"Bed": {
		"brown":   7.3,
		"crimson": 7.4,
		"creeper": "sakofdonuts",
		"coords": [[6,8],[7,8],[5,9],[6,9],[7,9],[8,9]]},
	
	//this setting is used to specify overrides. textures are sawpped with it immidiately after initial painting
	"override": {
		"pack": "sakofdonuts",
		"coords": [
			[11,0],      //web
			[3,8], [3,9] //repeater
		]}
	//TODO (custom alternative): other break anims
	//TODO: externalize
};