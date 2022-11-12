import { Component, Directive, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoListMessage: string;
  public todo_list_message_error: boolean;
  public todoList = [];
  public toModalList = [];

  @ViewChild('defaultClick') defaultClick: ElementRef;

  public todoCardMessage: string;
  public todo_card_message_error: boolean;
  public newTodoCard: any;
  public newTodoList: any;
  public todoModalMessage: string;
  public todo_modal_message_error: boolean;
  public newTodoModal: any;

  constructor() {
    this.newTodoCard = '';
    this.newTodoList = '';
    this.newTodoModal = '';
    const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.todoList.push({ cId: random, msg: 'Lorem Ipsum Dolor Sit Amet' });
    this.todoList.push({ cId: random + 1, msg: 'Industry standard dummy text ever since the 1500s' });
    this.todoList.push({ cId: random + 2, msg: 'The point of using Lorem Ipsum is that it has a more-or-less' });
    this.todoList.push({ cId: random + 3, msg: 'Contrary to popular belief' });
    this.todoList.push({ cId: random + 4, msg: 'Lorem Ipsum Dolor Sit Amet' });
    this.toModalList.push({
      cId1: random + 5,
      msg1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been'
    });
    this.toModalList.push({
      cId1: random + 6,
      msg1: 'the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley'
    });
    this.toModalList.push({
      cId1: random + 7,
      msg1: 'of type and scrambled it to make a type specimen book. It has survived not only five'
    });
    this.toModalList.push({
      cId1: random + 8,
      msg1: 'centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    });
  }

  ngOnInit() {}

  addTodoCard() {
    if (this.todoCardMessage === '' || this.todoCardMessage === undefined) {
      this.todo_card_message_error = true;
    } else {
      const html_todo = '<li>' + '<p>' + this.todoCardMessage + '</p>' + '</li>';

      this.newTodoCard = this.newTodoCard + html_todo;
      this.todoCardMessage = '';
    }
  }

  clearAllTodoCardTask() {
    const cardTodoList = document.querySelectorAll('#task-list li');
    for (let i = 0; i < cardTodoList.length; i++) {
      cardTodoList[i].remove();
    }
    this.newTodoCard = '';
  }

  // to do list and to do modal

  addTodoList() {
    if (this.todoListMessage === '' || this.todoListMessage === undefined) {
      this.todo_list_message_error = true;
    } else {
      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      this.todoList.push({ cId: random, msg: this.todoListMessage });
      this.todoListMessage = '';
    }
  }

  addTodoModal() {
    if (this.todoModalMessage === '' || this.todoModalMessage === undefined) {
      this.todo_modal_message_error = true;
    } else {
      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      this.toModalList.push({ cId1: random, msg1: this.todoModalMessage });
      this.todoModalMessage = '';
    }
  }

  completeTodoList(e) {
    e.target.parentElement.classList.remove('done-task');
    if (e.target.checked) {
      e.target.parentElement.classList.add('done-task');
    }
  }

  completeTodoList1(e) {
    e.target.parentElement.classList.remove('done-task');
    if (e.target.checked) {
      e.target.parentElement.classList.add('done-task');
    }
  }
}
