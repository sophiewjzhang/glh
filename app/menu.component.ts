import {Component} from 'angular2/core';
import {Item} from './item';

@Component({
    selector: 'menu',
    templateUrl: `
        <ul class="menu">
                <li *ngFor="#item of items"
                    class="cursor-pointer">
                    <span [class.selected]="item === selectedItem"
                          (click)="onSelectItem(item)"
                        class="padding-all-s-m">{{item.name}}</span>
                </li>
            </ul>
    `,
    styles:[`

    `],
    inputs: ['items','selectedItem']
})
export class MenuComponent {
    public selectedItem;
    public items:Item[];
    public onSelectItem(btn: Item) { this.selectedItem = btn; }
}
