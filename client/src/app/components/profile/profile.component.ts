import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  name: string;
  email: string;
  id: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    const user = this.userService.getCurrentUser();
    this.name = user.name;
    this.email = user.email;
    this.id = user.id;
  }
}
