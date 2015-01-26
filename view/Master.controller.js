jQuery.sap.require("com.csw.util.Formatter");

sap.ui.controller("com.csw.view.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.csw.view.Master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.csw.view.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.csw.view.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.csw.view.Master
*/
//	onExit: function() {
//
//	}
	onSelect : function(oEvent) {
	    var context = oEvent.getSource().getBindingContext();
	    app.to("idDetails", context);
	},
    handleRefresh : function (evt) {
        initModel();
    }
});