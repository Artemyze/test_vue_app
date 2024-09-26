<template>
  <div id="app">
    <div class="header"></div>
    <ChatWindow
      :user="user1"
      :messages="getUserMessages(user1)"
      :onSendMessage="(message) => handleSendMessage(message, user1, user2)"
    />
    <ChatWindow
      :user="user2"
      :messages="getUserMessages(user2)"
      :onSendMessage="(message) => handleSendMessage(message, user2, user1)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChatWindow from './components/WindowChat.vue';
import { User } from './Entities/User.js';
import { Message } from './Entities/Message.js';

// Создаем пользователей
const user1 = new User(1, 'Василий', 'user1@example.com', 'Группа A');
const user2 = new User(2, 'Диана', 'user2@example.com', 'Группа B');

// Создаем массив сообщений
const messages = ref([]);

// Функция для обработки отправки сообщения
const handleSendMessage = (message, sender, recipient) => {
    if (!message || !recipient) {
        console.error("Сообщение или получатель не указаны.");
        return;
    }

    sender.sendMessage(recipient, message); // Используем отправителя
    messages.value.push(new Message(sender.username, recipient.username, message));
};

// Функция для получения сообщений пользователя
const getUserMessages = (user) => {
    return messages.value.filter(msg => 
        msg.sender === user.username || msg.recipient === user.username
    );
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-between; /* Распределение пространства между окнами */
  height: 100%; /* Занимаем всю высоту */
  width: 100%; /* Занимаем всю ширину */
  flex-wrap: wrap; /* Адаптивность для меньших экранов */
  box-sizing: border-box;
  padding: 0 1em; /* Отступы слева и справа */
}

.header {
  min-width: 97vw;
  min-height: 3vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.chat-window {
  flex: 1; /* Окна занимают равное пространство */
  padding-top: 2em;
  margin: 0; /* Отступ между окнами */
  min-width: 300px; /* Минимальная ширина, чтобы избежать сжатия */
  max-width: 1200px; /* Ограничение максимальной ширины для лучшего отображения */
}

.chat-window:nth-of-type(3) {
  margin-left: 5rem;
}
</style>