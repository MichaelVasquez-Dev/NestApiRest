import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateBrandDto {

    @IsString({ message: 'el nombre debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'el nombre es requerido' })
    @MinLength(3, { message: 'el nombre debe tener al menos 3 caracteres' })
    readonly name: string;

}
