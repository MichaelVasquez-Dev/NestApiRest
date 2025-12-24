import { IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsNotEmpty({ message: 'the name is required' })
    @IsString({ message: 'the name must be a string' })
    @MinLength(3, { message: 'the name must be at least 3 characters long' })
    name: string;

    @IsNotEmpty({ message: 'the number is required' })
    @IsNumber({}, { message: 'the number must be a number' })
    @IsPositive({ message: 'the number must be positive' })
    no: number;

}
