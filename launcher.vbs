Option Explicit
Dim oShell, fso, strDir
Set oShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
strDir = fso.GetParentFolderName(WScript.ScriptFullName)
oShell.CurrentDirectory = strDir

' Start server in background
oShell.Run "cmd.exe /c node server.js", 0, False
WScript.Sleep 800

' Open browser
oShell.Run "http://localhost:3000"
