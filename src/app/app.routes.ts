import { Routes } from '@angular/router';
import { FormularioNormalComponent } from './formulario-normal/formulario-normal.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

export const routes: Routes = [
    {path: '',
     title: 'Formulario Normal',
     component: FormularioNormalComponent,   
    },
    {path: 'formulario-reactivo',
     title: 'Formulario Reactivo', 
     component: FormularioReactivoComponent}
];
