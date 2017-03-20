System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var itemModel;
    return {
        setters:[],
        execute: function() {
            itemModel = (function () {
                function itemModel() {
                }
                itemModel.prototype.getItems = function () {
                    return [
                        { action: "Buy Flowers", done: false },
                        { action: "Get Shoes", done: false },
                        { action: "Collect Tickets", done: true },
                        { action: "Call Joe", done: false }
                    ];
                };
                return itemModel;
            }());
            exports_1("itemModel", itemModel);
        }
    }
});
//# sourceMappingURL=model.js.map