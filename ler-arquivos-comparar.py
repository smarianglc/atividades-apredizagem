from pathlib import Path

# ler arquivo1 e formatar os cpf dele, 
# ler arquivo2, comparar os cpfs dos arquivos
# feito a comparacao, escrever um novo arquivo novo (arquivo3) com o cpfs iguais

#-------------------------------------------------------
# no arquivo1: 345897345 -> 003.458.973-45
# no arquivo2: "003.458.973-45";"Ana Clara";"(67)9344-3421" 
#              "098.345.512-09";"Fernanda Maria";"(18)8122-0989"
# faz a compração dos arquivos o que for igual, escreve no arquivo3
#no arquivo3: "003.458.973-45";"Ana Clara";"(67)9344-3421"

file1 = Path(r'D:\estagio\desafios\atividade-extra\desafio-arquivo-cpf\arquivo1.csv')
file2 = Path(r'D:\estagio\desafios\atividade-extra\desafio-arquivo-cpf\arquivo2.csv')
file3 = Path(r'D:\estagio\desafios\atividade-extra\desafio-arquivo-cpf\arquivo3.csv')

lista = []
cont = 0

with open(file3, 'w') as ofn:
    with open(file1, 'r') as fcpf:
        for line1 in fcpf.readlines():
            if len(line1) < 11:
                line1 = line1.strip() #removendo qualquer espaço
                line1 = line1.zfill(11) #adicionando zero no numeros menor que 11
                cpfF1 = '{}.{}.{}-{}'.format(line1[:3], line1[3:6], line1[6:9], line1[9:]) #formatando
                cpfF1 = str(cpfF1) #transformando em string
                #print(cpfF1)
                lista.append(cpfF1.rstrip()) #passando para uma lista


    with open(file2, 'r', encoding="utf-8") as opF2:

        line2 = opF2.readlines()
        for l in line2:
            if l.split(';')[0].replace('"','')  in lista:
                ofn.write(l)
                cont += 1
        print(cont)    
