@echo off
chcp 65001 >nul
title Enviar para GitHub — Trancistas Brasil

cd /d "%~dp0"

echo.
echo ========================================
echo   TRANCISTAS BRASIL — Enviar para Git
echo ========================================
echo.

REM Verifica se o git está disponível
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Git nao encontrado. Instale em https://git-scm.com
    pause & exit /b 1
)

REM Garante que o remote está correto
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    git remote add origin https://github.com/lKauazinnn/trancistas-brasil-.git
    echo [OK] Remote adicionado.
) else (
    git remote set-url origin https://github.com/lKauazinnn/trancistas-brasil-.git
)

REM Mostra o que mudou
echo Arquivos modificados:
git status -s
echo.

REM Pergunta a mensagem de commit
set /p COMMIT_MSG="Mensagem do commit (Enter = 'update'): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=update

REM Adiciona tudo (exceto o que está no .gitignore)
git add .

REM Faz o commit
git commit -m "%COMMIT_MSG%"
if %errorlevel% neq 0 (
    echo [INFO] Nada para commitar.
    goto :push
)

:push
REM Detecta o branch atual
for /f "tokens=*" %%b in ('git rev-parse --abbrev-ref HEAD') do set BRANCH=%%b

echo.
echo Enviando branch "%BRANCH%" para o GitHub...
git push -u origin %BRANCH%

if %errorlevel% equ 0 (
    echo.
    echo [OK] Enviado com sucesso!
    echo     https://github.com/lKauazinnn/trancistas-brasil-
) else (
    echo.
    echo [ERRO] Falha no push. Verifique:
    echo   1. Sua conexao com a internet
    echo   2. Se esta autenticado no GitHub ^(git credential manager^)
    echo   3. Se o repositorio existe em github.com/lKauazinnn/trancistas-brasil-
)

echo.
pause
