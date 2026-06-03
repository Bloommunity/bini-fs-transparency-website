<template>
	<header class="relative w-full overflow-hidden">
		<!-- Animated gradient background -->
		<div class="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-400">
			<!-- Animated blobs -->
			<div
				class="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob"
			></div>
			<div
				class="absolute -bottom-8 right-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-2000"
			></div>
			<div
				class="absolute top-1/2 right-0 w-72 h-72 bg-teal-300/10 rounded-full blur-3xl animate-blob animation-delay-4000"
			></div>
		</div>

		<!-- Content -->
		<div class="relative z-10 px-6 md:px-12 py-16 md:py-24">
			<div class="max-w-6xl mx-auto space-y-6">
				<div class="inline-block">
					<span
						class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white"
					>
						<span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>
						Transparency Hub
					</span>
				</div>

				<div class="space-y-4">
					<h1 class="text-5xl md:text-7xl font-bold text-white leading-tight">
						Financial
						<br />
						Transparency
						<br />
						<span
							class="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent"
							>for BLOOM</span
						>
					</h1>
					<p
						class="text-lg md:text-xl text-white/90 max-w-2xl font-light leading-relaxed"
					>
						Publicly track fan-support funds with complete transparency and
						accountability. Browse our collection of organized financial records.
					</p>
				</div>

				<div class="pt-4">
					<a
						href="#sheets"
						class="inline-flex items-center gap-2 bg-white text-teal-600 font-semibold px-6 py-3 rounded-lg hover:bg-white/95 transition-all duration-200 shadow-lg hover:shadow-xl"
					>
						Browse Sheets
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							></path>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<!-- Decorative wave -->
		<div
			class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"
		></div>
	</header>
</template>

<script setup>
// No script needed - pure CSS animation
</script>

<style scoped>
@keyframes blob {
	0%,
	100% {
		transform: translate(0, 0) scale(1);
	}
	33% {
		transform: translate(30px, -50px) scale(1.1);
	}
	66% {
		transform: translate(-20px, 20px) scale(0.9);
	}
}

.animate-blob {
	animation: blob 7s infinite;
}

.animation-delay-2000 {
	animation-delay: 2s;
}

.animation-delay-4000 {
	animation-delay: 4s;
}
</style>
