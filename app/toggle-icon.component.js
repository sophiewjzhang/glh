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
    var toggleIconComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            toggleIconComponent = (function () {
                function toggleIconComponent() {
                }
                toggleIconComponent.prototype.toggle = function () {
                    this.expanded = !this.expanded;
                };
                toggleIconComponent = __decorate([
                    core_1.Component({
                        selector: 'toggle-icon',
                        template: "\n        <div class=\"toggle-switch cursor-pointer display-inline-block\" (click)=\"toggle\">\n            <span *ngIf=\"!expanded\" class=\"icon icon-expand\" ></span>\n            <span *ngIf=\"expanded\" class=\"icon icon-collapse\"></span>\n            <!--<span class=\"display-inline-block margin-left-s-m\">+</span>-->\n        </div>\n    ",
                        styles: ["\n        .toggle-switch{\n            position: absolute;\n            right:15px;\n            top:8px;\n        }\n        .icon{\n            font-size: 12px;\n            width: 22px;\n            height: 22px;\n            color: #333;\n            background-color: #cc0000;\n            display: inline-block;\n            padding: 5px 5px 5px 5px;\n            line-height: 1em;\n            vertical-align: middle;\n        }\n        .icon-expand:after{\n            content:\"\u25BC\"\n        }\n        .icon-collapse:after{\n            content:\"\u25B2\"\n        }\n    "],
                        inputs: ['expanded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], toggleIconComponent);
                return toggleIconComponent;
            })();
            exports_1("toggleIconComponent", toggleIconComponent);
        }
    }
});
//# sourceMappingURL=toggle-icon.component.js.map