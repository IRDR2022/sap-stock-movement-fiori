sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    return {
        createDeviceModel: function () {
            var oModel = new JSONModel({
                isPhone: sap.ui.Device.system.phone,
                isDesktop: sap.ui.Device.system.desktop,
                isTablet: sap.ui.Device.system.tablet
            });
            return oModel;
        }
    };
});
