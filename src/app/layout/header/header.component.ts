import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { HttpParams } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {

    public pushRightClass: string;

    // public dropdownList = [];
    // public selectedItems = [];
    // public dropdownSettings: IDropdownSettings = {};

    // private observ$: Subscription = null;
    // private unsubscribe$ = new Subject();
    // public dropdownSettings: any = {};


    constructor(
        private translate: TranslateService,
        public router: Router,
        @Inject(PLATFORM_ID) private platformId: string


    ) {
        this.router.events.subscribe((val) => {

            if (val instanceof NavigationEnd) {
                console.log('en gestion router.events');
                console.log(val);
                console.log('this.isTogge()=' + this.isToggled());
            }

            if (isPlatformBrowser(this.platformId) &&
                val instanceof NavigationEnd &&
                isPlatformBrowser(this.platformId) &&
                window.innerWidth <= 992 && this.isToggled()) {
                console.log('se invoca toggleSidebar()');
                this.toggleSidebar();
            }
        });
    }

    ngOnInit(): void {
        this.pushRightClass = 'push-right';

    }

    onItemSelect(item: any): void {
        console.log(item);
    }
    onSelectAll(items: any): void {
        console.log(items);
    }


    isToggled(): boolean {
        if (isPlatformBrowser(this.platformId)) {

            console.log('en isToggled()');

            const dom: Element = document.querySelector('body');

            console.log(`dom: ${JSON.stringify(dom)}`);

            let ret:boolean;
            
            ret = dom.classList.contains(this.pushRightClass);

            console.log(`isToggle() va a devolver: ${ret}`);
            
            return ret;
        } else {
            return false;
        }
    }

    toggleSidebar(): void {
        console.log('en toggleSidebar()');
        if (isPlatformBrowser(this.platformId)) {
            const dom: any = document.querySelector('body');

            console.log(`dom: ${JSON.stringify(dom.classList)}`);

            dom.classList.toggle(this.pushRightClass);
        }
    }

    onLoggedout(): void {
        this.router.navigate(['\dashboard']);
    }

    changeLang(language: string): void {
        this.translate.use(language);
    }

    ngOnDestroy(): void {
    }

}
