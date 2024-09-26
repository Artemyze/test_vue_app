<template>
    <div class="messages-container">
        <div class="messages">
            <div v-if="messages.length === 0" class="no-messages">Нет сообщений</div>
            <div
                v-for="(msg, index) in messages"
                :key="index"
                :class="['message', msg.sender === currentUser ? 'my-message' : 'other-message']"
            >
                <strong>{{ msg.sender }}:</strong> {{ msg.text }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    messages: {
        type: Array,
        required: true,
    },
    currentUser: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.messages-container {
    flex: 1;
    height: auto;
    min-height: 70vh;
    max-height: 800px; /* ограничивает высоту контейнера */
    overflow-y: auto; /* включает прокрутку по вертикали */
    margin: 0 2rem 0 2em; /* Отступы */
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    box-sizing: border-box; /* Учитывает отступы и границы в общей ширине */
}

.messages {
    display: flex;
    flex-direction: column;
}

.message {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 4px;
    max-width: 80%; /* Ограничение ширины сообщения */
    word-wrap: break-word; /* Позволяет переносить длинные слова */
    overflow-wrap: break-word; /* Совместимость с различными браузерами */
}

.my-message {
    background-color: #d1e7dd; /* Цвет для сообщений нашего пользователя */
    align-self: flex-start; /* Выравнивание влево */
}

.other-message {
    background-color: #e9ecef; /* Цвет для сообщений других пользователей */
    align-self: flex-end; /* Выравнивание вправо */
}

.no-messages {
    text-align: center;
    color: #aaa;
}


</style>