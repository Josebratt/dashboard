import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: UserModel;

  loading = false;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.user = new UserModel();
  }

  async onSubmit(form: NgForm){

    console.log(form);
    console.log(this.user);
    
    
    // this.loading = true;
    // const { email, password, firstName, lastName } = form.value;

    // try {
    //     const resp = await this.afAuth.createUserWithEmailAndPassword(email, password);
    //     await resp.user?.updateProfile({displayName: `${firstName} ${lastName}`});
    //     form.reset();
    // } catch (err){
    //     console.log(err);
    // }
    // this.loading = false;
  }

  

}
