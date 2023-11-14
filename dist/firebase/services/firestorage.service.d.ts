import { FirestoreService } from './firestore.services';
export declare class FirestorageService {
    private firestoreService;
    private storage;
    private bucketName;
    private storageUrl;
    constructor(firestoreService: FirestoreService);
    setStorage(): void;
    uploadFile(filePath: string, destination: string): Promise<string>;
}
