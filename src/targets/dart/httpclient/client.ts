import { CodeBuilder } from '../../../helpers/code-builder.js';
import { Client } from '../../targets.js';

export const httpclient: Client = {
  info: {
    key: 'httpclient',
    title: 'HttpClient',
    link: '',
    description: 'dart:io default HTTP Client',
  },
  convert: ({ allHeaders, postData, method, fullUrl }, options) => {
    const opts = {
      indent: '    ',
      ...options,
    };

    const { push, join } = new CodeBuilder({ indent: opts.indent });

    push('import \'dart:io\';');
    push('Future<void> main() async {');
    push('final client = HttpClient();', 1);
    push(`final request = client.${method.toLowerCase()}Url(${fullUrl})`, 1);
    push('final response = await request.close();', 1);
    push('final body = await response.transform(const Utf8Decoder()).join();', 1);
    push('print(body);', 1);
    push('}');

    return join();
  },
};
