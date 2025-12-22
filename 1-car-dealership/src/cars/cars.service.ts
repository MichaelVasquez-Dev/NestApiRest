import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from './dto';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

  private cars: Car[] = [];


  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);
    return car; 
  }

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    
    const carDB = this.findOne(id);

    this.cars = this.cars.map((car) => car.id === id ? { ...car, ...updateCarDto, id } : car);

    return carDB;
  }

  remove(id: string) {
    this.findOne(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return 'Car deleted successfully';
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
