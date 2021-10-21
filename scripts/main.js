require(['section', 'contents/image', 'jQuery'], function(s, i, $){
    var image = new i();
    image.saveImage("Image Id ***");

    $("p").text(new s().getVersion());
});

require.config({
    paths: {
        'jQuery': 'libs/jquery-3.6.0.min',
        'underscore': 'libs/underscore-min'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});