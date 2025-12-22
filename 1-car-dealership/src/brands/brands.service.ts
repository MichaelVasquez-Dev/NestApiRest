import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from './dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with id ${id} not found`);
    
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
  
    const brandDB = this.findOne(id);
    this.brands = this.brands.map((brand) => brand.id === id ? { ...brand, ...updateBrandDto, id } : brand);
    return brandDB;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return 'Brand deleted successfully';
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
