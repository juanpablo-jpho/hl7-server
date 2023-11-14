export interface DataResult {
    id: string;
    sampleId: string;
    nombre: string;
    fecha: any;
    date: any;
    resultados: ValueResult[];
}
export interface ValueResult {
    nombre: string;
    value: any;
    unidad: string;
    referencia: string;
}
