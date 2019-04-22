<template>
	<LayoutTwo :latest="true">
		<h1>Posts</h1>
		<p>This is some posts about stuff</p>
	</LayoutTwo>
</template>

<script>
import LayoutTwo from "../layouts/LayoutTwo";
export default {
	components: {
		LayoutTwo
	}
};
</script>