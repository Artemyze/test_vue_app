<template>
    <button @click="send" class="send-button" :disabled="isDisabled">
        Отправить
    </button>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    onSendMessage: {
        type: Function,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

// Вычисляемое свойство для управления состоянием кнопки
const isDisabled = computed(() => {
    return !props.message || props.message.trim() === '';
});

const send = () => {
    if (!isDisabled.value) {
        props.onSendMessage(props.message); // Отправляем сообщение
    } else {
        console.error("Сообщение не может быть пустым.");
    }
};
</script>

<style scoped>
.send-button {
    background-color: #007bff;
    color: white;
    margin-left: auto; /* Отступ слева для кнопки */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, opacity 0.3s ease;
    padding: 0.5em 1em; /* Добавлено немного отступа для улучшения внешнего вида */
}

.send-button:hover {
    background-color: #0056b3;
}

.send-button:active {
    background-color: #004494;
}

.send-button:disabled {
    background-color: #c0c0c0; /* Цвет для заблокированной кнопки */
    cursor: not-allowed; /* Изменяем курсор для заблокированной кнопки */
    opacity: 0.7; /* Уменьшаем непрозрачность для заблокированной кнопки */
}
</style>