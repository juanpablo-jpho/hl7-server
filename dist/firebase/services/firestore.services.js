"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirestoreService = void 0;
const common_1 = require("@nestjs/common");
const firestore_1 = require("firebase-admin/firestore");
let FirestoreService = class FirestoreService {
    constructor() { }
    setFirestore() {
        this.firestore = (0, firestore_1.getFirestore)();
    }
    getFirestore() {
        return this.firestore;
    }
    getId() {
        return this.firestore.collection('tmp').doc().id;
    }
    createDocumentID(data, enlace, idDoc) {
        return this.firestore.collection(enlace).doc(idDoc).set(data);
    }
    async getCollecion(enlace) {
        const collection = await this.firestore.collection(enlace).get();
        const data = [];
        collection.docs.forEach(doc => data.push(doc.data()));
        return data;
    }
    deleteDocumentID(enlace, idDoc) {
        return this.firestore.collection(enlace).doc(idDoc).delete();
    }
    async getDocumentID(enlace, id) {
        const doc = await this.firestore.collection(enlace).doc(id).get();
        if (doc.exists) {
            return doc.data();
        }
        return null;
    }
    async updateDocumentID(data, enlace, id) {
        return await this.firestore.collection(enlace).doc(id).update(data);
    }
    async findDocumentInCollectionGroup(path, id) {
        const data = await this.firestore.collectionGroup(path).where('id', '==', id).limit(1).orderBy('id', 'desc').get();
        if (!data.empty) {
            return data.docs[0].data();
        }
        return null;
    }
    async deleteCollection(enlace) {
        return this.firestore.recursiveDelete(this.firestore.collection(enlace));
    }
};
FirestoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirestoreService);
exports.FirestoreService = FirestoreService;
//# sourceMappingURL=firestore.services.js.map