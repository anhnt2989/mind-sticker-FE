import {Component, OnInit} from '@angular/core';
import {SignupInfoService} from '../../auth/signup-info.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }
}

