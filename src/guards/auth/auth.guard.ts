import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const requerst = context.switchToHttp().getRequest();
    const authHeader = requerst.headers['authorization'];

    return authHeader === 'Bearer my-secret-token';
  }
}
