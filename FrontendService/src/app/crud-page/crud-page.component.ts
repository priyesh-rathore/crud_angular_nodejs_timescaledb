import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css']
})
export class CrudPageComponent implements OnInit {
  // Properties for form data binding
  createName = '';
  createCity = '';
  createDob: string | null = null;

  fetchId = ''; // Property for fetching by ID

  updateId = '';
  updateName = '';
  updateCity = '';
  updateDob: string | null = null;

  deleteId = '';

  entries: any[] = []; // Store entries fetched from the database
  output: any;  // Property to hold and display the output

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  createEntry(): void {
    const url = 'http://localhost:3000/api/create'; // Placeholder URL
    const body = { name: this.createName, city: this.createCity, dob: this.createDob };
    this.http.post(url, body).subscribe(response => {
      this.output = response; // Assign the response to the output property
      console.log('Create response:', response);
      // Additional logic after creation
    }, error => {
      console.error('Create error:', error);
    });
  }

  fetchEntryById(): void {
    const url = `http://localhost:3000/api/read/${this.fetchId}`; // Adjust the URL as needed
    this.http.get(url).subscribe(response => {
      this.output = response; // Assign the response to the output property
      console.log('Read response:', response);
    }, error => {
      this.output = error; // Handle the error case
    });
  }

  updateEntry(): void {
    const url = `http://localhost:3000/api/update/${this.updateId}`; // Placeholder URL
    const body = { name: this.updateName, city: this.updateCity, dob: this.updateDob };
    this.http.put(url, body).subscribe(response => {
      this.output = response; // Assign the response to the output property
      console.log('Update response:', response);
      // Additional logic after update
    }, error => {
      console.error('Update error:', error);
    });
  }

  deleteEntry(): void {
    const url = `http://localhost:3000/api/delete/${this.deleteId}`; // Placeholder URL
    this.http.delete(url).subscribe(response => {
      this.output = response; // Assign the response to the output property
      console.log('Delete response:', response);
      // Additional logic after deletion
    }, error => {
      console.error('Delete error:', error);
    });
  }
}
