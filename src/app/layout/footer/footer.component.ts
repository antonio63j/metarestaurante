import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  public subscription: Subscription | undefined;

  constructor(){}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
