@echo off

wt -w 0 new-tab --title "Mancala Client" cmd /k "cd /d C:\Users\jorri\Documents\git-repos\mancala-app\client && npm run dev" ; new-tab --title "Mancala API" cmd /k "cd /d C:\Users\jorri\Documents\git-repos\mancala-app\api && mvn spring-boot:run"