<template>
  <div class="chat-window">
    <h2>{{ user.username }}</h2>
    <MessageList 
      :messages="messages" 
      :currentUser="user.username" 
    />
    <div class="input-area">
      <input 
        v-model="newMessage" 
        type="text" 
        placeholder="Введите сообщение" 
        class="message-input" 
      />
      <SendButton 
        :onSendMessage="sendMessage" 
        :message="newMessage" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import MessageList from './MessageList.vue';
import SendButton from './ButtonSend.vue';

// Определяем свойства компонента
const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  messages: {
    type: Array,
    required: true
  },
  onSendMessage: {
    type: Function,
    required: true
  },
});

// Реактивная переменная для нового сообщения
const newMessage = ref('');

// Функция для отправки сообщения
const sendMessage = () => {
  const trimmedMessage = newMessage.value.trim();
  if (trimmedMessage) {
    props.onSendMessage(trimmedMessage); // Отправляем сообщение
    newMessage.value = ''; // Очищаем поле ввода
  }
};
</script>

<style scoped>
h2 {
  margin: 0 0 0 2rem;
  min-height: 2em;
}
.chat-window {
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  height: 100%; /* Занимаем всю высоту родителя */
  display: flex; /* Используем Flexbox для вертикального расположения */
  flex-direction: column; /* Элементы располагаются вертикально */
}

.input-area {
  display: flex; /* Используем Flexbox для горизонтального расположения */
  align-items: center; /* Выравнивание по вертикали */
  margin: 0 3em; /* Отступы */
  min-height: 6em;
}

.message-input {
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px; /* Добавьте отступы для улучшения восприятия */
  flex: 1; /* Заставляем поле ввода занимать доступное пространство */
  margin-right: 1em; /* Отступ справа для разделения с кнопкой */
}
</style>