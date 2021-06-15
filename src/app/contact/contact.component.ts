import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
pop(){this.toastr.success('check email', 'News letter');
  
}
}
