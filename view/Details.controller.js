sap.ui.controller("com.csw.view.Details", {
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.csw.view.Details
*/
	onInit: function() {
        var oVizFrame2 = this.getView().byId("idoVizFrame2");
        
        var amModel2 = new sap.ui.model.json.JSONModel({

      'measurements' : [ 
          {'measuredAt': "/Date(1423089003038)/", 'value': 10.87, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003039)/", 'value': 38.29, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003040)/", 'value': 87.66, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003041)/", 'value': 70.23, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003042)/", 'value': 70.93, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003043)/", 'value': 15.08, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003044)/", 'value': 10.87, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003045)/", 'value': 38.29, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003046)/", 'value': 87.66, 'unit': "°C"},
          {'measuredAt': "/Date(1423089003047)/", 'value': 38.29, 'unit': "°C"}
         ]
    });

    var oDataset2 = new sap.viz.ui5.data.FlattenedDataset({
      'dimensions' : [ {
        'name' : 'measuredAt',
        'value' : "{measuredAt}"
      } ],
      'measures' : [ {
        'name' : 'Temperature',
        'value' : '{value}'
      } ],
      'data' : {
        'path' : "/measurements"
      }
    });

    var feedPrimaryValues2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
      'uid' : "primaryValues",
      'type' : "Measure",
      'values' : [ "Temperature" ]
    }), feedAxisLabels2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
      'uid' : "axisLabels",
      'type' : "Dimension",
      'values' : [ new sap.viz.ui5.controls.common.feeds.AnalysisObject({
        'uid' : "measuredAt",
        'type' : "Dimension",
        'name' : "measuredAt"
      }) ]

    });

// -------- VizFrame 2 ----------------
    oVizFrame2.setDataset(oDataset2);
    oVizFrame2.setModel(amModel2);
    oVizFrame2.addFeed(feedPrimaryValues2);
    oVizFrame2.addFeed(feedAxisLabels2);
    oVizFrame2.setVizType("line");

    oVizFrame2.setVizProperties({plotArea : {
      isFixedDataPointSize : true,
      categorySize : {
         desktop : {
           minValue : 100
         }
      }
    }
    });  
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.csw.view.Details
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.csw.view.Details
*/
//	onAfterRendering: function(evt) {
//  },
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.csw.view.Details
*/
//	onExit: function() {
//
//	}
    onNavBack: function() {
        app.back();
    }

});