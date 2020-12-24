import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activite } from 'src/app/models/activite';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {

  a: Activite=new Activite()
  constructor(private service:ActiviteService, private router: Router) {
   }

  ngOnInit(): void {
  }
 
  submit(){
    this.service.addActivite(this.a).subscribe(
      data=>console.log(data),
      (err)=>console.log(err)
    )
    this.a = new Activite(); 
    this.router.navigate(['/activite']);
  }


}
