System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DropDownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DropDownComponent = (function () {
                function DropDownComponent() {
                    this.expanded = true;
                }
                DropDownComponent.prototype.onClick = function () { this.expanded = !this.expanded; };
                DropDownComponent.prototype.onSelectCountry = function (btn) { this.selectedCountry = btn; };
                DropDownComponent = __decorate([
                    core_1.Component({
                        selector: 'drop-down',
                        template: "\n            <ul class=\"drop-down-list\" *ngIf=\"expanded\">\n                <li *ngFor=\"#item of items\"\n                    class=\"cursor-pointer\">\n                    <span [class.selected]=\"item === selectedItem\"\n                          (click)=\"onSelectCountry(item)\"\n                        class=\"padding-all-s-m\">{{item.name}}</span>\n                </li>\n            </ul>\n    ",
                        styles: ["\n        li{\n            :hover{\n                background-color:#cccccc;\n            }\n        }\n        li{\n            list-style: none;\n            display:block;\n        }\n        li:hover{\n            background-color:#cccccc;\n        }\n        .selected{\n            background-color:#cc0000;\n            color: white;\n            height:30px;\n        }\n    "],
                        inputs: ['items', 'selectedCountry']
                    }), 
                    __metadata('design:paramtypes', [])
                ], DropDownComponent);
                return DropDownComponent;
            })();
            exports_1("DropDownComponent", DropDownComponent);
        }
    }
});
//# sourceMappingURL=drop-down.component.js.map