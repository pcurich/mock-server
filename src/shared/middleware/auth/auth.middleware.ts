import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { Request, Response } from "express";
import { IncomingHttpHeaders } from 'http';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers

    if (!authorization) {
      throw new HttpException("UNAUTHORIZED", HttpStatus.UNAUTHORIZED)
    }
    if (authorization !== "pcurich") {
      throw new HttpException("FORBIDDEN", HttpStatus.FORBIDDEN)
    }
    next();
  }
}
