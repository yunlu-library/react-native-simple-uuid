import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  v4(): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SimpleUuid');
