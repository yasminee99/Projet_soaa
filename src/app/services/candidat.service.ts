import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private url="http://localhost:9592/candidats/"
  constructor(private http:HttpClient) {

   }
   getAllcandidats() {
    let data = this.http.get<any>(this.url+"all");
    return data;
  }

  deleteCandidat(id){
    let data=this.http.delete<any>(this.url+'/delete/'+id)
    return data;
  }

  addCandidat(c:Candidat){
    let data=this.http.post<any>(this.url+'/newcandidat',c)
    return data;
  }
  getOneCandidat(id){
    let data=this.http.get<any>(this.url+'candidat/'+id)
    return data;
  }
  updateCandidat(id, c:Candidat){
    let data=this.http.put<any>(this.url+'update/'+id,c)
    return data;
  }
}
