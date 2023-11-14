"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    portBackend: +process.env.PORT_BACKEND,
    jwtSecret: process.env.JWT_SECRET,
    securityKey: process.env.SECURITY_KEY,
    host_backend: process.env.HOST_BACKEND,
    credentials_firebase: process.env.CREDENTIALS_FIREBASE,
    id_laboratorio: process.env.ID_LABORATORIO
});
//# sourceMappingURL=configuration.js.map