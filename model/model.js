sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"], 
function(JSONModel, ResourceModel){
        return{
            createMyModel: function(filePath){
            var oModel = new JSONModel;
            oModel.loadData(filePath);
            return oModel;
            },
            createXMLModel: function(filePath){
                var oModel = new sap.ui.model.xml.XMLModel();
                oModel.loadData(filePath);
                return oModel;
            },
            createResModel: function(bundleURL){
                var oModel = new ResourceModel({
                    bundleUrl: bundleURL
                });
                return oModel;
            }
        };
});