let topics = [];

function createTopic() {
    const title = document.getElementById('topic-title').value;
    const content = document.getElementById('topic-content').value;

    if (title && content) {
        const topic = { title, content };
        topics.push(topic);
        document.getElementById('topic-title').value = '';
        document.getElementById('topic-content').value = '';
        displayTopics();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

function displayTopics() {
    const forumTopicsDiv = document.getElementById('forum-topics');
    forumTopicsDiv.innerHTML = '';

    topics.forEach((topic, index) => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'forum-topic';
        topicDiv.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.content}</p>
            <button onclick="deleteTopic(${index})">Удалить</button>
        `;
        forumTopicsDiv.appendChild(topicDiv);
    });
}

function deleteTopic(index) {
    topics.splice(index, 1);
    displayTopics();
}
