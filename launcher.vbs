Option Explicit
Dim oShell, fso, strDir
Set oShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
strDir = fso.GetParentFolderName(WScript.ScriptFullName)

' Start server in background with explicit directory
oShell.Run "cmd.exe /c cd /d """ & strDir & """ && node server.js", 0, False
WScript.Sleep 800

' Open default browser
oShell.Run "http://localhost:3000"