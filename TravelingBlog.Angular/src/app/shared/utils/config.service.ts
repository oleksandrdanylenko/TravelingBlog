import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  _apiURI: string;

  constructor() {
<<<<<<< HEAD
    this._apiURI = 'http://travelingblog.azurewebsites.net';
=======
    this._apiURI = 'https://localhost:44360';
>>>>>>> Sub_branch_edik_danylo
  }

  getApiURI() {
    return this._apiURI;
  }
}
