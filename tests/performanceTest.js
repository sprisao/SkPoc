import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';
import { URL } from 'url';
import fs from 'fs'; // 파일 시스템 모듈 불러오기

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://localhost:3001');

    // Set screen size
    await page.setViewport({width: 1080, height: 1024});

    // 사용자 상호작용 시뮬레이션
    await page.click('.generate-users-button');
    await page.waitForSelector('.show-table-button');
    await page.click('.show-table-button');
    await page.waitForSelector('.user-table');

    // Lighthouse 실행
    const lighthouseResult = await lighthouse(page.url(), {
        port: (new URL(browser.wsEndpoint())).port,
        output: 'html',
        logLevel: 'info'
    });

    // 결과를 HTML 파일로 저장
    const reportHtml = lighthouseResult.report;
    fs.writeFileSync('lighthouse_report.html', reportHtml);

    console.log('Lighthouse report saved as lighthouse_report.html');

    await browser.close();
})();
