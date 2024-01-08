import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontendService';
  getName = '';
  getId = '';
  postName = '';
  postId = '';
  postCity = '';
  postDob = '';
  responseMessage = '';

  constructor(private http: HttpClient) {}

  submitGetForm() {
    const getUrl = `http://localhost:3000/data?name=${encodeURIComponent(this.getName)}&id=${encodeURIComponent(this.getId)}`;
    this.http.get<any>(getUrl).subscribe({
      next: (response) => {
        console.log('GET Response:', response);
        this.responseMessage = `GET Success: ${response.message}`;
      },
      error: (error) => {
        console.error('GET Error:', error);
        this.responseMessage = `GET Error: ${error.message}`;
      }
    });
  }

  submitPostForm() {
    const postUrl = 'http://localhost:3000/submit';
    const postData = {
      name: this.postName,
      id: this.postId,
      city: this.postCity,
      dob: this.postDob
    };
    this.http.post<any>(postUrl, postData).subscribe({
      next: (response) => {
        console.log('POST Response:', response);
        this.responseMessage = `POST Success: ${response.message}`;
      },
      error: (error) => {
        console.error('POST Error:', error);
        this.responseMessage = `POST Error: ${error.message}`;
      }
    });
  }
}
