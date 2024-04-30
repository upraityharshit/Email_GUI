import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit{

  ngOnInit(): void {
  }

  data={
    to: "",
    subject: "",
    message: ""
  }

  flag =false;
  isMailSend=false;
  isMailNotSend=false;

  constructor(private email:EmailService, private snak:MatSnackBar){}

  doSubmitForm(){

    if(this.data.to ==''|| this.data.subject =='' || this.data.message ==''){
      this.snak.open("Fields Cannot be Empty !!","OK");
      return;
    }
   
    this.flag=true;
    this.isMailSend=false;

    this.email.sendEmail(this.data).subscribe(
      response=>{
        this.isMailSend=true;
        this.flag=false;
        console.log(" Successful",response.toString)        
      },
      error=>{
        console.log(" Error sending email :",error)
        this.flag=false; 
        this.isMailSend=false;
        this.isMailNotSend=true;
      }
    )
    
  }

}
