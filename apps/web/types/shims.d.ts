/*
 * @Author: Semmy Wong
 * @Date: 2024-01-30 17:52:36
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-01-30 17:52:49
 * @Description: Description
 */
// This File is only needed if you use Attributify
// Learn more: https://unocss.dev/presets/attributify
import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
