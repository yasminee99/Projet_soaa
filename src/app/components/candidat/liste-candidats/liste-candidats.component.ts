import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-liste-candidats',
  templateUrl: './liste-candidats.component.html',
  styleUrls: ['./liste-candidats.component.css']
})
export class ListeCandidatsComponent implements OnInit {
  Candidat:Candidat[]; 
  constructor(private service:CandidatService,private router: Router) { }

  ngOnInit(): void {
    this.service.getAllcandidats().subscribe(
      data=>{console.log(data),this.Candidat=data},
      err=>console.log(err)
    )
  }

 deleteCandidat(id: number,c) {
    this.service.deleteCandidat(id).subscribe(
      res => {
        console.log(res)

      }, 
      err=>console.log(err)
    )
   let index=this.Candidat.indexOf(c)
   this.Candidat.splice(index,1)
    
  }

 

}
