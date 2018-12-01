import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import swal from "sweetalert";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    message: new FormControl("")
  });
  constructor() {}

  ngOnInit() {}

  enviarCorreo() {
    console.log(this.contactForm.value);
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  }
}
