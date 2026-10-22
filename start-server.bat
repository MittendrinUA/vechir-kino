@echo off
title ВечірКіно — Movie Picker
chcp 65001 > nul
cd /d "%~dp0"
echo ========================================================
echo   🎬 Запуск ВечірКіно (Movie Randomizer)
echo   Сайт відкривається у вашому браузері: http://localhost:3000
echo ========================================================
start "" "http://localhost:3000"
node server.js
pause
