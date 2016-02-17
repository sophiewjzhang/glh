import {Component} from 'angular2/core';

@Component({
    selector: 'banner-logo',
    template: `
         <div class="row">
            <div class="col-sm-4 col-md-4 col-lg-2 ">
                <div class="logo alignment-left"><img src="./images/generali_logo.png"/></div>
            </div>
            <div class="col-sm-8 col-md-8 col-lg-10 ">
                <div class="alignment-left logo-intro">
                    <span class="display-block text-h1 color-primary">Mobile Health Plans from Generali</span>
                    <span class="display-block text-h4 color-primary">Healthcare without borders</span>
                </div>
            </div>
        </div>
    `,
    styles:[`
        .button-description{
            color:black
        }
    `]
})

export class BannerLogoComponent {

}