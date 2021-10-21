define(['section'], function (s) {

    var section = new s();

    var exportedModule = function () {
        var description = section.getDescription();

        this.saveImage = function (message) {
            console.log(description + " to be saved with param: " + message);
        }
    };

    return exportedModule;  
});