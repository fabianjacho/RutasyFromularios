import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-normal',
  imports: [FormsModule],
  templateUrl: './formulario-normal.component.html',
  styleUrl: './formulario-normal.component.scss'
})
export class FormularioNormalComponent {
  nombre: string = '';
  correo: string = '';

  lista:{nombre: string, correo: string}[] = [];

  agregar() {
    if (this.nombre && this.correo) {
      this.lista.push({ nombre: this.nombre, correo: this.correo });
      this.nombre = '';
      this.correo = '';
    } else {
      alert('Por favor, complete todos los campos.');
    }
  } 
  
}
