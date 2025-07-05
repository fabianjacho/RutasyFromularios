import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import{ Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.scss'
})
export class FormularioReactivoComponent {

listaempleados: {id:number, nombre: string, correo: string, edad: number }[] = [];

perfilEmpleado = new FormGroup({
  nombre: new FormControl('', Validators.required),  
  correo: new FormControl('', [Validators.required, Validators.email]),
  edad: new FormControl(0, [Validators.required, Validators.min(1)]),
});

agregar() {
  
  if (this.perfilEmpleado.valid) {
    this.listaempleados.push({
      id: this.listaempleados.length + 1,
      nombre: this.perfilEmpleado.value.nombre || '',
      correo: this.perfilEmpleado.value.correo || '',
      edad: Number(this.perfilEmpleado.value.edad) || 0
    });
    this.perfilEmpleado.reset();
  } else {
    alert('Por favor, complete todos los campos.');
  }
}
}
