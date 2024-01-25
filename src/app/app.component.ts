import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCalculator';

  toshow = ''
  currvalue=''
  flagb=false;
  ptrflag=false;

  writetoinput(value: string){
    
    if(this.currvalue===''&& value==='.'){
      alert("Invalid Input");
      return;
    }

    if((this.currvalue[this.currvalue.length-1]==='+' || this.currvalue[this.currvalue.length-1]==='-' || this.currvalue[this.currvalue.length-1]==='*' || this.currvalue[this.currvalue.length-1]==='/') && (value === '+'  || value==='-' || value === '*' ||  value === '/')){
      alert("Invalid Input");
    
    }else{

      this.currvalue = this.currvalue + value
    }

    if((this.toshow ==='' && this.currvalue[this.currvalue.length-1]==='/')|| (this.toshow ==='' && this.currvalue[this.currvalue.length-1]==='*')){
      alert("Invalid Input");
      this.flagb=true;
    }
    else{

      this.toshow = this.currvalue
    }

    if(this.flagb===true){
      this.toshow='';
      this.currvalue='';
      this.flagb=false;
    }
  }

  equals(){
    if(this.toshow[this.toshow.length-1]=='/' || this.toshow[this.toshow.length-1]=='+' || this.toshow[this.toshow.length-1]=='*' || this.toshow[this.toshow.length-1]=='-'){
      alert("Invalid Input");
    }
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
  }

  clear(){
    this.currvalue=''
    this.toshow= ''
  }

  back(){
    this.currvalue = this.currvalue.slice(0,-1)
    if(this.currvalue==''){this.currvalue=''}
    this.toshow =this.currvalue
  }

  calcvalue(solve: any){
    try{
    this.toshow = eval(solve);
    }
    catch(e){
      this.toshow='Error';
    }
  }


}
