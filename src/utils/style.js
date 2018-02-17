const palette = {
    blue: '#0C1525',
    gold: '#DDA966',
    silver: '#CCCCCC',
    copper: '#b87333',
    ocean: '#57918B',
    teal: '#A7D2CD',
    black: '#191919',
    white: '#E6E6E6'
}

function brightenColor(color, luminosity) {
	// validate hex string
	color = new String(color).replace(/[^0-9a-f]/gi, '');
	if (color.length < 6) {
		color = color[0]+ color[0]+ color[1]+ color[1]+ color[2]+ color[2];
	}
	luminosity = luminosity || 0;
	// convert to decimal and change luminosity
	var newColor = "#", c, i, black = 0, white = 255;
	for (i = 0; i < 3; i++) {
		c = parseInt(color.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(black, c + (luminosity * white)), white)).toString(16);
		newColor += ("00"+c).substr(c.length);
	}
	return newColor; 
}

function getTextStyle( params ) {
    let styleObj = {};
    let color = palette[ params.color ] // To do need to compose the shared features for functions
    if (params.brighten) color = brightenColor(color, params.brighten)
    styleObj.color = color
    return styleObj;
}
function getBackGround( params ) {
    let styleObj = {};
    let color = palette[ params.color ]
    if (params.brighten) color = brightenColor(color, params.brighten)
    styleObj.backgroundColor = color
    return styleObj;
}
function getRoundCorners( params ) {
    // Params cornersMatrix object flattened binary matrix of which corners to round if on (1)
    let styleObj = {};
        if (params.cornersMatrix.charAt(0) == 1)  styleObj.borderTopLeftRadius = params.size;
        if (params.cornersMatrix.charAt(1) == 1)  styleObj.borderTopRightRadius = params.size;
        if (params.cornersMatrix.charAt(2) == 1)  styleObj.borderBottomLeftRadius = params.size;
        if (params.cornersMatrix.charAt(3) == 1)  styleObj.borderBottomRightRadius = params.size;
    return styleObj;
}
function getShadows( params ) {

}
function getBorders( params ) {

}
function getFlex( params ) {

}
function getStates( params ) {

}

function getStyle( params ) {
    let styleObj = {}
    if (params.background) Object.assign( styleObj, getBackGround(params.background) )
    if (params.text) Object.assign( styleObj, getTextStyle(params.text) )
    if (params.corners) Object.assign( styleObj, getRoundCorners(params.corners) )
    return styleObj
}

module.exports.getStyle = getStyle;
module.exports.brightenColor = brightenColor;


