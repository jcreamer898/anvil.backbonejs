var path = require( "path" );

module.exports = function( _, anvil ) {
    var root = path.resolve( __dirname, "../" );

    anvil.scaffold( {
        type: "backbone",
        description: "creates a backbone.js app",
        prompt: [{
            name: "output",
            description: "output",
            required: false,
            "default": "vendor"
        }],
        output: {
            "src/{{{output}}}/backbone-min.js": anvil.scaffold.file( root + "/lib/templates/backbone-min.js" ),
            "src/{{{output}}}/underscore-min.js": anvil.scaffold.file( root + "/lib/templates/underscore-min.js" ),
            "src/{{{output}}}/jquery.min.js": anvil.scaffold.file( root + "/lib/templates/jquery.min.js" )
        }
    });
    
    anvil.scaffold( {
        type: "backbone:model",
        description: "creates a backbone.js model",
        prompt: [
            {
                name: "modelName",
                description: "name",
                required: true
            },
            {
                name: "amd",
                description: "AMD",
                required: true
            },
            {
                name: "modelFolder",
                description: "folder",
                required: true
            }
        ],
        output: {
            "src/{{{modelFolder}}}/{{{modelName}}}.js": function( data, done ) {
                if ( data.amd == "yes" ) {
                    anvil.fs.read( root + "/lib/templates/model.amd.js", done );
                }
                else {
                    anvil.fs.read( root + "/lib/templates/model.js", done );
                }
            }
        }
    });
    
    anvil.scaffold( {
        type: "backbone:view",
        description: "creates a backbone.js view",
        prompt: [
            {
                name: "viewName",
                description: "name",
                required: true
            },
            {
                name: "amd",
                pattern: /yes|no/,
                description: "amd? (yes or no)",
                required: true
            },
            {
                name: "viewFolder",
                description: "folder",
                required: true
            }
        ],
        output: {
            "src/{{{viewFolder}}}/{{{viewName}}}.js": function( data, done ) {
                if ( data.amd == "yes" ) {
                    anvil.fs.read( root + "/lib/templates/view.amd.js", done );
                }
                else {
                    anvil.fs.read( root + "/lib/templates/view.js", done );
                }
            }
        }
    });

    anvil.scaffold( {
        type: "backbone:collection",
        description: "creates a backbone.js collection",
        prompt: [
            {
                name: "collectionName",
                description: "name",
                required: true
            },
            {
                name: "collectionFolder",
                description: "folder",
                required: true
            },
            {
                name: "model",
                description: "model",
                required: true
            },
            {
                name: "amd",
                pattern: /yes|no/,
                description: "amd? (yes or no)",
                required: true
            }
        ],
        output: {
            "src/{{{collectionFolder}}}/{{{collectionName}}}.js": function( data, done ) {
                if ( data.amd == "yes" ) {
                    anvil.fs.read( root + "/lib/templates/collection.amd.js", done );
                }
                else {
                    anvil.fs.read( root + "/lib/templates/collection.js", done );
                }
            }
        }
    });
};