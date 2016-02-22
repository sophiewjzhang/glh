import {Component} from 'angular2/core';

@Component({
    selector: 'toggle-icon',
    template: `
        <div class="toggle-switch cursor-pointer display-inline-block" (click)="toggle">
            <span *ngIf="!expanded" class="icon icon-expand" ></span>
            <span *ngIf="expanded" class="icon icon-collapse"></span>
            <!--<span class="display-inline-block margin-left-s-m">+</span>-->
        </div>
    `,
    styles:[`
        .toggle-switch{
            position: absolute;
            right:15px;
            top:8px;
        }
        .icon{
            font-size: 12px;
            width: 22px;
            height: 22px;
            color: #333;
            background-color: #cc0000;
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
    inputs: [ 'expanded']
})
export class toggleIconComponent {
    public content:String;
    public title:String;
    public expanded:Boolean;

    private toggle(){
        this.expanded= !this.expanded;
    }
}
