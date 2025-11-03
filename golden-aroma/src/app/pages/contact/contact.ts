import emailjs from 'emailjs-com';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const serviceID = 'service_q2jw8eq';
    const templateID = 'template_uiztd3d';
    const publicKey = 'RqlOVIfY0NWhZrvMk'; // حط هنا الـ public key بتاعك

    emailjs.init(publicKey);

    const params = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    };

    emailjs.send(serviceID, templateID, params)
      .then(() => {
        alert('✅ Message sent successfully!');
        this.formData = { name: '', email: '', message: '' };
      })
      .catch((error) => {
        alert('❌ Failed to send message.\n' + JSON.stringify(error));
      });
  }
}
