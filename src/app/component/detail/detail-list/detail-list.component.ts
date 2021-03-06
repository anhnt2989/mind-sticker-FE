import {Component, Input, OnInit} from '@angular/core';
import {NoteService} from '../../../service/note.service';
import {Note} from '../../../model/Note';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {
  @Input()
  notes: Note[];
  note: Note;
  // @Input()
  // filteredNotes: Note[] = [];

  constructor(private noteService: NoteService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.notes = this.filteredNotes;
    this.listAllNotesByUser();
    this.noteService.onNoteUpdate.subscribe(updateId => {
      this.listAllNotesByUser();
    });
  }

  listAllNotesByUser() {
    this.noteService.getListNotesByUser().subscribe(data => {
        console.log('succsess');
        this.notes = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
