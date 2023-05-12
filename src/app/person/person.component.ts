import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})


export class PersonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

   head1='Homer'; 
   head2='Personer';
   ref1='https://www.isaca.org/membership/professional-membership';

}