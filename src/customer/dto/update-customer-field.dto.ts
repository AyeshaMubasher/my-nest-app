import { IsInt, IsString } from "class-validator";

export class UpdateCustomerFieldDto{
    @IsString()
    name: string;

    @IsInt()
    age: number;
}