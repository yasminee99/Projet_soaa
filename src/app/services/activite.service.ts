import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activite } from '../models/activite';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  private url="http://localhost:9592/activites/"
  constructor(private http:HttpClient) {

   }
   getAllActivites() {
    let data = this.http.get<any>(this.url+"all");
    return data;
  }

  deleteActivite(id){
    let data=this.http.delete<any>(this.url+'/delete/'+id)
    return data;
  }

  addActivite(a:Activite){
    let data=this.http.post<any>(this.url+'/newactivite',a)
    return data;
  }
  getOneActivite(id){
    let data=this.http.get<any>(this.url+'activite/'+id)
    return data;
  }
  updateActivite(id, a:Activite){
    let data=this.http.put<any>(this.url+'update/'+id,a)
    return data;
  }
}
