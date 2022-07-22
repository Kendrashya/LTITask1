sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(oMVCCont){
        return oMVCCont.extend("scooby.controller.MyCon", {
            welcome: function(){
                // return alert("Welcome to KD's Kingdom")

                var oCore = sap.ui.getCore();
                var oMario = oCore.byId("idBtn");
                oMario.setText("Welcome to KKK");

                var inp = oCore.byId("idInp");
                var valueget = inp.getValue();
                oMario.setText(valueget);
            }
        });
    }
)