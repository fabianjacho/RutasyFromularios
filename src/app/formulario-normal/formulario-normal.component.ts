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

  
}
