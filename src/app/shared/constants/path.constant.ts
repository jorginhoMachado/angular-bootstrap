import {environment} from '../../../environments/environment';

export const API_BASE = environment.api;
export const PATH = {
  LOGIN: 'login',
  HOME:  'home',
  ACAO: {
    ADD: 'cadastrar',
    EDIT: 'editar/:id',
    DETAIL: 'detalhar/:id'
  }
};
