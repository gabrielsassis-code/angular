import { Component } from '@angular/core';

interface Usuario{
  nome: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})

export class Usuarios {
usuarios: Usuario[]=[];
nome: string = '';
email: string ='';

adicionarUsuario(): void{
  this.usuarios=[...this.usuarios, {nome: this.nome, email: this.email}];
  this.nome = '';
  this.email = '';
}
}
