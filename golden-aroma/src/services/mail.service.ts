import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  sendMail(subject: string, body: string): void {
    const mailtoLink = `mailto:mohamedasmaa903@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    // Store draft in localStorage
    const draft = { subject, body, timestamp: new Date().toISOString() };
    localStorage.setItem('mailDraft', JSON.stringify(draft));
  }

  getMailDraft(): { subject: string; body: string; timestamp: string } | null {
    const draft = localStorage.getItem('mailDraft');
    return draft ? JSON.parse(draft) : null;
  }

  clearMailDraft(): void {
    localStorage.removeItem('mailDraft');
  }

  createInquiryMail(productName: string, productId: number): { subject: string; body: string } {
    const subject = `Inquiry about ${productName} (id:${productId})`;
    const body = `Hello,\n\nI am interested in the ${productName}.\n\nPlease provide more information.\n\nBest regards,\n[Your Name]`;
    return { subject, body };
  }

  createContactMail(name: string, email: string, message: string): { subject: string; body: string } {
    const subject = 'Message from Golden Aroma';
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    return { subject, body };
  }
}
