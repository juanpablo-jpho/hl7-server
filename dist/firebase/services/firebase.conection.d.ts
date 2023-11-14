import { FirestoreService } from './firestore.services';
import { AuthService } from './auth.services';
import { FirestorageService } from './firestorage.service';
import { ConfigParametersService } from 'src/config/config.service';
export declare class FirebaseConectionService {
    private configParametersService;
    private firestoreService;
    private authService;
    private firestorageService;
    constructor(configParametersService: ConfigParametersService, firestoreService: FirestoreService, authService: AuthService, firestorageService: FirestorageService);
    initAdmin(): Promise<void>;
}
