import { HttpHandler } from 'msw';

import * as authHandlers from './auth';
import * as scrapHandlers from './scrap';

const mswHandlers: HttpHandler[] = [authHandlers, scrapHandlers].flatMap(
  (handlersObj) => Object.values(handlersObj)
);

export default mswHandlers;
