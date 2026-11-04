import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  nome: string;
  email: string;
}


@Component({
  selector: 'app-adicionar-usuario',
  imports: [FormsModule],
  templateUrl: './adicionar-usuario.html',
  styleUrl: './adicionar-usuario.css',
})
export class AdicionarUsuario {
  nome: string = '';
  email: string = '';
  usuarios: User[] = [];

  adicionarUsuario(): void {
    this.usuarios.push({ nome: this.nome, email: this.email });
    this.nome = '';
    this.email = '';
  }
}

