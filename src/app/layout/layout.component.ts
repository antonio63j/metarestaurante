import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    collapedSideBar: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    receiveCollapsed($event: any): void {
        this.collapedSideBar = $event;
        console.log(`recibido Collapse event`);
    }

}