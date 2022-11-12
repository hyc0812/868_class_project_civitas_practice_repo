import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public todoListMessage: string;
  public todo_list_message_error: boolean;
  public todoList = [];

  constructor() {
    const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.todoList.push({ cId: random, msg: 'Lorem Ipsum Dolor Sit Amet' });
    this.todoList.push({ cId: random + 1, msg: 'Industry standard dummy text ever since the 1500s' });
    this.todoList.push({ cId: random + 2, msg: 'The point of using Lorem Ipsum is that it has a more-or-less' });
    this.todoList.push({ cId: random + 3, msg: 'Contrary to popular belief' });
    this.todoList.push({ cId: random + 4, msg: 'Lorem Ipsum Dolor Sit Amet' });
  }

  ngOnInit() {}

  addTodoList() {
    if (this.todoListMessage === '' || this.todoListMessage === undefined) {
      this.todo_list_message_error = true;
    } else {
      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      this.todoList.push({ cId: random, msg: this.todoListMessage });
      this.todoListMessage = '';
    }
  }

  completeTodoList(e) {
    e.target.parentElement.classList.remove('done-task');
    if (e.target.checked) {
      e.target.parentElement.classList.add('done-task');
    }
  }
}
