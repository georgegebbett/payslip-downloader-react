import saveAs from 'file-saver';


async function downloadPayslip (url) {

    console.log(url);

    const GET_EMPLOYEE_NO = /\/payslips\/(\d+)/;
    const GET_SESSION_ID = /sessionid=(\w+)/;
    const BASE_URL = 'https://www.login.moorepay.co.uk/precedadata/MR7Y000DTA/payslips/'
    let payslipIndex = 8190;


    if (url === undefined || url === '') {
        alert('Invalid URL');
        return;
    }

    const EMPLOYEE_ID = url.match(GET_EMPLOYEE_NO)[1];
    const SESSION_ID = url.match(GET_SESSION_ID)[1];

    console.log('Employee ID:', EMPLOYEE_ID);
    console.log('Session ID:', SESSION_ID);



    while (payslipIndex < 35000) {

        console.log('Trying index', payslipIndex);

        let dlPromise = await fetch(`${BASE_URL}${EMPLOYEE_ID}/${payslipIndex}?sessionid=${SESSION_ID}`);


        if (dlPromise.headers.get('Content-Type') === 'application/pdf') {
            console.log('Payslip found');
            let payslipBlob = await dlPromise.blob();
            saveAs(payslipBlob, 'payslip.pdf');
        }
        payslipIndex++;


    }
}


export default downloadPayslip;