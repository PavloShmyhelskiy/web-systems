import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  constructor(private userService:UserService, private fb: FormBuilder){
  }
  types: any = ["Type A", "Type B", "Type C", "Type D"]
  userForm = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    type: ['Type A'],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required]],
    confirmPass: ['', [Validators.required]],
    subjects: this.fb.array([]),
    description: [''],
    sex: ['Male'],
    phone: ['', [Validators.required]]
  }, {validators: this.MatchValidator})
  
  isValid(e: string){
    if (!this.userForm.get(e)?.touched) return ""
    const res = this.userForm.get(e)?.invalid ? "invalid" : "valid";
    return res;
  }
  changeType(e: any) {
    this.type?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeSex(e: any) {
    if (e.target.checked){
      this.sex?.setValue("Male");
    } else {
      this.sex?.setValue("Female");
    }
  }
  get type() {
    return this.userForm.get('type');
  }
  get subjects(){
    return this.userForm.get('subjects') as FormArray;
  }
  get sex() {
    return this.userForm.get('sex');
  }
  addSubject(){
    this.subjects.push(this.fb.control(''))
  }
  clearSubjects(){
    this.subjects.clear();
  }
  removeSubject(index: number){
    this.subjects.removeAt(index);
  }
  addUser(formUser: any){
    const user = new User(this.userService.getUsersLength())
    user.name = formUser.name;
    user.lastname = formUser.lastname;
    user.type = formUser.type;
    user.email = formUser.email;
    user.password = formUser.password;
    user.phone = formUser.phone;
    user.description = formUser.description ? formUser.description : user.description;
    user.subjects = formUser.subjects ? formUser.subjects : user.subjects;
    user.sex = formUser.sex;
    this.userService.addUser(user);
    console.log("New user was added");
    console.log(user);
  }
  onSubmit(){
    const user = this.userForm.value;
    delete user.confirmPass;
    this.userForm.reset();
    this.clearSubjects()
    this.addUser(user)
  }
  ngOnInit() {
    const form = document.getElementById("newUserForm");
    function handleForm(event: any) { event.preventDefault(); } 
    form?.addEventListener('submit', handleForm);
  }
  MatchValidator (control: AbstractControl) : any {
    const password: string = control.get("password")?.value; // get password from our password form control
    const confirmPassword: string = control.get("confirmPass")?.value; // get password from our confirmPassword form control
    
    // if the confirmPassword value is null or empty, don't return an error.
    if (!confirmPassword?.length) {
      return null;
    }
  
    // if the confirmPassword length is < 8, set the minLength error.
    if (confirmPassword.length < 8) {
      control.get('confirmPass')?.setErrors({ minLength: true });
    } else {
      // compare the passwords and see if they match.
      if (password !== confirmPassword) {
        control.get("confirmPass")?.setErrors({ mismatch: true });
      } else {
        // if passwords match, don't return an error.
        return null;
      }
    }
    return null;
  }
}
