import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user = new User();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(user: User){
    this.authService.login(user).subscribe()
  }

  login(user: User){
    this.authService.login(user).subscribe((token: string) =>{
      localStorage.setItem('authToken',token)
    })
  }

  getme(){
    this.authService.getMe().subscribe((name: string) =>{
      console.log(name)
    })
  }
}
