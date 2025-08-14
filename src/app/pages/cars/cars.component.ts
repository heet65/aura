import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
 cars = [
    {
      key: 'mustang',
      name: '1967 Ford Mustang',
      image: 'https://i.ibb.co/tTZFFXvx/1972-Ford-Mustang.jpg',
      description: 'Classic American muscle car with iconic design and powerful engine.',
      details: `<h3>1967 Ford Mustang - Details</h3><p>Equipped with a V8 engine, manual transmission, and a sleek fastback design. A true symbol of American muscle cars.</p>`
    },
    {
      key: 'mercedes',
      name: '1955 Mercedes-Benz 300SL',
      image: 'https://i.ibb.co/hJ5yjQvd/Mercedes-300sl.jpg',
      description: 'Known for its gullwing doors and legendary performance.',
      details: `<h3>1955 Mercedes-Benz 300SL - Details</h3><p>The 300SL features innovative gullwing doors and a fuel-injected straight-six engine. A groundbreaking luxury sports car.</p>`
    },
    {
      key: 'bugatti',
      name: '1936 Bugatti Type 57SC Atlantic',
      image: 'https://i.ibb.co/7NnqHscr/1936-Bugatti-Type-57-SC-Atlantic.jpg',
      description: 'One of the rarest and most beautiful vintage sports cars in history.',
      details: `<h3>1936 Bugatti Type 57SC Atlantic - Details</h3><p>With only a few ever made, this rare car boasts flowing lines, lightweight alloy construction, and an unforgettable presence.</p>`
    },
    {
      key: 'jaguar',
      name: '1961 Jaguar E-Type',
      image: 'https://i.ibb.co/TMwyM8XT/Jaguar-E-Type-3-8-Coupe-I-Series-1961-black.jpg',
      description: 'British legend praised for its beauty, performance, and influence.',
      details: `<h3>1961 Jaguar E-Type - Details</h3><p>Ahead of its time in both aesthetics and engineering, this car features disc brakes, independent suspension, and striking curves.</p>`
    },
    {
      key: 'belair',
      name: '1957 Chevrolet Bel Air',
      image: 'https://i.ibb.co/WvhxM7tm/Chevrolet-Bel-Air-1955-1957.jpg',
      description: 'Icon of the 1950s, representing classic style and American culture.',
      details: `<h3>1957 Chevrolet Bel Air - Details</h3><p>Stylish and bold, the Bel Air defined the American dream car of the \'50s. V8 power, chrome accents, and timeless appeal.</p>`
    }
  ];

  modalOpen = false;
  modalMode: 'info' | 'ride' | 'quote' = 'info';
  modalContent: string = '';
  currentCar: any = null;

  formData = {
    name: '',
    contact: ''
  };

  openModal(mode: 'info' | 'ride', car: any) {
    this.modalMode = mode;
    this.currentCar = car;
    this.modalOpen = true;
    this.modalContent = car.details;
    this.formData = { name: '', contact: '' };
  }

  closeModal(event?: any) {
    this.modalOpen = false;
    this.currentCar = null;
    this.modalContent = '';
    this.formData = { name: '', contact: '' };
  }

  submitForm(event: Event) {
    event.preventDefault();
    const { name, contact } = this.formData;
    if (name && contact) {
      const action = this.modalMode === 'ride' ? 'test ride' : 'quotation';
      alert(`Thank you, ${name}! Your ${action} request for "${this.currentCar.name}" has been received. We'll contact you at ${contact}.`);
      this.closeModal();
    } else {
      alert('Please fill out all fields.');
    }
  }
}
