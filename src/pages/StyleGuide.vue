<template>
	<!-- Do not use vue-specific functionality here without an html-only backup -->
	<div class="content">
		<div>
			<h1>Style Guide</h1>
		</div>

		<div class="typography">
			<p>Typography is the bedrock of web design</p>
			<div class="section_title">
				<h2>Typography</h2>
			</div>
			<h1>This is an h1 Heading</h1>
			<h2>This is an h2 Heading</h2>
			<h3>This is an h3 Heading</h3>
			<h4>This is an h4 Heading</h4>
			<h5>This is an h5 Heading</h5>
			<h6>This is an h6 Heading</h6>

			<p class="text-button">button text</p>
			<p class="text-caption">This is the caption text 00</p>
		</div>
	</div>
</template>

<style lang="scss">
body {
	display: grid;
	grid-template-columns: 1fr 1200px 1fr;
}

.content {
	grid-column: 2;
}

.section_title {
	background-color: #a5adba;
}
</style>
