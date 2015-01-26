jQuery.sap.declare("com.csw.util.Formatter");

com.csw.util.Formatter = {

    dateIso : function (value) {
		var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd HH:mm"});
		return oDateFormat.format(value, false);
    },

	temperatureValue : function (value) {
		return parseFloat(value).toFixed(1);
	}

};