import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  public subscription: Subscription | undefined;
  public env: any= environment;

  constructor(){}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

}
