import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsString()
    @MinLength(1)
    @MaxLength(6)
    @IsNotEmpty()
    public userName: string;

    @IsString()
    @MinLength(4)
    @MaxLength(10)
    @IsNotEmpty()
    public codeApp: String;

    @IsEmail()
    @IsNotEmpty()
    public email: string

}
