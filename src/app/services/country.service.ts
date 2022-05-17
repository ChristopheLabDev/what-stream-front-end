import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '../models/content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = "localhost:8080";
   }
   createNewContent(newContent: Content) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/api/content`,
      newContent,
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }
  
  getAllContents(): Observable<Content[]> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Content[]>(`${this.urlApi}/api/content/personnal`, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  getContentById(contentId: string): Observable<Content> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Content>(`${this.urlApi}/api/content/${contentId}`, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  updateContent(content: Content): Observable<any> {
    const token = localStorage.getItem("token");
    
    const body = {
      name: content.name,
      duration: content.duration,
      description: content.description
    }

    return this.http.put<any>(`${this.urlApi}/api/content/${content.id}`,
      body, 
      {headers : { Authorization : `Bearer ${token}`}}
    )

  }
  deleteCountry(countryId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/api/country/${countryId}`, 
      { headers: { Authorization : `Bearer ${token}`}})
  }

}
