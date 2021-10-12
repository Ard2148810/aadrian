import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Component({
  selector: 'aadrian-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  socket = io('http://localhost:3333/');
  text!: Observable<{ message: string }>;
  wsText = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.text = this.http.get<{ message: string }>('http://localhost:3333/api');
    this.socket.emit('send_message', 'Hello, there!');
    this.socket.on(
      'receive_message',
      (message: string) => (this.wsText = message)
    );
  }
}
