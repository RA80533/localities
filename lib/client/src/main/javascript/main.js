/**
 * TODO Write summary
 * 
 * TODO Write description
 */

import $ from "jquery";
import _ from "lodash";

import Backbone from "backbone";

(function () {
	var result = _.map([ 1, 2, 3 ], function (n) { return n * 3; });
	
	console.log(result);
})();

var Books = Backbone.Collection.extend({
	url: "/books",
	
	parse: function (data) {
		return data.books;
	}
});
