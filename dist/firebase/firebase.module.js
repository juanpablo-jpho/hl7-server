"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseModule = void 0;
const common_1 = require("@nestjs/common");
const firebase_conection_1 = require("./services/firebase.conection");
const firestore_services_1 = require("./services/firestore.services");
const auth_services_1 = require("./services/auth.services");
const guard_firebase_1 = require("./services/guard.firebase");
const firestorage_service_1 = require("./services/firestorage.service");
const config_module_1 = require("../config/config.module");
let FirebaseModule = class FirebaseModule {
};
FirebaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ConfigParametersModule
        ],
        providers: [
            firebase_conection_1.FirebaseConectionService,
            firestore_services_1.FirestoreService,
            firestorage_service_1.FirestorageService,
            auth_services_1.AuthService,
            guard_firebase_1.FirebaseGuard
        ],
        exports: [
            firestore_services_1.FirestoreService,
            auth_services_1.AuthService,
            guard_firebase_1.FirebaseGuard,
            firestorage_service_1.FirestorageService
        ]
    })
], FirebaseModule);
exports.FirebaseModule = FirebaseModule;
//# sourceMappingURL=firebase.module.js.map