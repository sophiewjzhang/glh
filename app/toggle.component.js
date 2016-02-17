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
    var toggleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            toggleComponent = (function () {
                function toggleComponent() {
                    this.expanded = false;
                }
                toggleComponent.prototype.toggle = function () {
                    this.expanded = !this.expanded;
                };
                toggleComponent = __decorate([
                    core_1.Component({
                        selector: 'toggle-content',
                        template: "\n        <div class=\"toggle-container padding-top-s-m\">\n            <div class=\"toggle-panel cursor-pointer\"\n                (click)=\"toggle()\">\n                <span *ngIf=\"!expanded\" class=\"icon icon-expand\" ></span>\n                <span *ngIf=\"expanded\" class=\"icon icon-collapse\"></span>\n                <span class=\"display-inline-block margin-left-s-m\">{{title}}</span>\n            </div>\n            <div *ngIf=\"expanded\" class=\"toggle-content padding-all-s-m alignment-left\">{{content}}</div>\n        </div>\n    ",
                        styles: ["\n        .toggle-content{\n            background-color:#ffffff;\n        }\n        .toggle-panel{\n            background-color:#eeeeee;\n        }\n        .icon{\n            font-size:20px;\n            width:30px;\n            height:30px;\n            background-color: #ff0000;\n            display: inline-block;\n            padding: 5px 5px 5px 5px;\n            line-height: 1em;\n            vertical-align: middle;\n        }\n        .icon-expand:after{\n            content:\"\u25BC\"\n        }\n        .icon-collapse:after{\n            content:\"\u25B2\"\n        }\n    "],
                        inputs: ['content', 'title']
                    }), 
                    __metadata('design:paramtypes', [])
                ], toggleComponent);
                return toggleComponent;
            })();
            exports_1("toggleComponent", toggleComponent);
        }
    }
});
//# sourceMappingURL=toggle.component.js.map