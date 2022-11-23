if exist "C:\Program files\Mozilla Firefox\firefox.exe" (
	start /min "C:\Program files\Mozilla Firefox\firefox.exe" ..\game\index.html
	pause
) else (
	if exist "C:\Program files (x86)\Mozilla Firefox\firefox.exe" (
  		start /min "C:\Program files (x86)\Mozilla Firefox\firefox.exe" ..\game\index.html
		pause
	) else (
			if exist "C:\Program files\Chromium\chrome.exe" (
			start /min "C:\Program files\Chromium\chrome.exe" ..\game\index.html
			pause
		) else (
			echo FOR CHROMIUM TO WORK YOU MUST HAVE IT IN C:\Program files\Chromium
			echo For this program to work you must have Firefox or Chromium installed.
			echo Soon we will update the program to support Chrome and Edge.
			echo JOKE FOR DEVS copyright ghost scaring me again
			echo To use a custom browser please enter it here:
			set /p Input=Enter Full Browser Location:
			start %Input% \..\game\index.html
			pause
		)
	)
)