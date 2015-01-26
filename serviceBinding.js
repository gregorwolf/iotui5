function initModel() {
	var sUrl = "/destinations/XSOdataProxy/s0001142741trial/xsdemo/hello/odata/iotscenario.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}
