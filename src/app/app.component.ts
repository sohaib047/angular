import { Component } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//properties
export class AppComponent {
  title = 'World';
  name = "Sohaib";
  disable = false;
  color = 'red'
  bgColor = 'brown'

  //style binding properties
  updateColor(){
    this.color = "yellow"
    this.bgColor = "black"
  }
  

  //user define code
  intro = 'Sohaib Ali';
  display_result = ''

  pipesObject ={
    name:'Sohaib',
    age: 23
  } 
  //Reactive Form
  loginForm = new FormGroup({
    userR: new FormControl('',[Validators.required, Validators.pattern('^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')]),
    emailR: new FormControl('',[Validators.required,Validators.email]),
    passwordR: new FormControl('',[Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
  })
  loginUser(){
    console.log(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get('userR')
  }
  get email(){
    return this.loginForm.get('emailR')
  }
  get password(){
    return this.loginForm.get('passwordR')
  }




//template driven form
userData:any = {};

submit(data:NgForm){
  this.userData=data;
  console.log(this.userData);
}
  //Using Pipes
  today: number = Date.now();
  // Time() {
  //   var today = new Date();
  //   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  //   return time
  // }
  //making an array and using it through *ngFor
  users = ['Sohaib', 'Ali', 'Kashmiri']
  // userDetail = [
  //   { name: 'Bilal', email: 'bilal@gmail.com', phone: '0900789601' },
  //   { name: 'Akbar', email: 'akbar@gmail.com', phone: '0341789601' },
  //   { name: 'Naseem', email: 'naseem@gmail.com', phone: '0213789601' },
  // ]
  persons = [
    {nam:'Ali', email:'ali@outlook.com', socialAccounts : ['Facebook', 'Instagram', 'Snapchat']},
    {nam:'Mehdi', email:'Mehdi@yahoo.com', socialAccounts : ['Facebook', 'Instagram', 'Snapchat']},
    {nam:'Mohibullah', email:'Mohibullah@gmail.com', socialAccounts : ['Facebook', 'Instagram', 'Snapchat']},
  ]

  userDetails = [
    {name:'Sohaib', email: 'sohaib@gmail.com'},
    {name:'Ali', email: 'ali@gmail.com'},
    {name:'Khan', email: 'khan@gmail.com'},
    {name:'Akbar', email: 'akbar@gmail.com'},
  ]
  //Pipes




  //Template Ref Var
  getVal(item:any){
    console.log(item)
  }

  //Two Way Binding
  twoway:any;


  // child to parent
  u_data = ''
  updateData(item:string){
    this.u_data = item

  }


  //parent to child
  info = 10
  changeValue(){
    this.info = Math.floor(Math.random()*10)
  }



  //TODO list
  tasks:any[] = []
  addtask(item:string){
    
    this.tasks.push({id:this.tasks.length, name:item});
    // console.warn(this.tasks)
  }
  removeTask(id:number){
    this.tasks = this.tasks.filter(item => item.id!==id)
  }


  //Material UI code
  options = ['Austrailia', 'UK0']


  //Button Toggle
  toDisplay = true;

  unchanged() {
    this.toDisplay = !this.toDisplay;
  }

  func_check() {
    alert("function of button called")
  }

  display(name: string) {
    alert("Text: " + name)
  }

  display_text(name: string) {
    this.display_result = name
  }

  warner() {
    alert("Beware of the Dog!")
    console.warn("Beware of the Dog!")
  }

  get_input_data(name: string) {
    console.log("The incoming value is: " + name)
  }
  //Making a counter
  count = 0
  counter(type: string) {
    type === 'add' ? this.count++ : this.count--;
  }
}
