/**
*
*	MINIMAL HTML ELEMENT
*
*
*	DESCRIPTION:
*		- Factory for creating minimal DOM-like HTML elements.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var // Parent class:
		Uber = require( 'minimal-element-class' ),

		// Dictionary of HTML elements:
		dict = require( 'html-element-dictionary' );


	// HTML ELEMENT //

	/**
	* FUNCTION: Element( name )
	*	HTML element constructor.
	*
	* @constructor
	* @param {String} name - element name
	* @returns {Element} Element instance
	*/
	function Element( name ) {
		Uber.call( this );
		this._name = name;
		this._selfClosing = dict[ name ].selfClosing;
		return this;
	} // end FUNCTION Element()

	/**
	* Create a prototype which inherits from the parent prototype.
	*/
	Element.prototype = Object.create( Uber.prototype );

	/**
	* Set the constructor.
	*/
	Element.prototype.constructor = Element;

	
	// EXPORTS //

	module.exports = function createHTMLElement( name ) {
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'createHTMLElement()::invalid input argument. Name must be a string.' );
		}
		if ( !dict[ name ] ) {
			throw new Error( 'createHTMLElement()::invalid input argument. Unrecognized element name.' );
		}
		return new Element( name );
	};

})();