import Aluno from '../models/Aluno';

class HomeController {
    async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Allan',
            sobrenome: 'Messias',
            email: 'allanmessiasdecoelho@gmail.com',
            idade: 25,
            peso: 87.3,
            altura: 1.78,
        });
        res.json(novoAluno);
    }
}

export default new HomeController();