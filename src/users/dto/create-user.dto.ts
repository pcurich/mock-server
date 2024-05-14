import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userCode: string;

  @IsString()
  @IsNotEmpty()
  applicationCode: string;

  @IsString()
  @IsNotEmpty()
  environment: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
