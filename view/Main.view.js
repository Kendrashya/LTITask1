sap.ui.jsview("scooby.view.Main",{

    getControllerName: function(){
        return "scooby.controller.MyCon";

    },
    
    createContent: function(oController){

        var input = new sap.m.Input("idInp", {
            width: "10%"
        });

        var newName = new sap.m.Button("idBtn", {
            text: "KD is here",
            icon: "sap-icon://add-employee",
            // press: function(){
            //     alert("idInp.value");
            // }
            press: oController.welcome
        });
        
        return [input,newName];
    }
});
