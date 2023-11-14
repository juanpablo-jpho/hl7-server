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
exports.FirebaseConectionService = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = require("firebase-admin");
const firestore_services_1 = require("./firestore.services");
const auth_services_1 = require("./auth.services");
const firestorage_service_1 = require("./firestorage.service");
const config_service_1 = require("../../config/config.service");
let FirebaseConectionService = class FirebaseConectionService {
    constructor(configParametersService, firestoreService, authService, firestorageService) {
        this.configParametersService = configParametersService;
        this.firestoreService = firestoreService;
        this.authService = authService;
        this.firestorageService = firestorageService;
        this.initAdmin();
    }
    async initAdmin() {
        const credentials = this.configParametersService.getVariableEnvironment('credentials_firebase');
        const serviceAccount = JSON.parse(credentials);
        firebase_admin_1.default.initializeApp({
            credential: firebase_admin_1.default.credential.cert(serviceAccount)
        });
        this.firestoreService.setFirestore();
        this.firestorageService.setStorage();
        this.authService.setAuth();
    }
};
FirebaseConectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigParametersService,
        firestore_services_1.FirestoreService,
        auth_services_1.AuthService,
        firestorage_service_1.FirestorageService])
], FirebaseConectionService);
exports.FirebaseConectionService = FirebaseConectionService;
//# sourceMappingURL=firebase.conection.js.map