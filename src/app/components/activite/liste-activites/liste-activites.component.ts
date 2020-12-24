import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Activite } from 'src/app/models/activite';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-liste-activites',
  templateUrl: './liste-activites.component.html',
  styleUrls: ['./liste-activites.component.css']
})
export class ListeActivitesComponent implements OnInit {

  Activite:Activite[]; 
  constructor(private service:ActiviteService,private router: Router) { }

  ngOnInit(): void {
    this.service.getAllActivites().subscribe(
      data=>{console.log(data),this.Activite=data},
      err=>console.log(err)
    )
  }

 deleteActivite(id: number,a) {
    this.service.deleteActivite(id).subscribe(
      res => {
        console.log(res)

      }, 
      err=>console.log(err)
    )
   let index=this.Activite.indexOf(a)
   this.Activite.splice(index,1)
    
  }


}
