<template>
	<div class="comingsoon">
		<g-link class="button home" to="/">&#8592; home</g-link>
		<div class="text">
			<h3>This page is under development.</h3>
			<h4>Come back soon!</h4>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.comingsoon {
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	text-align: center;

	.text {
		margin: 30vh auto;
	}
}

.button.home {
	width: 100px;
	margin: 20px 20px;
}
</style>
