export type VaribleEnvironmentType = 'credentials_firebase' | 'id_laboratorio';
export interface ConfigParametersI {
    portBackend?: number;
    jwtSecret?: string;
    securityKey?: string;
    host_backend?: string;
    credentials_firebase?: string;
    id_laboratorio?: string;
}
export interface ParametroI {
    id?: number;
    name: string;
    value: string;
    descrip: string;
    cifrado: number;
}
