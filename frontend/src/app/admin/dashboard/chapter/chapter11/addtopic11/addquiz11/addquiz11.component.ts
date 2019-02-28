import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { OperationsService } from 'src/app/services/operations.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addquiz11',
  templateUrl: './addquiz11.component.html',
  styleUrls: ['./addquiz11.component.css']
})
export class Addquiz11Component implements OnInit {
  addquiz:FormGroup;
  resData;
  resObj;
  fetch;
  formData;
  formObj;
  constructor(private fb:FormBuilder,private oper:OperationsService,private router:Router) { }

  ngOnInit() {
    this.addq();
    this.fetchData();
  }
  addq(){
    this.addquiz=this.fb.group({
      'question':['',Validators.required],
      'op1':['',Validators.required],
      'op2':['',Validators.required],
      'op3':['',Validators.required],
      'op4':['',Validators.required],
      'correctop':['',Validators.required],
      'topicname':['']
    })
  }
  addqu(){
    var formData=this.addquiz.getRawValue()
    var seriliz = formData;
    this.resObj=this.oper.addquiz11(seriliz).subscribe((res)=>{
      this.resData=res;
      if(this.resData.err==0){
          this.addq()
      }
      console.log(this.resData);
    })
      }
      fetchData(){
        this.formData=this.oper.fetchAll11().subscribe((res)=>{
          this.formObj=res;
          this.fetch=this.formObj.fetch;
        })
      }

}
