var createHTMLElement = require( './../lib' );

// Create a new parent container...

var container = createHTMLElement( 'div' );
container.attr( 'class', 'container' );

// Build other components...

var fig = createHTMLElement( 'figure' );
fig.attr( 'class', 'figure' );

var caption = createHTMLElement( 'figcaption' );
caption.attr( 'class', 'caption' );

// Create the document structure...

container.append( fig );
fig.append( caption );

// Serialize to string...

console.log( container.toString() );
// Returns: '<div class="container"><figure class="figure"><figcaption class="caption"></figcaption></figure></div>'