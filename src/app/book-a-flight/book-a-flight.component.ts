
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from './Flight';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-book-a-flight',
  templateUrl: './book-a-flight.component.html',
  styleUrls: ['./book-a-flight.component.css']
})
export class BookAFlightComponent implements OnInit {

  BookForm !: FormGroup;
  Flights : Flight;
  FlightDetail !: Flight[];
  CurrentDate : Date;
  constructor(private fb: FormBuilder , private pageservice: ServiceService) {
    this.Flights = new Flight("Sainee","Thailand","Norwat","One-way",new Date(),new Date(),2,0,0)
    this.CurrentDate = new Date(Date.now())
  }

  ngOnInit(): void {
    this.BookForm = this.fb.group({
      FullName: ['' , Validators.required] ,
      From: ['' , Validators.required ] ,
      To: ['' , Validators.required] ,
      Trip_Type: ['' , Validators.required] ,
      Departure: ['' , Validators.required] ,
      Arrival: ['' , Validators.required] ,
      Adults: ['' , Validators.required ] ,
      Children: ['' , Validators.required  ] ,
      Infants: ['' , Validators.required  ]
    })

    this.getPages();
  }
  getPages(){
    this.FlightDetail = this.pageservice.getPage();
  }
  Submit(f:FormGroup):void{
    this.Flights.fullName = f.get('FullName')?.value;
    this.Flights.from = f.get('From')?.value;
    this.Flights.to = f.get('To')?.value;
    this.Flights.type = f.get('Trip_Type')?.value;
    this.Flights.departure = f.get('Departure')?.value;
    this.Flights.arrival = f.get('Arrival')?.value;
    this.Flights.adults = f.get('Adults')?.value;
    this.Flights.children = f.get('Children')?.value;
    this.Flights.infants = f.get('Infants')?.value;

    let form_value = new Flight(f.get('FullName')?.value,
                                f.get('From')?.value,
                                f.get('To')?.value,
                                f.get('Trip_Type')?.value,
                                f.get('Departure')?.value,
                                f.get('Arrival')?.value,
                                f.get('Adults')?.value,
                                f.get('Children')?.value,
                                f.get('Infants')?.value);
    this.FlightDetail.push(form_value);
    this.BookForm.reset();
  }
}
