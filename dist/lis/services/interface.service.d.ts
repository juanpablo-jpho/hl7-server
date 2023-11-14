import { HL7_I } from '../models/list.models';
import { FirestoreService } from 'src/firebase/services/firestore.services';
import { ConfigParametersService } from 'src/config/config.service';
export declare class InterfaceService {
    private configParametersService;
    private firestoreService;
    constructor(configParametersService: ConfigParametersService, firestoreService: FirestoreService);
    process(data: HL7_I): void;
    saveHL7(data: HL7_I): Promise<void>;
}
