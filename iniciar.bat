@echo off
title Trancistas Brasil — Dev Server
color 0A
cls

echo.
echo  ╔══════════════════════════════════════════╗
echo  ║       TRANCISTAS BRASIL — PI 2025        ║
echo  ║          Iniciando servidor dev...       ║
echo  ╚══════════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo  [1/2] Verificando dependencias...
if not exist node_modules (
    echo  Instalando pacotes npm pela primeira vez...
    npm install
    echo.
)

echo  [2/2] Iniciando servidor de desenvolvimento...
echo.
echo  ─────────────────────────────────────────────
echo   Acesse:  http://localhost:5173
echo   Feche esta janela para parar o servidor.
echo  ─────────────────────────────────────────────
echo.

npm run dev

pause
