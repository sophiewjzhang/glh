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
    var BannerLogoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BannerLogoComponent = (function () {
                function BannerLogoComponent() {
                }
                BannerLogoComponent = __decorate([
                    core_1.Component({
                        selector: 'banner-logo',
                        template: "\n         <div class=\"row\">\n            <div class=\"col-sm-4 col-md-4 col-lg-2 \">\n                <div class=\"logo alignment-left\"><img src=\"./images/generali_logo.png\"/></div>\n            </div>\n            <div class=\"col-sm-8 col-md-8 col-lg-10 \">\n                <div class=\"alignment-left logo-intro\">\n                    <span class=\"display-block text-h1 color-primary\">Mobile Health Plans from Generali</span>\n                    <span class=\"display-block text-h4 color-primary\">Healthcare without borders</span>\n                </div>\n            </div>\n        </div>\n    ",
                        styles: ["\n        .button-description{\n            color:black\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BannerLogoComponent);
                return BannerLogoComponent;
            })();
            exports_1("BannerLogoComponent", BannerLogoComponent);
        }
    }
});
//# sourceMappingURL=banner-logo.component.js.map