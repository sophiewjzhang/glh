System.register(['angular2/core', './landing-ctadesc.component.ts', './toggle.component', './drop-down.component', './banner-logo.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, landing_ctadesc_component_ts_1, toggle_component_1, drop_down_component_1, banner_logo_component_1;
    var LandingComponent, BTNS, _countryList, _primaryCountryIntro, _primary_country_title, _select_primary_country, _all_other_countries;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_ctadesc_component_ts_1_1) {
                landing_ctadesc_component_ts_1 = landing_ctadesc_component_ts_1_1;
            },
            function (toggle_component_1_1) {
                toggle_component_1 = toggle_component_1_1;
            },
            function (drop_down_component_1_1) {
                drop_down_component_1 = drop_down_component_1_1;
            },
            function (banner_logo_component_1_1) {
                banner_logo_component_1 = banner_logo_component_1_1;
            }],
        execute: function() {
            LandingComponent = (function () {
                function LandingComponent() {
                    this.btns = BTNS;
                    this.selectedCta = BTNS[0];
                    this.content = _primaryCountryIntro;
                    this.primary_country_title = _primary_country_title;
                    this.countryList = _countryList;
                    this.select_primary_country = _select_primary_country;
                    this.all_other_countries = _all_other_countries;
                    this.selectedCountry = { "id": 0, "name": _select_primary_country };
                    this.expandedCountry = true;
                }
                //public curImg=imageId;
                LandingComponent.prototype.onSelect = function (btn) { this.selectedCta = btn; };
                LandingComponent.prototype.expandCountryList = function () { this.expandedCountry = !this.expandedCountry; };
                LandingComponent.prototype.onSelectCountry = function (btn) { this.selectedCountry = btn; };
                LandingComponent.prototype.otherCountry = function () { };
                LandingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'views/landing.html',
                        //template: '<div>test</div><btn-landing [inputBtn]="selectedCta"></btn-landing>',
                        styles: ["\n        .splash{\n            min-height:500px;\n        }\n        .landing-intro{\n            max-width:500px;\n        }\n        .arrow-left:after{\n            content:'U+25C0';\n            font-size:30px;\n            display:inline;\n        }\n        .arrow-right:after{\n            content:'U+25B6';\n            font-size:30px;\n            display:inline;\n        }\n        .page-wrapper-landing{\n\n        }\n        .button-landing{\n\n        }\n        .logo-intro\n        {\n            max-width: 350px;\n            line-height: 2.5em;\n        }\n        .selected {\n          //background-color: #CFD8DC !important;\n          //color: white;\n        }\n        .list-container{\n            position:relative;\n        }\n    "],
                        directives: [banner_logo_component_1.BannerLogoComponent, landing_ctadesc_component_ts_1.LandingCtadescComponent, toggle_component_1.toggleComponent, drop_down_component_1.DropDownComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LandingComponent);
                return LandingComponent;
            })();
            exports_1("LandingComponent", LandingComponent);
            BTNS = [
                { "id": 1, "name": "Select USA", "longName": "select the usa" },
                { "id": 2, "name": "Select Others", "longName": "select the others" }
            ];
            _countryList = [
                /*    { "id": 0, "name": "Others" },*/
                { "id": 1, "name": "Armenia" },
                { "id": 2, "name": "Belarus" },
                { "id": 3, "name": "Bosnia" },
                { "id": 4, "name": "Bulgaria" },
                { "id": 5, "name": "Croatia" },
                { "id": 6, "name": "Cyprus" },
                { "id": 7, "name": "Czech Republic" },
                { "id": 8, "name": "Estonia" },
                { "id": 9, "name": "Hungary" },
                { "id": 10, "name": "Kazakhstan" },
                { "id": 11, "name": "Kosovo" },
                { "id": 12, "name": "Latvia" },
                { "id": 13, "name": "Lithuania" },
                { "id": 14, "name": "Macedonia" },
                { "id": 15, "name": "Poland" },
                { "id": 16, "name": "Romania" },
                { "id": 17, "name": "Russia" },
                { "id": 18, "name": "Serbia" }
            ];
            _primaryCountryIntro = "Your primary country of residence is the country you currently reside and work in and not necessarily your home country. For example, if you are from Australia but working in Croatia - your primary residence is Croatia and your home country is Australia. Depending on your primary country of residence you may be directed to one of our Regional Service Centres.";
            _primary_country_title = "What's your primary country?";
            _select_primary_country = "Select Your Primary Country";
            _all_other_countries = "All Other Countries";
        }
    }
});
/*
var imageId=1, strImgId='image-1';
function changeImage(){
    imageId ++
    if( imageId > 3){
        imageId=1;
    }
    strImgId='image-' + imageId.toString();
    console.log('id:'+strImgId);
    setTimeout( changeImage, 2000)
}

changeImage();
*/
//# sourceMappingURL=landing.component.js.map