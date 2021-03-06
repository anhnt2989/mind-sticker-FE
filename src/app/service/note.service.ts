import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Note} from '../model/Note';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private ownerResource = 'http://localhost:8080/api/owner';
  private readonly API_URL = 'http://localhost:8080/api/owner/create-note';
  imageUrls: string[] = [];
  public onNoteUpdate = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  createNote(data: Partial<Note>): Observable<Note> {
    return this.http.post<Note>(`${this.API_URL}`, data);
  }

  getNoteInfoById(id: number): Observable<any> {
    return this.http.get(this.ownerResource + '/notes' + '/' + id);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(this.ownerResource + '/' + id);
  }

  updateNote(id: number, data: Note): Observable<any> {
    return this.http.put<any>(this.ownerResource + '/note' + '/' + id, data);
  }

  getListNotesByUser(): Observable<any> {
    return this.http.get<any>(this.ownerResource + '/notes' + '/all');
  }
}
