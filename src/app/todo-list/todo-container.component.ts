import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddTodoComponent } from './add-todo.component';
import { TodoType } from './todo-interface';

@Component({
  selector: 'todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  public  toDoList: TodoType[] = [
    {
      sno: 1,
      todo: "home work",
      schedule: new Date()
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    
  }
  public addTodo(event: TodoType):void {
    let obj: TodoType = {...event, sno: (this.toDoList[this.toDoList.length - 1].sno + 1)}
    this.toDoList.push(obj);
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddTodoComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.addTodo(result);
    });
  }
  public deleteTodo(id: number): void {
    delete this.toDoList[id]
  }
}
