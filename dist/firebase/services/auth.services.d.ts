export declare class AuthService {
    private auth;
    constructor();
    setAuth(): void;
    isAdmin(token: string): Promise<boolean>;
    setAdmin(uid: string): Promise<void>;
}
