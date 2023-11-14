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
exports.InterfaceService = void 0;
const common_1 = require("@nestjs/common");
const firestore_services_1 = require("../../firebase/services/firestore.services");
const config_service_1 = require("../../config/config.service");
let InterfaceService = class InterfaceService {
    constructor(configParametersService, firestoreService) {
        this.configParametersService = configParametersService;
        this.firestoreService = firestoreService;
    }
    process(data) {
        this.saveHL7(data);
    }
    async saveHL7(data) {
        const id_lab = this.configParametersService.getVariableEnvironment('id_laboratorio');
        console.log('id laboratorio -> ', id_lab);
        const path = `Laboratorios/${id_lab}/lis`;
        const idDoc = this.firestoreService.getId();
        const doc = {
            date: new Date(),
            value: data,
            id: idDoc,
            id_lab
        };
        console.log('processing -> ', idDoc);
        await this.firestoreService.createDocumentID(doc, path, idDoc);
        console.log('saved successfull -> ', idDoc);
    }
};
InterfaceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.ConfigParametersService,
        firestore_services_1.FirestoreService])
], InterfaceService);
exports.InterfaceService = InterfaceService;
//# sourceMappingURL=interface.service.js.map