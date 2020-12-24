import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidatService } from 'src/app/services/candidat.service';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent implements OnInit {
  c: Candidat
  id
  nom=new FormControl('')
  prenom=new FormControl('')
  date=new FormControl('')
  mail=new FormControl('')
  fb=new FormControl('')
  lk=new FormControl('')
  tw=new FormControl('')
  score=new FormControl('')
  constructor(private route:ActivatedRoute,private router:Router,private service:CandidatService) { }

  ngOnInit(): void {
    this.c=new Candidat()
    this.id=this.route.snapshot.params.id;
    this.service.getOneCandidat(this.id).subscribe(
      res=>{
        let candidat=res
        console.log(this.id)
        console.log(candidat)
        this.nom.setValue(candidat.nom)
        this.prenom.setValue(candidat.prenom)
        this.date.setValue(candidat.date_naiss)
        this.mail.setValue(candidat.mail)
        this.fb.setValue(candidat.fb)
        this.lk.setValue(candidat.linkedin)
        this.tw.setValue(candidat.twitter)
        this.score.setValue(candidat.score)     
      },
      err=>console.log(err)
    ) 
  }

  submit(){
    this.service.updateCandidat(this.id,this.c).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    this.c=new Candidat()
    this.router.navigate(['/candidat']);
  } 

}
