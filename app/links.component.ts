import {Component} from 'angular2/core';
import {Cta} from './cta';

@Component({
    selector: 'section-links', templateUrl: 'views/links.html',
    styles: [`
        ul{
          list-style-type: none;
          padding: 0;
          display:inline-block;
          width: 100%;
          background-color: #eeeeee
        }
        li{
            cursor: pointer;
            display:block;
            padding-bottom: 15px;
            padding-top:15px;
            border-bottom:solid 1px;
        }
    `], inputs: ['items']
})

export class LinksComponent {
    public title:String;
    public items:Cta[];
}