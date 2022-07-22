sap.ui.define(
    ["sap/ui/core/mvc/Controller", "scooby/model/model", "sap/ui/core/format/NumberFormat"],
    function(Controller, AnubhavJS, NumberFormat){
        return Controller.extend("scooby.controller.MyXML",{
            // newLogic: function(){
            //     // alert("Salaam rocky bhai!! salaam rocky bhai!!")
            //     // var obtn= this.getView().byId("idZumba");
            //     // obtn.setText("Dhinga CHika")

            //     // var inpUser = this.getView().byId("username").getValue();
            //     // var inppwd =  this.getView().byId("password").getValue();
            //     // alert(inpUser+ " "+ inppwd);

            //     var ibtn = this.getView().byId("idZumba");
            //     var parent = ibtn.getParent().getParent().getParent();
            //     console.log(parent.getId());
            // }

            onInit: function(){
                // var oModel = new sap.ui.model.json.JSONModel();
                // oModel.loadData("model/mockData/mydata.json");
                // sap.ui.getCore().setModel(oModel);

                var oModel1 = AnubhavJS.createMyModel("model/mockdata/mydata.json");
                var oModel2 = AnubhavJS.createMyModel("model/mockdata/mydata2.json");

                sap.ui.getCore().setModel(oModel1);
                sap.ui.getCore().setModel(oModel2, "jerry");

                oModel3 = AnubhavJS.createXMLModel("model/mockdata/myXData.xml");
                sap.ui.getCore().setModel(oModel3);
                // oModel.setDefaultBindingMode("OneWay");

                oModel4 = AnubhavJS.createResModel("i18n/i18n.properties");
                sap.ui.getCore().setModel(oModel4, "i18n");
            },

            onRowSel: function(oEvent){
                // which row was selected?
                var oRowEvent  = oEvent.getParameter("rowContext");
                var sPath = oRowEvent.getPath();
                var oForm = this.getView().byId("myForm");
                oForm.bindElement(sPath);

            },
            onFlip: function(){
                var oModel1 = sap.ui.getCore().getModel();
                var oModel2 = sap.ui.getCore().getModel("jerry");
                sap.ui.getCore().setModel(oModel2);
                sap.ui.getCore().setModel(oModel1, "jerry");
            },
            magicUC: function(empname){
                if(empname){
                    return empname.toUpperCase();
                }
            },

            convertCurr: function(amount, currCode){
                var oCurrencyFormat = NumberFormat.getCurrencyInstance();
                return oCurrencyFormat.format(amount, currCode);
            },

            onAfterRendering: function(){
                // alert("yes");
                // $("idMyXML----Form").css("background-color", "red");

                // var empVal = this.getView().byId("idEmpId");
                // empVal.setValue("100");
                // var osal = this.getView().byId("idSalary");
                // osal = { = ( };

            },

            // Alternate way
            newLogic: function(defEvent){
                var ibtn = defEvent.getSource();
                var parent = ibtn.getParent().getParent().getParent();
                console.log(parent.getId());
            }

            
        });
    }
)