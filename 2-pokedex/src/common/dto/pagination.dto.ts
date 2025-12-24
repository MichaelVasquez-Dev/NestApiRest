import { IsOptional, Min, Max, IsPositive, IsNumber } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Min(1)
    @Max(100)
    limit?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    offset?: number;

}