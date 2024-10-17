function showHome() {
    document.getElementById('content').innerHTML = `
        <h1>Добро пожаловать на WarbenGrief!</h1>
        <p>Это Minecraft сервер для грифов. Здесь вы можете найти информацию о сервере, обсудить стратегии и тактики с другими игроками.</p>
    `;
}

function showForum() {
    document.getElementById('content').innerHTML = `
        <h1>Форум</h1>
        <p>Здесь вы можете обсуждать стратегии грифинга, делиться опытом и задавать вопросы.</p>
    `;
}

function showRules() {
    document.getElementById('content').innerHTML = `
        <h1>Правила</h1>
        <p>Четкие правила грифинга на сервере. Пожалуйста, ознакомьтесь с ними перед игрой.</p>
    `;
}

function showContact() {
    document.getElementById('content').innerHTML = `
        <h1>Контакты</h1>
        <p>Свяжитесь с нами через Discord или по электронной почте.</p>
    `;
}
