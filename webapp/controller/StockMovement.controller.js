sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.sap.stockmovement.controller.StockMovement", {
        onInit: function () {
            this._movement = {
                type: "311",
                plant: "1000",
                fromSloc: "0001",
                toSloc: "0002",
                date: "2026-10-03",
                reason: "01",
                items: []
            };

            this.getView().bindElement({
                path: "/movement",
                model: "movementModel"
            });
        },

        onScanMaterial: function () {
            MessageToast.show("Opening scanner");
        },

        onAddItem: function () {
            const material = this.byId("materialInput").getValue() || "MAT-1001";
            const qty = this.byId("qtyInput").getValue() || "10";
            const batch = this.byId("batchInput").getValue() || "BATCH-001";
            const hu = this.byId("huInput").getValue() || "HU-8890001";

            this._movement.items.push({
                material: material,
                qty: qty,
                batch: batch,
                hu: hu,
                status: "Ready"
            });

            this.byId("itemsTable").getBinding("items").refresh();
            MessageToast.show("Item added to movement");
        },

        onPreview: function () {
            MessageToast.show("Preview posting");
        },

        onConfirm: function () {
            MessageToast.show("Posting confirmed");
        }
    });
});
