class Nota {
    constructor (disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal () {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2,
            0.4 * this.a1 + 0.6 * this.a3,
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA () {
        const media = this.mediaFinal()
        switch (true) {
            case media >= 9:
                return 'SS';
            case media >= 7:
                return 'MS';
            case media >= 5:
                return 'MM';
            case media >= 3:
                return 'MI';
            case media >= 1:
                return 'II';
            case media >= 0:
                return 'SR';
        }
    }

module.exports = Nota;