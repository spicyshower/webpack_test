<template>
    <p>{{ message }}</p>
</template>

<script>
export default {
    data: () => {
        console.log('vue test');
        return {
            message: 'vue test file',
        };
    },
};
</script>