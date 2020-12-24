import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AddActiviteComponent } from './components/activite/add-activite/add-activite.component';
import { ListeActivitesComponent } from './components/activite/liste-activites/liste-activites.component';
import { UpdateActiviteComponent } from './components/activite/update-activite/update-activite.component';
import { AddCandidatComponent } from './components/candidat/add-candidat/add-candidat.component';
import { ListeCandidatsComponent } from './components/candidat/liste-candidats/liste-candidats.component';
import { UpdateCandidatComponent } from './components/candidat/update-candidat/update-candidat.component';

const routes: Routes = [
  {path:'candidat',
  component:ListeCandidatsComponent
  },
  
  {
    path:'add-candidat',
    component:AddCandidatComponent
  },

  {
    path:'update-candidat/:id',
    component:UpdateCandidatComponent
  },

  {path:'activite',
  component:ListeActivitesComponent
  },
  
  {
    path:'add-activite',
    component:AddActiviteComponent
  },

  {
    path:'update-activite/:id',
    component:UpdateActiviteComponent
  }

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
