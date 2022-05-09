import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const router = new Router();

// Cria novo usário
router.post('/', TokenController.store);

export default router;

/*
index => lista todos os usuarios,
store/create => cria um novo usuario,
delete => deleta o usuario,
show => mostra o usuario,
update => atualiza o usuario
*/