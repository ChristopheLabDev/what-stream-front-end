import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Content } from '../models/content';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = "http://localhost:8080";
   }
   createNewContent(newContent: Content) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/content/records`,
      newContent,
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }
  
  getAllContents(): Observable<Content[]> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Content[]>(`${this.urlApi}/content/my-contents`, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  getContentById(contentId: string): Observable<Content> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Content>(`${this.urlApi}/content/${contentId}`, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  updateContent(content: Content): Observable<any> {
    const token = localStorage.getItem("token");
    
    const body = {
      name: content.name,
      description: content.description,
      releasedate: content.releasedate,
      duration: content.duration,
      picturelink: content.picturelink,
      rate: content.rate,
    }

    return this.http.put<any>(`${this.urlApi}/content/${content.id}`,
      body, 
      {headers : { Authorization : `Bearer ${token}`}}
    )

  }
  deleteContent(contentId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/content/${contentId}`, 
      { headers: { Authorization : `Bearer ${token}`}})
  }

}