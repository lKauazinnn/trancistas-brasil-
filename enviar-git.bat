@echo off
REM Script para enviar alterações para o repositório GitHub trancistas-brasil-

REM Caminho do repositório local
set REPO_PATH=%~dp0
cd /d "%REPO_PATH%"


REM Inicializa o repositório git se não existir
if not exist .git (
	git init
)

REM Adiciona todos os arquivos alterados
git add .

REM Solicita mensagem de commit ao usuário
set /p COMMIT_MSG="Digite a mensagem do commit: "

REM Realiza o commit
 git commit -m "%COMMIT_MSG%"

REM Define o repositório remoto (ajuste se necessário)
 git remote add origin https://github.com/lKauazinnn/trancistas-brasil-.git 2>nul


REM Detecta o branch atual (master/main)
for /f "delims=*" %%b in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%b

REM Envia para o branch correto
git push -u origin %CURRENT_BRANCH%

pause