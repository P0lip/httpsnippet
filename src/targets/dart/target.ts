import { Target } from '../targets.js';
import { httpclient } from './httpclient/client.js';

export const dart: Target = {
  info: {
    key: 'dart',
    title: 'Dart',
    extname: '.dart',
    default: 'httpclient',
  },
  clientsById: {
    httpclient,
  },
};
