import randomSeed from 'random-seed'

const nomes = [
    'Ana' , 'Anna' , 'Ana Carolina' , 'Ana Clara' , 'Alberto' , 'Adalberto' , 'Agnésio' , 'Afonso' , 'André' , 'Antonio' , 'Álvaro' , 'Adriano' , 'Agostinho' , 'Alice', 'Arthur' , 'Allan' , 'Anna Carolina' , 'Anna Clara' , 'Ana Carvalho' , 'Ana Caralho' , 'Anna Carvalho' , 'Ana Maria' , 'Anna Maria' , 'Asuka' , 'Anndrey' , 'Alexandre' ,
    'Bárbara' , 'Bianca' , 'Breno' , 'Bruno' , 'Batista' , 'Beatriz' , 'Benedito' , 'Bill Cipher' , 'Banana' , 'Brunno' , 'Brenno' , 'Berenício' ,
    'Carlos' , 'Carol' , 'Couto' , 'Catharinno' ,  'Catarina' , 'Catharina', 'Christian' , 'Camila' , 'Cícero' , 'Cezar' , 'Cesar' , 'Clementina' , 'Cauã' , 'Cauan' , 'Caroline' , 'Carolinne' , 'Carolyne' , 'Carolynne' , 'Carolina' , 'Carolinna' , 'Chico' , 'Carlos Ycaro' , 'Carlos Ycaro Gabryel', 
    'Diogo' , 'Diego' , 'Dara' , 'Davi' , 'David' , 'Domingos' , 'Dante' , 'Dalva' , 'Daniel' , 'Daniela' , 'Daniella' ,
    'Eduardo' , 'Eduarda' , 'Estupendo' , 'Emilio' , 'Emillio' , 'Emilly' , 'Emily' , 'Emile' , 'Elza' , 'Eugênio' , 'Evaristo' , 'Estéfano' , 'Estefanno' , 'Estefânia' , 'Estefânnia' , 'Enrique',
    'Febatista' , 'Felipe' , 'Fernando' , 'Francisco' , 'Francisca' , 'Franciana' , 'Franca' , 'Fabrício' , 'Frederico' , 'Feliciana' , 'Fernanda' ,
    'Gabriel' , 'Gabriela' , 'Gabriella' , 'Gabriely' , 'Gabrielly' , 'Gabriele' , 'Gabrielle' , 'Guilherme' , 'George' , 'Gertrudez' , 'Geraldo' , 'Godofredo' , 'Giulia' , 'Giullia' , 'Getúlio' , 'Gilberto', 'Gustavo' , 'Guizo' ,
    'João' , 'Joana' , 'Joaquim' , 'José' , 'Joseph' , 'Josefa' , 'Joanna' , 'Júlia' , 'Juliana' , 'Júllia' , 'Julya' , 'Jullya' , 'Júnior' , 'Jurandir' , 'Júlio' , 'Jullio' , 'Julyo' , 'Jullyo', 'James' , 'João Carlos' , 'João Lucas' , 'João Luíz' , 'João Luis' , 'João Luccas' , 'João Lukas' , 'João Pedro' , 'Jean' , 'Jean Dias' , 'Jaqueline' , 'Juliana Chahayed' ,
    'Kauã' , 'Kauan' , 'Katharina' , 'Katharinna', 'Katharinno' , 'Keller' , 'Kelly' , 'Karla' , 'Kyara' , 'Karlos' , 'Karoline' , 'Karolinne' , 'Karolyne' , 'Karolynne' , 'Karolina' , 'Karolinna' , 'Kaworu' , 'Kuroko' ,
    'Luiz', 'Luís', 'Luis', 'Luiz Guilherme', 'Lucas', 'Lucca', 'Luca', 'Luciana', 'Luciane', 'Lucia', 'Lucinda', 'Lorena', 'Lorraine', 'Lorayne', 'Lorena Vitória', 'Lourenço', 'Leandro', 'Leonardo', 'Leonel', 'Lídia', 'Lívia', 'Lilian', 'Lilliane', 'Liz', 'Lisandra', 'Letícia', 'Leticia', 'Lúcia Maria' , 'Lana' , 'Lembrar de apagar esse registro mais tarde' ,
    'Marcos', 'Marco Antônio', 'Marcelo', 'Marcella', 'Marcelly', 'Marcia', 'Márcia', 'Martinho', 'Marta', 'Maria', 'Maria Clara', 'Maria Eduarda', 'Maria Fernanda', 'Maria Júlia', 'Maria Luiza', 'Maria Cecília', 'Maria Vitória', 'Maria Alice', 'Mário', 'Maurício', 'Melissa', 'Melina', 'Miguel', 'Mirella', 'Milena', 'Morgana', 'Monique', 'Mônica', 'Marlene', 'Marina', 'Manuela', 'Manoel', 'Mason Pines' , 'Mable Pines' , 'Maria Joaquina' , 'Manoel Gomes' ,
    'Paulo', 'Paula', 'Paulina', 'Pauline', 'Pedro', 'Pedrinho', 'Pietro', 'Priscila', 'Priscilla', 'Patrícia', 'Patricia', 'Patrick', 'Poliana', 'Pollyana', 'Pâmela', 'Pamela', 'Pascoal', 'Paullo' , 'Pimenta' ,
    'Rafael', 'Rafaela', 'Raffaella', 'Rafaelly', 'Raquel', 'Raquelle', 'Renato', 'Renata', 'Rebeca', 'Rebecca', 'Regina', 'Regiane', 'Ricardo', 'Rita', 'Rogério', 'Rodrigo', 'Rodriga', 'Rodrigues', 'Ronaldo', 'Romero', 'Romilda', 'Ruan', 'Ruann', 'Rubens', 'Rute', 'Ruth', 'Rosana', 'Rosane', 'Rosângela', 'Rosilda', 'Rosa Maria', 'Rose', 'Roseli', 'Rosália', 'Rodrigo Ximenes' , 'Rei Ayanami' , 'Robson' ,
    'Savio', 'Saulo', 'Sebastião', 'Selma', 'Sergio', 'Sérgio', 'Silvana', 'Silvana', 'Silvia', 'Silviane', 'Simone', 'Simoni', 'Sofia', 'Sophia', 'Solange', 'Suelen', 'Suellen', 'Sandra', 'Sandro', 'Samuel', 'Samara', 'Sara', 'Sarah', 'Sabrina', 'Sávio', 'Sílvio' , 'Santos' , 'Stanford Pines' , 'Stanly Pines' , 'Shinji' ,
    'Tatiane', 'Tatiana', 'Tainá', 'Tainara', 'Tânia', 'Tania', 'Teodoro', 'Teodora', 'Teresa', 'Tereza', 'Thais', 'Thaís', 'Thaissa', 'Thiago', 'Tiago', 'Tomás', 'Tomaz', 'Túlio', 'Tulio', 'Teresinha' , 'Terezinha' , 'Teresina' , 'Terabis Sianodel' ,
    'Victor', 'Vitor', 'Viktor', 'Vittor', 'Vitória', 'Vittoria', 'Valentina', 'Valéria', 'Valmir', 'Valter', 'Vanderlei', 'Vanderson', 'Vinícius', 'Vinicius', 'Vivian', 'Viviane', 'Vilma', 'Vilmar', 'Vera', 'Verônica', 'Vagner', 'Valquíria', 'Valquiria', 'Victor Schiavon',
    'Wallace', 'Walace', 'Wagner', 'Wanderson', 'Wanderley', 'Washington', 'Wellington', 'Welington', 'Wesley', 'Weverton', 'Willian', 'William', 'Wilson', 'Wendel', 'Wendell', 'Wanda', 'Waleska', 'Walquíria', 'Walquiria', 'Wilma', 'Wilmar',
    'Yasmin', 'Yasmim', 'Yasmeen', 'Yara', 'Yasna', 'Yolanda', 'Yonara', 'Yohana', 'Yohanna', 'Yuri', 'Yago', 'Ygor', 'Yan', 'Yann', 'Yuri Gabriel', 'Yasmin Vitória' , 'Yung' , 'Ycaro'
];

