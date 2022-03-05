import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../Cat';
import { CatService } from '../cat.service';

@Component({
  selector: 'imw-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  cat$: Observable<Cat[]> | undefined;
  
  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.cat$ = this.catService.getCats();
  }
}
