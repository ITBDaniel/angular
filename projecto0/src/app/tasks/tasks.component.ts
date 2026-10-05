import { Component, input } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  taskList = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular.',
      dueDate: '2026-12-31'
    },
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular.',
      dueDate: '2026-12-31'
    },
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular.',
      dueDate: '2026-12-31'
    }
  ];

  selectedUser = input.required<User | null>();

  isSameUser(taskUserId: string): boolean {
    return taskUserId === this.selectedUser()?.id;
  }
}
