/*
 * @Author: Semmy Wong
 * @Date: 2024-03-07 16:54:44
 * @LastEditors: Semmy Wong
 * @LastEditTime: 2024-03-07 16:55:37
 * @Description: Description
 */
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: parseFloat(process.env.NEXT_PUBLIC_SENTRY_TRACE_SAMPLE_RATE ?? '0.0'),
  debug: false,
});
