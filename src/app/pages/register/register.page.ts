import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Impor Router untuk navigasi

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['home']);
  }

}
