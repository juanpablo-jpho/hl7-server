import { ExecutionContext, CanActivate } from '@nestjs/common';
import { AuthService } from 'src/firebase/services/auth.services';
export declare class FirebaseGuard implements CanActivate {
    private authService;
    private request;
    constructor(authService: AuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
