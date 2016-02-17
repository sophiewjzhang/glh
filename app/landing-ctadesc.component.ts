import {Component} from 'angular2/core';
import {Cta} from './cta';

@Component({
    selector: 'btn-landing',
/*    template: `
    <div *ngIf="btn">
        <div class="button-description">{{btn.longDescription}}</div>
    </div>
  `,*/
    template: `<div class="button-description">{{inputBtn.name}}</div>`,
    styles:[`
        .button-description{
            color:black
        }
    `],
    inputs: ['inputBtn']
})

export class LandingCtadescComponent {
    public inputBtn:Cta;
}