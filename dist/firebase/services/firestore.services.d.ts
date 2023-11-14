import admin from "firebase-admin";
export declare class FirestoreService {
    private firestore;
    constructor();
    setFirestore(): void;
    getFirestore(): admin.firestore.Firestore;
    getId(): string;
    createDocumentID<tipo>(data: tipo, enlace: string, idDoc: string): Promise<admin.firestore.WriteResult>;
    getCollecion<tipo>(enlace: string): Promise<tipo[]>;
    deleteDocumentID(enlace: string, idDoc: string): Promise<admin.firestore.WriteResult>;
    getDocumentID<tipo>(enlace: string, id: string): Promise<tipo>;
    updateDocumentID(data: any, enlace: string, id: string): Promise<admin.firestore.WriteResult>;
    findDocumentInCollectionGroup<tipo>(path: string, id: string): Promise<tipo>;
    deleteCollection(enlace: string): Promise<void>;
}
