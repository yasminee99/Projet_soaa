import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/models/activite';
import { ActiviteService } from 'src/app/services/activite.service';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-update-activite',
  templateUrl: './update-activite.component.html',
  styleUrls: ['./update-activite.component.css']
})
export class UpdateActiviteComponent implements OnInit {

  a: Activite
  id
  date=new FormControl('')
  duree=new FormControl('')
  type=new FormControl('')
  lieu=new FormControl('')
  
  constructor(private route:ActivatedRoute,private router:Router,private service:ActiviteService) { }

  ngOnInit(): void {
    this.a=new Activite()
    this.id=this.route.snapshot.params.id;
    this.service.getOneActivite(this.id).subscribe(
      res=>{
        let activite=res
        console.log(this.id)
        console.log(activite)
        this.date.setValue(activite.date)
        this.duree.setValue(activite.duree)
        this.type.setValue(activite.type)
        this.lieu.setValue(activite.lieu)
           
      },
      err=>console.log(err)
    ) 
  }

  submit(){
    this.service.updateActivite(this.id,this.a).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    this.a=new Activite()
    this.router.navigate(['/activite']);
  } 

}
