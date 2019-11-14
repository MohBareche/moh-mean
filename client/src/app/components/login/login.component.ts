import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  id: string;
  email: string;
  password: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit() { }

  onLogin() {
    if (!this.email || !this.password) {
      this.toastr.error(
        'Les deux (02) champs sont obligatoires',
        'Ereur de données'
      );
      return false;
    }

    const user = {
      id: this.id,
      email: this.email,
      password: this.password
    };

    this.userService.auth(user).subscribe(resp => {

      if (!resp.success) {
        this.toastr.error(
          "Nom d'utilisateur non trouvé et/ou mot de passe erroné ! Veuillez réessayer . . .", 
          'Erreur de données', 
          { closeButton: true, progressBar: true }
        );
        return false;
      }

      this.toastr.success(
        `Bienvenue ${resp.user.name.toUpperCase()}`,
        'Enregistrement',
        { closeButton: true, progressBar: true }
      );

      this.userService.saveUserData(resp.token, resp.user);

      this.router.navigate(['/dashboard']);
    });
  }
}
