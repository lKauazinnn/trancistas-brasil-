@echo off
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0enviar-git.ps1" %*
pause