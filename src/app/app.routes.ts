import { Routes } from '@angular/router';
import { FormularioNormalComponent } from './formulario-normal/formulario-normal.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

export const routes: Routes = [
    {path: '',
     title: 'Formulario Normal',
     component: FormularioNormalComponent,   
    },

  /*
    {path: 'formulario-reactivo',
     title: 'Formulario Reactivo', 
     component: FormularioReactivoComponent}
  */

    //formulario reactivo con lazy loading, esto es una promesa que se resuelve
     {path: 'formulario-reactivo',
        loadComponent() {
            return import('./formulario-reactivo/formulario-reactivo.component')
                .then(m => m.FormularioReactivoComponent);      
        },
     }


];
