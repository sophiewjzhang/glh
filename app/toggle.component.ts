import {Component} from 'angular2/core';

@Component({
    selector: 'toggle-content',
    template: `
        <div class="toggle-container padding-top-s-m">
            <div class="toggle-panel cursor-pointer"
                (click)="toggle()">
                <span *ngIf="!expanded" class="icon icon-expand" ></span>
                <span *ngIf="expanded" class="icon icon-collapse"></span>
                <span class="display-inline-block margin-left-s-m">{{title}}</span>
            </div>
            <div *ngIf="expanded" class="toggle-content padding-all-s-m alignment-left">{{content}}</div>
        </div>
    `,
    styles:[`
        .toggle-content{
            background-color:#ffffff;
        }
        .toggle-panel{
            background-color:#eeeeee;
        }
        .icon{
            font-size:20px;
            width:30px;
            height:30px;
            background-color: #ff0000;
            display: inline-block;
            padding: 5px 5px 5px 5px;
            line-height: 1em;
            vertical-align: middle;
        }
        .icon-expand:after{
            content:"\u25BC"
        }
        .icon-collapse:after{
            content:"\u25B2"
        }
    `],
    inputs: ['content','title']
})
export class toggleComponent {
    public content:String;
    public expanded=false;

    public toggle(){
        this.expanded=!this.expanded;
    }
}
