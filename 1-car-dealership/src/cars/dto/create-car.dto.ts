import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateCarDto {
    
    @IsString({ message: 'la marca debe ser una cadena de texto' })
    @IsNotEmpty ({ message: 'la marca es requerida' })
    @MinLength(3, { message: 'la marca debe tener al menos 3 caracteres' })
    readonly brand: string;
    
    @IsString({ message: 'el modelo debe ser una cadena de texto' })
    @IsNotEmpty ({ message: 'el modelo es requerido' })
    @MinLength(3, { message: 'el modelo debe tener al menos 3 caracteres' })
    readonly model: string;
    
    @IsPositive()   
    @IsNumber   ()
    @IsNotEmpty ({ message: 'el año es requerido' })
    @Min(2000, { message: 'el año debe ser mayor a 2000' })
    readonly year: number;
    
    @IsString()
    @IsNotEmpty ({ message: 'el color es requerido' })
    @MinLength(3, { message: 'el color debe tener al menos 3 caracteres' })
    readonly color: string;
    
    @IsPositive()
    @IsNumber()
    @IsNotEmpty ({ message: 'el precio es requerido' })
    @Min(0, { message: 'el precio debe ser mayor a 0' })
    readonly price: number;
}
