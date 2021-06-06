import constants from './const';

export function L(key: string, sourceName?: string): string {
    return constants.localization.defaultLocalizationSourceName;
}