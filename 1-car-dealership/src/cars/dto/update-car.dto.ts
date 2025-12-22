import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCarDto extends PartialType(CreateCarDto) {

    @IsString({ message: 'el id debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'el id es requerido' })
    @IsOptional()
    readonly id?: string;


}
