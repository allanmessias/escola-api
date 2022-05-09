import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

// Cria novo usário
router.post('/', UserController.store);

export default router;

/*
index => lista todos os usuarios,
store/create => cria um novo usuario,
delete => deleta o usuario,
show => mostra o usuario,
update => atualiza o usuario
*/