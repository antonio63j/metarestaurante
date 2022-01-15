import { Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';




import { HttpParams } from '@angular/common/http';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';

interface SubMenu {
  routLink: string;
  key: string;
  class: string;
  keyView: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  private unsubscribe$ = new Subject();

  public env: any = environment;


  @Output() collapsedEvent = new EventEmitter<boolean>();

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
        console.log('se invoca a toggleSidebar()');
        this.toggleSidebar();
      }
    });
  }

  ngOnInit(): void {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }

  addExpandClass(element: any): void {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  // toggleCollapsed() {
  //     this.collapsed = !this.collapsed;
  //     console.log(`se emite evento collapsedEvent a ${this.collapsed}`);
  //     this.collapsedEvent.emit(this.collapsed);
  // }

  // isToggled(): boolean {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const dom: Element = document.querySelector('body');
  //     return dom.classList.contains(this.pushRightClass);
  //   }
  // }

  isToggled(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      console.log('en isToggle()');
      const dom: Element = document.querySelector('body');

      let ret:boolean;
            
      ret = dom.classList.contains(this.pushRightClass);

      console.log(`isToggle() va a devolver: ${ret}`);
      
      return ret;

    } else {
      return false;
    }
  }

  toggleSidebar(): void {
    if (isPlatformBrowser(this.platformId)) {

      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
    }
  }

  changeLang(language: string): void {
    this.translate.use(language);
  }

  onLoggedout(): void {
    // localStorage.removeItem('isLoggedin');
    this.router.navigate(['\dashboard']);
  }
  onSelectAll(items: any): void {
  }
}
