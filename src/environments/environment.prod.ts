export enum AuthMethod {
  NONE
}

export const environment = {
  production: true,
  inMemoryWebApi: false,
  api: 'api',
  auth_method: AuthMethod.NONE,
  client_name: '',
  system_name: '',
  system_version: '1.0.0',
  environment: 'prod',
  environment_name: 'Produção',
};

