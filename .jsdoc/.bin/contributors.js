#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = {
    port: 443,
    method: 'GET',
    hostname: 'api.github.com',
    path: '/repos/objectivehtml/FlipClock/contributors',
    headers: {
        'User-Agent': 'node'
    }
};

const req = https.request(options, (res) => {
    let body = '';

    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        let html = '<h1>Contributors</h1>';

        const contributors = JSON.parse(body);

        contributors.forEach(contributor => {
            html += [
            `\n`,
            `<a href="${contributor.html_url}" class="contributor">`,
            `   <img src="${contributor.avatar_url}" class="rounded-circle" />`,
            `   <div>`,
            `       <div class="name">${contributor.login}</div>`,
            `       <div class="number">(${contributor.contributions} contribution${contributor.contributions !== 1 ? 's' : ''})</div>`,
            `   </div>`,
            `</a>`
            ].join('\n');
        });       

        fs.writeFileSync(path.join(__dirname, '../../docs/contributors.html'), html);

        process.exit(0);
    });

});

req.on('error', (error) => {
    console.error(error)
});

req.end();