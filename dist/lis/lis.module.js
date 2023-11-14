"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LisModule = void 0;
const common_1 = require("@nestjs/common");
const connection_1 = require("./services/connection");
const interface_service_1 = require("./services/interface.service");
const config_module_1 = require("../config/config.module");
const firebase_module_1 = require("../firebase/firebase.module");
let LisModule = class LisModule {
};
LisModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ConfigParametersModule,
            firebase_module_1.FirebaseModule
        ],
        providers: [
            connection_1.Connection,
            interface_service_1.InterfaceService
        ]
    })
], LisModule);
exports.LisModule = LisModule;
//# sourceMappingURL=lis.module.js.map