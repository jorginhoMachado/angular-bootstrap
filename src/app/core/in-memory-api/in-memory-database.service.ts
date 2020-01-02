import {getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

const usuarios = [
  { id: 1, username: 'ana', password: 'ana', firstName: 'Ana Graciosa', lastName: 'Cheia de Graça' },
  { id: 2, username: 'ema', password: 'ema', firstName: 'Ema', lastName: 'Toda Universal' },
];


@Injectable()
export class InMemoryDatabaseService implements InMemoryDbService {

  createDb() {
    return {usuarios};
  }

  get(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'lista') {
      return this.request(reqInfo);
    }
    return undefined;
  }



  post(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'usuarios') {
      return this.authenticate(reqInfo);
    }
    return undefined;
  }


  private hasPage(reqInfo: any): boolean {
    return reqInfo.query.get('page')[0] !== 'undefined';
  }

  private authenticate(reqInfo: any) {
    const username = reqInfo.req.body.data.username;
    const password = reqInfo.req.body.data.password;
    const token = 'TOKEN OK';
    const user = usuarios.find(item => item.username === username && item.password === password);
    if (user) {
      reqInfo.req.body.data.token = token;
      return reqInfo.utils.createResponse$(() => {
        const options: ResponseOptions = {
          body: {
            id: user.id,
            usernamne: user.username,
            token
          },
          status: STATUS.OK
        };
        return this.finishOptions(options, reqInfo);
      });
    }
    return this.finishOptions({body: {data: []}, status: STATUS.NOT_FOUND}, reqInfo);
  }

  private request(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      const body = this.list(reqInfo);
      const options: ResponseOptions =  body ? { body, status: STATUS.OK} : {body: {data: []}, status: STATUS.NOT_FOUND};
      return this.finishOptions(options, reqInfo);
    });
  }

  private list(reqInfo: RequestInfo) {
    const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
    const collection = reqInfo.collection;
    const data = dataEncapsulation ? {collection} : collection;
    if (this.hasPage(reqInfo)) {
      return {
        data,
        page: 1,
        per_page: 1,
        total: data.length,
        total_pages: 1
      };
    }
    return {data};
  }

  private finishOptions(options: ResponseOptions, { headers, url }: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}
