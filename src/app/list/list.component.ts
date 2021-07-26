import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listForm!: FormGroup;
list:any = [ {
  displayName: 'MicroSoft'},{
  displayName: 'Hcl'},
  {displayName: 'Infosys'},
  {displayName : 'Wipro'
}]
  listcopy:any
  constructor(private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
    
    this.listcopy = this.list;
    this.listForm = this.fb.group({
      search: new FormControl('')
    })
  }
public sear(c:any) {
  console.log("sa",c.target.value)
    var letter = c.target.value;
    this.list = this.listcopy;
    if(letter == '') {
      return this.listcopy  ;
    }
    this.list = this.listcopy.filter((p :any) => {
      return p.displayName.toLowerCase().indexOf(letter.toLowerCase()) > -1;
    })
    }

}
