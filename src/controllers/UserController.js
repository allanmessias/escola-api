import User from '../models/User';

class UserController {
    async store(req, res) {
        try {
            const novoUser = await User.create(req.body);
            return res.json(novoUser);
        } catch (e) {
            const error = {
                errs: e.errors.map((err) => err.message),
            };
            return res.status(400).json(error);
        }
    }

    async index(req, res) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {
            return res.json(null);
        }
    }

    async show(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            return res.json(user);
        } catch (e) {
            return res.json(null);
        }
    }

    async update(req, res) {
        try {
            /**
             * Condição não funcionando, checar depois
             * if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID NÃO ENVIADO'],
                });
            } */
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                });
            }
            const updatedUser = await user.update(req.body);

            return res.json(updatedUser);
        } catch (e) {
            const err = {
                errs: e.errors.map((err) => err.message),
            };
            return res.status(400).json(err);
        }
    }

    async delete(req, res) {
        try {
            if (!req.params.id) {
                return res.status(400).json({
                    errors: ['ID NÃO ENVIADO'],
                });
            }

            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                });
            }

            const deletedUser = await user.destroy();
            return res.json(deletedUser);
        } catch (e) {
            return res.json(null);
        }
    }
}

export default new UserController();