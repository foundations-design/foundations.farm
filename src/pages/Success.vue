<template>
	<div class="success">
		<g-link class="button home" to="/">&#8592; home</g-link>
		<h2>Thanks for your time</h2>
	</div>
</template>

<style lang="scss" scoped>
.success {
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;

	h2 {
		margin: 30vh auto;
	}
}

.button.home {
	width: 100px;
	margin: 20px 20px;
}
</style>
