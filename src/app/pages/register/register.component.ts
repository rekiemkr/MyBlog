import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user: UserPage;
  registerUser = new FormGroup({
    name: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl("")
  });
  constructor() {}
  ngOnInit() {}
  onSubmit() {
    console.log(this.registerUser.value);
  }
}
