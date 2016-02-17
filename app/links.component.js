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
    var LinksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LinksComponent = (function () {
                function LinksComponent() {
                }
                LinksComponent = __decorate([
                    core_1.Component({
                        selector: 'section-links', templateUrl: 'views/links.html', styles: ["\n        ul{\n          list-style-type: none;\n          padding: 0;\n          display:inline-block;\n          width: 100%;\n          background-color: #eeeeee\n        }\n        li{\n            cursor: pointer;\n            display:block;\n            padding-bottom: 15px;\n            padding-top:15px;\n            border-bottom:solid 1px;\n        }\n    "], inputs: ['items']
                    }), 
                    __metadata('design:paramtypes', [])
                ], LinksComponent);
                return LinksComponent;
            })();
            exports_1("LinksComponent", LinksComponent);
        }
    }
});
//# sourceMappingURL=links.component.js.map