const sobrenomes = [
    'Silva', 'Sousa', 'Ayanami' , 'Souza', 'Oliveira', 'Pereira', 'Costa', 'Rodrigues', 'Alves', 'Ferreira', 'Lima', 'Gomes', 'Ribeiro', 'Carvalho', 'Almeida', 'Santos', 'Barbosa', 'Araujo', 'Machado', 'Martins', 'Dias', 'Teixeira', 'Fernandes', 'Rocha', 'Castro', 'Morais', 'Moreira', 'Pinto', 'Mendes', 'Freitas', 'Moura', 'Campos', 'Vieira', 'Cardoso', 'Pires', 'Nogueira', 'Cunha', 'Reis', 'Garcia', 'Pinheiro', 'Baptista', 'Batista', 'Coelho', 'Fonseca', 'Esteves', 'Neves', 'Andrade', 'Tavares', 'Barros', 'Braga', 'Ramos', 'Peixoto', 'Farias', 'Figueiredo', 'Assis', 'Queiroz', 'Viana', 'Paiva', 'Bezerra', 'Siqueira', 'Sales', 'Prado', 'Camargo', 'Macedo', 'Miranda', 'Guimaraes', 'Borges', 'Dantas', 'Godoy', 'Ferrari', 'Couto', 'Saraiva', 'Chaves', 'Saldanha', 'Telles', 'Aguiar', 'Pedrosa', 'Freire', 'Galvão', 'Lacerda', 'Matos', 'Valente', 'Mattos', 'Aquino' , 'Leite' , 'Seiti' , 'Noguti' , 'Ramos Corrêa' , 'Gonçalves' , 'Pinto' , 'Carvalho' , 'Lemes' , 'William' , 'Uchiha' , 'Godoy' , 'Lobos' , 'Villa Lobos' , 'Guilhermino' , 'Goias', 'Cavalvante' , 'Lucchesi' ,
    'da Silva', 'dos Santos', 'de Barros', 'de Oliveira', 'de Almeida', 'de Sousa', 'de Souza', 'da Costa', 'do Carmo', 'de Castro', 'de Andrade', 'de Melo', 'de Freitas', 'de Morais', 'de Lima', 'de Campos', 'de Araujo', 'de Mendes', 'de Pires', 'de Miranda', 'de Mattos', 'de Macedo', 'de Figueiredo', 'de Aguiar', 'de Assis', 'de Paiva', 'de Sá', 'de Queiroz', 'de Viana', 'de Sales', 'de Brito', 'de Bastos', 'de Cardoso'
];

 
function generateData (seed , years , successRate , minMaxAge , origens , abordagens , resultados , procedimentos) {
    const allData = []

    const rand = randomSeed.create(seed)

    for(let i = 0 ; i < 300 ; i++){
        // Obrigatorio
        let ano = years[ rand(years.length) ]

        let success = rand(100) + 1 <= successRate ? true : false

        let nome = nomes[ rand(nomes.length) ]
        let familia = sobrenomes[ rand(sobrenomes.length) ]

        // Não Obrigatório
        let data = rand(3) === 0
            ? undefined
            : (() => {
                let idade = rand(5) === 0 ? undefined : rand.intBetween(minMaxAge[0] , minMaxAge[1])

                let cpf = rand(5) === 0 ? undefined :
                    String(rand.intBetween(100, 999)) + '.' + 
                    String(rand.intBetween(100, 999)) + '.' + 
                    String(rand.intBetween(100, 999)) + '-' + 
                    String(rand.intBetween(10, 99))

                let parente1 = rand(5) === 0 ? undefined : nomes[ rand(nomes.length) ] + ' ' + familia
                let parente2 = rand(5) === 0 ? undefined : nomes[ rand(nomes.length) ] + ' ' + familia

                let origem = rand(4) === 0 ? undefined : origens[ rand(origens.length)]
                let abordagem = rand(4) === 0 ? undefined : abordagens[ rand(abordagens.length) ]
                
                // Resultados deve conter 2 arrays, o array 0 com resultados positivos e o array 1 com resultados negativos
                let resultado = rand(4) === 0 ? undefined : 
                ( success ? resultados[0][ rand(resultados[0].length) ]
                        : resultados[1][ rand(resultados[1].length) ] )

                // Procedimentos deve conter 2 arrays, o array 0 com procedimentos previstos e o array 1 com procedimentos de emergência
                let procedimento = rand(4) === 0 ? undefined : (() => {
                    let lista = ! success 
                        ? procedimentos[1][ rand(procedimentos[1].length) ]
                        : (() => {
                            let l = [procedimentos[0][ rand(procedimentos[0].length) ]]
                            
                            if(rand(2) === 0) (
                                l.push(procedimentos[1][ rand (procedimentos[1].length) ] )
                            )
                            return l
                        })()
                                    
                })()

                let imagem = rand(10) === 0
                            ? rand.intBetween(3, 4)
                            : rand(3)

                let data = {
                    idade: idade,
                    cpf: cpf,
                    filiacao: {
                        parente1: parente1,
                        parente2: parente2,
                    },
                    origem: origem,
                    abordagem: abordagem,
                    resultados: resultado,
                    procedimentos: procedimento,
                    fotoBiometria: imagem,
                }

                return data
            })()

        const newSubject = {
            ano: ano,
            sucesso: success,
            nome: {
                nome: nome,
                familia: familia,
            },
            data: data,
        }

        allData.push(newSubject)

    }

    return allData
}

export default generateData