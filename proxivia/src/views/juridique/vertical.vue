<template>
	<button style="margin-left: 10px; margin-right: 7px;" class="btn_primary"><i class="fas fa-home"></i> Choisir un type de viager</button>
</template>

<style scoped>
.btn_primary {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
    background-color: #fff;
    color: #d23367;
    border: 1.5px solid #d23367;
    padding: 7px 20px;
    border-radius: 6px;
    transition: 0.8s;
    font-size: 16px;
    cursor: pointer;
}

.btn_primary:hover{
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.21));
    color: #fff;
    border-radius: 6px;
    background: #d23367 radial-gradient(circle, transparent 1%, #d81e5cd5 1%) center/15000%;
}
</style>
