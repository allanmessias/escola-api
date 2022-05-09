import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

// Cria novo usário
router.post('/', UserController.store);
router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;

/*
index => lista todos os usuarios,
store/create => cria um novo usuario,
delete => deleta o usuario,
show => mostra o usuario,
update => atualiza o usuario
*/