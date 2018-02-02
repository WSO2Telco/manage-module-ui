import { environment } from '../environments/environment';
import {ConfigService} from './commons/services/config.service';

export function AppConfig(configService: ConfigService) {
    return () => configService.load(environment.configFile);
}