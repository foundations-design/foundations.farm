<template>
	<!-- Do not use vue-specific functionality here without an html-only backup -->
	<div class="content">
		<div>
			<h1>Style Guide</h1>
		</div>
		<div class="color">
			<div class="section-title">
				<h2>Color</h2>
			</div>
			<div>
				<h3>Main</h3>
				<div class="color-box-container">
					<div class="color-box color-primary"></div>
					<div class="color-box color-accent-light"></div>
					<div class="color-box color-accent-dark"></div>
				</div>
			</div>
			<div>
				<h3>Text</h3>
				<div class="color-box-container">
					<div class="color-box color-text-heading"></div>
					<div class="color-box color-text-body"></div>
					<div class="color-box color-text-caption"></div>
				</div>
			</div>
		</div>

		<div class="typography">
			<div class="section-title">
				<h2>Typography</h2>
				<p class="text-caption">Typography is the bedrock of web design</p>
			</div>
			<h1>This is an h1 Heading</h1>
			<h2>This is an h2 Heading</h2>
			<h3>This is an h3 Heading</h3>
			<h4>This is an h4 Heading</h4>
			<h5>This is an h5 Heading</h5>
			<h6>This is an h6 Heading</h6>

			<p class="text-button">Button Text</p>
			<p class="text-caption">Caption Text</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
body {
	display: grid;
	grid-template-columns: 1fr 1200px 1fr;
}

.content {
	grid-column: 2;
}

.section-title {
	background-color: var(--color-accent-light);
}

.color-box-container {
	display: flex;

	.color-box {
		width: 200px;
		height: 100px;
		border: 1px gray solid;
		margin: 1em;
	}

	.color-primary {
		background-color: var(--color-primary);
	}

	.color-accent-light {
		background-color: var(--color-accent-light);
	}

	.color-accent-dark {
		background-color: var(--color-accent-dark);
	}

	.color-text-heading {
		background-color: var(--color-text-heading);
	}

	.color-text-body {
		background-color: var(--color-text-body);
	}

	.color-text-caption {
		background-color: var(--color-text-caption);
	}
}
</style>
