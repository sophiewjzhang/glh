import {Component} from 'angular2/core';
import {Cta} from './cta';
import {Item} from './item';
import {DropDownComponent} from './drop-down.component';
import {SearchClaimsComponent} from './search-claims.component';
import {FindADoctorComponent} from './find-a-doctor.component';
import {ContactComponent} from './contact.component';
import {BannerLogoComponent} from './banner-logo.component';
import {FooterComponent} from './footer.component';
import {LinksComponent} from './links.component.ts';

@Component({
    selector: 'my-app',
    templateUrl: 'views/home.html',
    styles:[`
        .splash{
            min-height:500px;
        }
        .landing-intro{
            max-width:500px;
        }
        .arrow-left:after{
            content:'U+25C0';
            font-size:30px;
            display:inline;
        }
        .arrow-right:after{
            content:'U+25B6';
            font-size:30px;
            display:inline;
        }
        .page-wrapper-landing{

        }
        .button-landing{

        }
        ul.menu a{
            color:#ffffff;
            text-decoration:none;
        }
        ul.menu li:hover{
            background-color:#7e1226;
        }
        .logo-intro
        {
            max-width: 350px;
            line-height: 2.5em;
        }
        .selected {
          //background-color: #CFD8DC !important;
          //color: white;
        }
        .list-container{
            position:relative;
        }
    `],
    directives: [DropDownComponent, BannerLogoComponent, FooterComponent, SearchClaimsComponent, FindADoctorComponent, ContactComponent, LinksComponent]
})
export class HomeComponent {
    public btns = BTNS;
    public selectedCta: Cta=BTNS[0];
    public content=_primaryCountryIntro;
    public primary_country_title=_primary_country_title;
    public countryList=_countryList;
    public menus=_menus;
    public selectedMenu:Cta;
    public select_primary_country=_select_primary_country;
    public all_other_countries=_all_other_countries;
    public selectedCountry:Item= { "id": 0, "name": _select_primary_country };
    public expandedCountry=true;
    public forms=_forms;
    public videos=_videos;
    public resources=_resources;
    public topMenuExpandded=false;
    //public curImg=imageId;

    onSelect(btn: Cta) { this.selectedCta = btn; }
    public expandCountryList(){ this.expandedCountry= !this.expandedCountry;}
    public onSelectCountry(btn: Item) { this.selectedCountry = btn; }
    public otherCountry(){}
    public onSelectMenu(btn: Cta) { this.selectedMenu = btn; }
    public expandTopMenu(){ this.topMenuExpandded = !this.topMenuExpandded;}
}

var BTNS: Cta[] = [
    { "id": "1", "name": "Select USA", "longName":"select the usa" },
    { "id": "2", "name": "Select Others", "longName":"select the others" }
];

var _countryList: Item[]=[
/*    { "id": 0, "name": "Others" },*/
    { "id": 1, "name": "Armenia" },
    { "id": 2, "name": "Belarus"},
    { "id": 3, "name": "Bosnia" },
    { "id": 4, "name": "Bulgaria"},
    { "id": 5, "name": "Croatia" },
    { "id": 6, "name": "Cyprus"},
    { "id": 7, "name": "Czech Republic" },
    { "id": 8, "name": "Estonia"},
    { "id": 9, "name": "Hungary" },
    { "id": 10, "name": "Kazakhstan"},
    { "id": 11, "name": "Kosovo" },
    { "id": 12, "name": "Latvia"},
    { "id": 13, "name": "Lithuania" },
    { "id": 14, "name": "Macedonia"},
    { "id": 15, "name": "Poland" },
    { "id": 16, "name": "Romania"},
    { "id": 17, "name": "Russia"},
    { "id": 18, "name": "Serbia"}
];

var _menus: Cta[]=[
    { "id": "section-search-claim", "name": "Search Claim", "longName":"" },
    { "id": "section-find-a-doctor", "name": "Find A Doctor", "longName":""  },
    { "id": "section-contact", "name": "Contact Us", "longName":""  },
    { "id": "section-tools", "name": "Tools", "longName":"" }
];

var _primaryCountryIntro="Your primary country of residence is the country you currently reside and work in and not necessarily your home country. For example, if you are from Australia but working in Croatia - your primary residence is Croatia and your home country is Australia. Depending on your primary country of residence you may be directed to one of our Regional Service Centres.";
var _primary_country_title="What's your primary country?";

var _select_primary_country="Select Your Primary Country";

var _all_other_countries="All Other Countries";

var _forms: Cta[]=[
    { "id": "#link1", "name": "Claim Form (Manual)", "longName":"" },
    { "id": "#link2", "name": "Claim Form (Online)", "longName":""  },
    { "id": "#link3", "name": "Italiano Modulo (Manuale)", "longName":""  },
    { "id": "#link4", "name": "Italiano Modulo (Online)", "longName":"" },
    { "id": "#link5", "name": "Forma de Reclamo (Manual)", "longName":""  },
    { "id": "#link6", "name": "Forma de Reclamo (En Línea)", "longName":""  },
    { "id": "#link7", "name": "Formulaire de déclaration de sinistre (en ligne)", "longName":"" },
    { "id": "#link8", "name": "Formulaire de déclaration de sinistre (par courrier)", "longName":""  },
    { "id": "#link9", "name": "Pre-Authorisation Form (Manual)", "longName":""  },
    { "id": "#link10", "name": "Pre-Authorisation Form (Online)", "longName":"" },
    { "id": "#link11", "name": "Formulario De Autorización Previa (Manual)", "longName":""  },
    { "id": "#link12", "name": "Formulario De Autorización Previa (En Linea)", "longName":""  },
];

var _videos: Cta[]=[
    { "id": "#link1", "name": "Generali Mobile Website and Provider Search", "longName":"" },
    { "id": "#link2", "name": "Generali Member Portal – How to log in for the first time", "longName":""  },
    { "id": "#link3", "name": "Generali Member Portal – How to navigate the portal", "longName":""  },
    { "id": "#link4", "name": "Generali Member Portal – How to submit claims online", "longName":"" }
];


var _resources: Cta[]=[
    { "id": "#link1", "name": "Member Portal Overview & Instructions", "longName":"" },
    { "id": "#link2", "name": "Portail de Membres Aperçu & Instructions", "longName":""  },
    { "id": "#link3", "name": "Portal para Miembros Información General & Instrucciones", "longName":""  },
    { "id": "#link4", "name": "Portale Utente Informazioni Generali e Istruzioni", "longName":"" },
    { "id": "#link5", "name": "Wire Transfer Information", "longName":""  }
];
