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
exports.FirestorageService = void 0;
const common_1 = require("@nestjs/common");
const storage_1 = require("firebase-admin/storage");
const firestore_services_1 = require("./firestore.services");
let FirestorageService = class FirestorageService {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
        this.bucketName = 'teligol.appspot.com';
        this.storageUrl = 'https://firebasestorage.googleapis.com/v0/b';
    }
    setStorage() {
        this.storage = (0, storage_1.getStorage)();
    }
    async uploadFile(filePath, destination) {
        let urlFile = null;
        const token = this.firestoreService.getId();
        const response = await this.storage.bucket(this.bucketName).upload(filePath, {
            destination,
            metadata: {
                metadata: {
                    firebaseStorageDownloadTokens: token,
                },
            },
        });
        urlFile = response ? `${this.storageUrl}/${this.bucketName}/o/${response[0].id}?alt=media&token=${token}` : null;
        return urlFile;
    }
};
FirestorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firestore_services_1.FirestoreService])
], FirestorageService);
exports.FirestorageService = FirestorageService;
//# sourceMappingURL=firestorage.service.js.map