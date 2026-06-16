@echo off
set "SRC=C:\Users\PUSHPAKATH111\Downloads\Website Elements\Website cover photo\Web Bammer12.0.png"
set "DEST=C:\Users\PUSHPAKATH111\Downloads\adithya-graphics-main\adithya-graphics-main\public\images\services"
mkdir "%DEST%" 2>nul
copy /Y "%SRC%" "%DEST%\business-card.jpg" > "%DEST%\copy_log.txt" 2>&1
copy /Y "%SRC%" "%DEST%\logo-branding.jpg" >> "%DEST%\copy_log.txt" 2>&1
copy /Y "%SRC%" "%DEST%\menu.jpg" >> "%DEST%\copy_log.txt" 2>&1
copy /Y "%SRC%" "%DEST%\packaging.jpg" >> "%DEST%\copy_log.txt" 2>&1
copy /Y "%SRC%" "%DEST%\poster.jpg" >> "%DEST%\copy_log.txt" 2>&1
copy /Y "%SRC%" "%DEST%\event.jpg" >> "%DEST%\copy_log.txt" 2>&1
copy /Y "%SRC%" "%DEST%\video.jpg" >> "%DEST%\copy_log.txt" 2>&1
cmd /c dir "%DEST%" > "%DEST%\dir_log.txt"
