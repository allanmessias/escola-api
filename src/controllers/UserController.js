import User from '../models/User';

class UserController {
    async store(req, res) {
        try {
            const novoUser = await User.create({
                nome: 'Allan',
                email: 'allanmessiasdecoelho@gmail.com',
                password: '123456',
            });
            res.json(novoUser);
        } catch (e) {
            const error = {
                errs: e.errors.map((err) => err.message),
            };
            res.status('400').json(error);
        }
    }
}

export default new UserController();