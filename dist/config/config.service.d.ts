import { ConfigService } from '@nestjs/config';
import { ConfigParametersI, VaribleEnvironmentType } from './models/models.config';
export declare class ConfigParametersService {
    private configService;
    constructor(configService: ConfigService<ConfigParametersI>);
    getVariableEnvironment(name: VaribleEnvironmentType): any;
}
