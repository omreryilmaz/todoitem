System.register(['angular2/core', './model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, model_1;
    var TodoitemsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            TodoitemsComponent = (function () {
                function TodoitemsComponent(m) {
                    this.items = m.getItems();
                }
                TodoitemsComponent = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        template: "<h2>ToDoitem List</h2>\n                <ul>\n                    <li *ngFor=\"#item of items\">\n                        Yap\u0131lacak i\u015F : {{item.action}}  - Durum : {{item.done}}\n                    </li>\n                </ul>\n    ",
                        providers: [model_1.itemModel]
                    }), 
                    __metadata('design:paramtypes', [model_1.itemModel])
                ], TodoitemsComponent);
                return TodoitemsComponent;
            }());
            exports_1("TodoitemsComponent", TodoitemsComponent);
        }
    }
});
//# sourceMappingURL=todoitem.component.js.map