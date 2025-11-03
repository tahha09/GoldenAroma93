import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 closeNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse?.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  }
}
