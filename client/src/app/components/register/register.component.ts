import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit() { }

  onRegister() {
    if (!this.name || !this.email || !this.password) {
      this.toastr.error(
        "Tous les champs sont obligatoires",
        "Ereur de données", { closeButton: true }
      );
      return false;
    }
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.userService.createAccount(user).subscribe(resp => {
      if (!resp.success) {
        this.toastr.error("Utilisateur non enregistré ! Veuillez réessayer . . .", "Erreur", { closeButton: true, progressBar: true });
        return false;
      }
      this.toastr.success(
        "Utilisateur enregistré avec succès",
        "Enregistrement",
        { closeButton: true, progressBar: true }
      );
      this.router.navigate(["/login"]);
    });
  }
}
