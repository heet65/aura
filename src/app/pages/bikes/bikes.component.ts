import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bikes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent {
 bikes = [
    {
      name: "Royal Enfield Classic 350",
      img: "https://i.ibb.co/Dfy7hKBT/748b54d9-6296-4713-9b12-e49a1ebba00e.jpg",
      desc: "Iconic vintage styling with modern performance and comfort."
    },
    {
      name: "Jawa 42",
      img: "https://i.ibb.co/3P4C7GJ/31a0c9ba-7bb6-43db-bbb9-843adedd6cc4.jpg",
      desc: "A retro-modern blend with smooth handling and a classic look."
    },
    {
      name: "Yezdi Roadster",
      img: "https://i.ibb.co/pm2nn5P/yezdi-jawa-rx-stroke-yezdiroadking.jpg",
      desc: "Classic cruiser feel, updated for today's riders."
    },
    {
      name: "Honda CB350",
      img: "https://i.ibb.co/KpPCJNvh/motorcycle-cb350rs-honda-smk-photography.jpg",
      desc: "A blend of reliability, performance and classic design."
    },
    {
      name: "Triumph Bonneville T100",
      img: "https://i.ibb.co/s9026YcY/Triumph-Bonneville-T120-by-island-customs-co.jpg",
      desc: "Timeless design with British engineering heritage."
    },
  ];

  modalOpen = false;
  modalContent = '';
  selectedBike: any = null;

  showInfo(bike: any) {
    this.selectedBike = bike;
    this.modalContent = `
      <h3>${bike.name}</h3>
      <p>${bike.desc}</p>
    `;
    this.modalOpen = true;
  }

  bookRide(bike: any) {
    this.selectedBike = bike;
    this.modalContent = `
      <h3>Book a Test Ride - ${bike.name}</h3>
    `;
    this.modalOpen = true;
  }

  getQuotation(bike: any) {
    this.selectedBike = bike;
    this.modalContent = `
      <h3>Get Quotation - ${bike.name}</h3>
    `;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalContent = '';
  }

  submit(name: string, phone: string, action: string) {
    alert(`Thank you ${name}, we will contact you soon at ${phone} for ${action} on ${this.selectedBike?.name}.`);
    this.closeModal();
  }
}
