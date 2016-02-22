System.register(['angular2/core', './drop-down.component', './search-claims.component', './find-a-doctor.component', './contact.component', './banner-logo.component', './footer.component', './links.component.ts', './toggle-icon.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, drop_down_component_1, search_claims_component_1, find_a_doctor_component_1, contact_component_1, banner_logo_component_1, footer_component_1, links_component_ts_1, toggle_icon_component_1;
    var HomeComponent, BTNS, _countryList, _menus, _primaryCountryIntro, _primary_country_title, _select_primary_country, _all_other_countries, _forms, _videos, _resources;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (drop_down_component_1_1) {
                drop_down_component_1 = drop_down_component_1_1;
            },
            function (search_claims_component_1_1) {
                search_claims_component_1 = search_claims_component_1_1;
            },
            function (find_a_doctor_component_1_1) {
                find_a_doctor_component_1 = find_a_doctor_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (banner_logo_component_1_1) {
                banner_logo_component_1 = banner_logo_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (links_component_ts_1_1) {
                links_component_ts_1 = links_component_ts_1_1;
            },
            function (toggle_icon_component_1_1) {
                toggle_icon_component_1 = toggle_icon_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.btns = BTNS;
                    this.selectedCta = BTNS[0];
                    this.content = _primaryCountryIntro;
                    this.primary_country_title = _primary_country_title;
                    this.countryList = _countryList;
                    this.menus = _menus;
                    this.select_primary_country = _select_primary_country;
                    this.all_other_countries = _all_other_countries;
                    this.selectedCountry = { "id": 0, "name": _select_primary_country };
                    this.expandedCountry = true;
                    this.forms = _forms;
                    this.videos = _videos;
                    this.resources = _resources;
                    this.topMenuExpandded = false;
                    this.expandedContactGeneral = false;
                    this.expandedAssitanceCIS = false;
                    this.expandedRSC = false;
                    this.expandedTools = false;
                }
                //public curImg=imageId;
                HomeComponent.prototype.onSelect = function (btn) { this.selectedCta = btn; };
                HomeComponent.prototype.expandCountryList = function () { this.expandedCountry = !this.expandedCountry; };
                HomeComponent.prototype.onSelectCountry = function (btn) { this.selectedCountry = btn; };
                HomeComponent.prototype.otherCountry = function () { };
                HomeComponent.prototype.onSelectMenu = function (btn) { this.selectedMenu = btn; };
                HomeComponent.prototype.expandTopMenu = function () { this.topMenuExpandded = !this.topMenuExpandded; };
                HomeComponent.prototype.toggle = function (flag) { this[flag] = !this[flag]; };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'views/home.html',
                        styles: ["\n        .splash{\n            min-height:500px;\n        }\n        .landing-intro{\n            max-width:500px;\n        }\n        .arrow-left:after{\n            content:'U+25C0';\n            font-size:30px;\n            display:inline;\n        }\n        .arrow-right:after{\n            content:'U+25B6';\n            font-size:30px;\n            display:inline;\n        }\n        .page-wrapper-landing{\n\n        }\n        .button-landing{\n\n        }\n        ul.menu a{\n            color:#ffffff;\n            text-decoration:none;\n        }\n        ul.menu li:hover{\n            background-color:#7e1226;\n        }\n        .logo-intro\n        {\n            max-width: 350px;\n            line-height: 2.5em;\n        }\n        .selected {\n          //background-color: #CFD8DC !important;\n          //color: white;\n        }\n        .list-container{\n            position:relative;\n        }\n    "],
                        directives: [drop_down_component_1.DropDownComponent, banner_logo_component_1.BannerLogoComponent, footer_component_1.FooterComponent, toggle_icon_component_1.toggleIconComponent, search_claims_component_1.SearchClaimsComponent, find_a_doctor_component_1.FindADoctorComponent, contact_component_1.ContactComponent, links_component_ts_1.LinksComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
            BTNS = [
                { "id": "1", "name": "Select USA", "longName": "select the usa" },
                { "id": "2", "name": "Select Others", "longName": "select the others" }
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
            _menus = [
                { "id": "section-search-claim", "name": "Search Claim", "longName": "" },
                { "id": "section-find-a-doctor", "name": "Find A Doctor", "longName": "" },
                { "id": "section-contact", "name": "Contact Us", "longName": "" },
                { "id": "section-tools", "name": "Tools", "longName": "" }
            ];
            _primaryCountryIntro = "Your primary country of residence is the country you currently reside and work in and not necessarily your home country. For example, if you are from Australia but working in Croatia - your primary residence is Croatia and your home country is Australia. Depending on your primary country of residence you may be directed to one of our Regional Service Centres.";
            _primary_country_title = "What's your primary country?";
            _select_primary_country = "Select Your Primary Country";
            _all_other_countries = "All Other Countries";
            _forms = [
                { "id": "#link1", "name": "Claim Form (Manual)", "longName": "" },
                { "id": "#link2", "name": "Claim Form (Online)", "longName": "" },
                { "id": "#link3", "name": "Italiano Modulo (Manuale)", "longName": "" },
                { "id": "#link4", "name": "Italiano Modulo (Online)", "longName": "" },
                { "id": "#link5", "name": "Forma de Reclamo (Manual)", "longName": "" },
                { "id": "#link6", "name": "Forma de Reclamo (En Línea)", "longName": "" },
                { "id": "#link7", "name": "Formulaire de déclaration de sinistre (en ligne)", "longName": "" },
                { "id": "#link8", "name": "Formulaire de déclaration de sinistre (par courrier)", "longName": "" },
                { "id": "#link9", "name": "Pre-Authorisation Form (Manual)", "longName": "" },
                { "id": "#link10", "name": "Pre-Authorisation Form (Online)", "longName": "" },
                { "id": "#link11", "name": "Formulario De Autorización Previa (Manual)", "longName": "" },
                { "id": "#link12", "name": "Formulario De Autorización Previa (En Linea)", "longName": "" },
            ];
            _videos = [
                { "id": "#link1", "name": "Generali Mobile Website and Provider Search", "longName": "" },
                { "id": "#link2", "name": "Generali Member Portal – How to log in for the first time", "longName": "" },
                { "id": "#link3", "name": "Generali Member Portal – How to navigate the portal", "longName": "" },
                { "id": "#link4", "name": "Generali Member Portal – How to submit claims online", "longName": "" }
            ];
            _resources = [
                { "id": "#link1", "name": "Member Portal Overview & Instructions", "longName": "" },
                { "id": "#link2", "name": "Portail de Membres Aperçu & Instructions", "longName": "" },
                { "id": "#link3", "name": "Portal para Miembros Información General & Instrucciones", "longName": "" },
                { "id": "#link4", "name": "Portale Utente Informazioni Generali e Istruzioni", "longName": "" },
                { "id": "#link5", "name": "Wire Transfer Information", "longName": "" }
            ];
        }
    }
});
//# sourceMappingURL=home.component.js.map