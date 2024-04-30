import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  constructor(private snack: MatSnackBar) {}

  ngOnInit(): void {}
  
  openSnackBar(message: string) {
    this.snack.open(message, "Cancel" , {
      duration: 1500
    });
  }

}
