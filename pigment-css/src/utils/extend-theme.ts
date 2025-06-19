import { extendTheme as _extendTheme } from '@pigment-css/unplugin';
import type { ExtendTheme } from '@pigment-css/react/utils';

/**
 * Обёртка над оригинальным extendTheme, с выводом
 * точного типа colorScheme и tokens из config.colorSchemes
 */
export function extendTheme<CS extends Record<string, Record<string, any>>>(config: {
  /** map схем (light|dark|...) → токены */
  colorSchemes: CS;
  /** селектор по схеме; css-аргумент нам в обёртке не нужен */
  getSelector?: (scheme: Extract<keyof CS, string>) => string;
}): ExtendTheme<{
  colorScheme: Extract<keyof CS, string>;
  tokens: CS[Extract<keyof CS, string>];
}> {
  // подавляем ошибку несовместимости сигнатур:
  // на рантайме это всё та же функция extendTheme
  // и мы гарантируем соответствие типов
  // @ts-ignore
  return _extendTheme(config);
}
