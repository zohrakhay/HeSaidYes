import { Component, OnInit, Output } from '@angular/core';
import { Dress } from 'src/app/models/dress/dress';
import { DressService } from 'src/app/services/dresses/dress.service';

@Component({
  selector: 'app-dresses-list',
  templateUrl: './dresses-list.component.html',
  styleUrls: ['./dresses-list.component.css']
})
export class DressesListComponent implements OnInit {
  @Output() dress: any;
  dresses: Dress[];

  constructor(

    private dressService: DressService
  ) { }

  ngOnInit(): void {
    this.dressService.getDresses().subscribe(
       (dresses) => this.dresses = dresses




    );
    }

}
