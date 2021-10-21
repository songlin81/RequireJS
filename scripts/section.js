define([], function () {

    var exportedModule = function () {
        var description = 'Main Section';
        this.getDescription= function () {
            return description;
        }

        this.getVersion = function (){
            return "1.0.0";
        }
    };

    return exportedModule; 
});