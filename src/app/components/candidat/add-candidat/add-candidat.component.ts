import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat.service';
@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {
  c: Candidat=new Candidat()
  constructor(private service:CandidatService, private router: Router) {
   }

  ngOnInit(): void {
  }
 
  submit(){
    this.service.addCandidat(this.c).subscribe(
      data=>console.log(data),
      (err)=>console.log(err)
    )
    this.c = new Candidat(); 
    this.router.navigate(['/candidat']);
  }

}
 