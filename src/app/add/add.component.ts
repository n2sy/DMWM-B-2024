import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  cand;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('http://localhost:3000/cv/persons/660ee3dfbae0d3065422bd50')
      .subscribe({
        next: (res) => {
          this.cand = res;
        },
      });
  }

  onSubmit(val, e) {
    console.log(val, e);
    console.log(e.target[4].files[0]);

    const formData = new FormData();

    formData.append('avatar', e.target[4].files[0]);
    this.http.post('http://localhost:3000/images/upload', formData).subscribe({
      next: (res) => {
        console.log(res['fileName']);
        this.http
          .post('http://localhost:3000/cv/persons/free', {
            ...val,
            avatar: res['fileName'],
          })
          .subscribe({
            next: (data) => {
              console.log(data);
            },
          });
      },
    });
  }

  uploadFile(e) {}
}
