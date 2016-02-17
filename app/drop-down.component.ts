import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {Item} from './item';

@Component({
    selector: 'drop-down',
    template: `
            <ul class="drop-down-list" *ngIf="expanded">
                <li *ngFor="#item of items"
                    class="cursor-pointer">
                    <span [class.selected]="item === selectedItem"
                          (click)="onSelectCountry(item)"
                        class="padding-all-s-m">{{item.name}}</span>
                </li>
            </ul>
    `,
    styles:[`
        li{
            :hover{
                background-color:#cccccc;
            }
        }
        li{
            list-style: none;
            display:block;
        }
        li:hover{
            background-color:#cccccc;
        }
        .selected{
            background-color:#cc0000;
            color: white;
            height:30px;
        }
    `],
    inputs: ['items','selectedCountry']

})
export class DropDownComponent{
    public selectedCountry;
    public items:Item[];
    public expanded=true;

    public onClick(){ this.expanded = !this.expanded}
    public onSelectCountry(btn: Item) { this.selectedCountry = btn; }
}
