import {Component} from 'angular2/core';
import {Cta} from './cta';
import {Item} from './item';
import {LandingCtadescComponent} from './landing-ctadesc.component.ts';
import {toggleComponent} from './toggle.component';
import {DropDownComponent} from './drop-down.component';
import {BannerLogoComponent} from './banner-logo.component';

@Component({
    selector: 'my-app',
    templateUrl: 'views/landing.html',
    //template: '<div>test</div><btn-landing [inputBtn]="selectedCta"></btn-landing>',
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
    directives: [BannerLogoComponent, LandingCtadescComponent, toggleComponent, DropDownComponent]
})
export class LandingComponent {
    public btns = BTNS;
    public selectedCta: Cta=BTNS[0];
    public content=_primaryCountryIntro;
    public primary_country_title=_primary_country_title;
    public countryList=_countryList;
    public select_primary_country=_select_primary_country;
    public all_other_countries=_all_other_countries;
    public selectedCountry:Item= { "id": 0, "name": _select_primary_country };
    public expandedCountry=true;
    //public curImg=imageId;

    onSelect(btn: Cta) { this.selectedCta = btn; }
    public expandCountryList(){ this.expandedCountry= !this.expandedCountry;}
    public onSelectCountry(btn: Item) { this.selectedCountry = btn; }
    public otherCountry(){}
}

var BTNS: Cta[] = [
    { "id": 1, "name": "Select USA", "longName":"select the usa" },
    { "id": 2, "name": "Select Others", "longName":"select the others" }
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

var _primaryCountryIntro="Your primary country of residence is the country you currently reside and work in and not necessarily your home country. For example, if you are from Australia but working in Croatia - your primary residence is Croatia and your home country is Australia. Depending on your primary country of residence you may be directed to one of our Regional Service Centres.";
var _primary_country_title="What's your primary country?";

var _select_primary_country="Select Your Primary Country";

var _all_other_countries="All Other Countries";

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
