import { Component, OnInit } from '@angular/core';
import { Emp } from '../model/emp';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
   emps:Emp[];
  constructor( private empServive :EmpService) { }

  ngOnInit() {
   this.loadData();
  }
  loadData(){
    this.emps=null;
   
    this.empServive.getAll().subscribe(
      (data) =>{this.emps=data;}
      
    );
  }

  public delete(empId:number){
    if(confirm(`are you sure of deleting emp#${empId}`)){
   this.empServive.deleteById(empId).subscribe(
     ()=>{this.loadData;},
    
   )
    }
  }

}
