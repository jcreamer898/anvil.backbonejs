define( [ "underscore", "backbone" ], function( _, Backbone ) {
    var {{{collectionName}}} = Backbone.Collection.extend({
    	model: {{{model}}}
    });

    return {{{collectionName}}};
});
