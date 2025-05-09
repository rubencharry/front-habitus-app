import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine';

const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(
  request: Request,
  context: any
): Promise<Response> {
  return render({
    request,
    context,
    commonEngine,
    indexFilePath: 'index.html',
  });
}

export const handler = netlifyCommonEngineHandler;
