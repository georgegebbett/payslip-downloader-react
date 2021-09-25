# React Payslip Downloader

This is an absolutely horrifying way to download all of your payslips from Moorepay.

Simply run `npm start` and browse to http://localhost:3000 where you can input the link to one of your PDF payslips - get this by inspecting the PDF that is displayed when you open one of them manually.

Paste the whole link, sessionId and all into the box and hit go.

The script will duly ~~launch a denial of service attack~~ iterate over every possible payslip and save the payslips it finds to your computer.

You will need to disable CORS in Chrome using [this extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/) (or similar)