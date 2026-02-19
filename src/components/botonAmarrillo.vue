<template>

    <button class="btn">
        {{ texto }}
    </button>

</template>


<script setup>
 

defineProps({
    texto: String
})

</script>


<style>
.btn {
  background: #d3ea04;
  color: rgb(23, 22, 22);
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.btn:hover {
  background: #45a049;
}
</style>