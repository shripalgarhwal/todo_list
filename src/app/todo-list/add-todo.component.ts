import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { TodoType } from './todo-interface';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public addForm:FormGroup;
  @Output() addEmitter:EventEmitter<TodoType> = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initValueForm()
  }
  public initValueForm():void {
    this.addForm = this.fb.group({
      todo: [''],
      schedule: [null]
    });
  }
  public submitForm():void {
    this.addEmitter.emit(this.addForm.value);
  }
}
