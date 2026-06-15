@echo off
chcp 65001 >nul
title Trancistas Brasil - Dev Server
color 0A
cls

echo.
echo  ============================================
echo    TRANCISTAS BRASIL - PI 2025
echo    Iniciando servidor dev...
echo  ============================================
echo.

cd /d "%~dp0"

echo  [1/2] Verificando dependencias...
if not exist node_modules (
    echo  Instalando pacotes npm pela primeira vez...
    npm install
    if errorlevel 1 (
        echo.
        echo  ERRO: Falha ao instalar dependencias.
        echo  Verifique se o Node.js esta instalado.
        pause
        exit /b 1
    )
    echo.
)

echo  [2/2] Iniciando servidor de desenvolvimento...
echo.
echo  ---------------------------------------------
echo   Acesse:  http://localhost:5173
echo   Feche esta janela para parar o servidor.
echo  ---------------------------------------------
echo.

npm run dev

if errorlevel 1 (
    echo.
    echo  ERRO: O servidor encerrou com falha.
)

pause
