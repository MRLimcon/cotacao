# cotacao
Cotação de moedas fictícias.

# Pré instalação
- Tenha instalado previamente o .NET SDK 5.0
- no terminal, instale a ferramenta do Microsoft Entity para realizar as migrações:

        dotnet tools --global dotnet-ef


# Instalação
- git clone do projeto
- execute as migrações:
    
        dotnet ef database update

# Execução
- Execute:

        dotnet run

- O projeto estará em execução [na sua máquina](localhost:5001)