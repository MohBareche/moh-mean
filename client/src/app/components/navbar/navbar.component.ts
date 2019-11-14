import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from 'src/app/classes/user';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
user: User 

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    const user =this.userService.getCurrentUser();
    return user
  }

  onLogOutClick() {
    this.userService.logOut();
    this.toastr.info("Utilisateur déconnecté avec succès", "Information",{closeButton:true,progressBar: true});
    this.router.navigate(["/login"]);
    return false;
  }
}
