<template>
	<section id="hero" class="relative overflow-hidden min-h-[92vh] pt-28">
		<div
			class="absolute inset-0 bg-gradient-to-br from-bini-darkTeal via-bini-teal to-bini-lightTeal"
		></div>

		<div class="absolute inset-0 overflow-hidden">
			<div
				class="absolute -top-28 left-8 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-blob"
			></div>
			<div class="absolute top-16 right-12 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>
			<div
				class="absolute -bottom-24 right-16 h-96 w-96 rounded-full bg-white/15 blur-3xl animate-blob animation-delay-2000"
			></div>
		</div>

		<div class="relative z-10 px-6 md:px-12 py-20 md:py-28">
			<div class="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.9fr] items-center">
				<div class="space-y-10">
					<div
						class="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90"
					>
						<span class="block h-2.5 w-2.5 rounded-full bg-white animate-pulse"></span>
						Fan Fund Transparency
					</div>

					<div class="space-y-6">
						<h1
							class="text-5xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-white"
						>
							BLOOM Transparency Hub
						</h1>
						<p class="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
							Open-ledger reporting for fan funding, built to keep every donation,
							expense, and decision visible to the BLOOM community.
						</p>
					</div>

					<div class="flex flex-col sm:flex-row items-start gap-4">
						<a
							href="#sheets"
							class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-bini-teal to-bini-lightTeal px-8 py-3 text-base font-bold text-white shadow-lg shadow-bini-teal/30 transition hover:shadow-xl hover:scale-105"
						>
							Explore Records
						</a>
						<a
							href="#about"
							class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/20"
						>
							Learn the Story
						</a>
					</div>

					<div class="grid grid-cols-2 gap-4 max-w-2xl text-white/90">
						<div
							class="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
						>
							<p class="text-3xl font-black">100%</p>
							<p class="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
								Open Ledger
							</p>
						</div>
						<div
							class="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
						>
							<p class="text-3xl font-black">∞</p>
							<p class="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
								Endless Trust
							</p>
						</div>
					</div>
				</div>

				<div class="relative">
					<div
						class="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-2xl shadow-bini-black/10 backdrop-blur-xl"
					>
						<div class="flex items-center justify-between gap-4 mb-6">
							<div>
								<p class="text-sm uppercase tracking-[0.24em] text-white/70">
									Snapshot
								</p>
								<h2 class="mt-3 text-3xl font-black text-white">
									Clear fan funding, made simple
								</h2>
							</div>
							<div
								class="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-bini-teal text-white text-xl"
							>
								∞
							</div>
						</div>
						<p class="text-sm leading-relaxed text-white/80">
							Every donation, invoice, and balance update is visible in one place so
							fans can follow the full story.
						</p>
						<div class="mt-8 grid gap-4">
							<div class="rounded-3xl bg-white/5 p-4 border border-white/10">
								<p class="text-sm font-semibold text-white">
									Verified transparency
								</p>
								<p class="text-xs text-white/70">
									Track every contribution with clear records and trusted totals.
								</p>
							</div>
							<div class="rounded-3xl bg-white/5 p-4 border border-white/10">
								<p class="text-sm font-semibold text-white">Community-first</p>
								<p class="text-xs text-white/70">
									Designed to empower fans with open access to fund activity.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="absolute inset-x-0 bottom-0">
			<svg class="w-full h-auto" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path
					d="M0,40 C200,100 400,0 600,50 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
					fill="white"
					opacity="0.18"
				/>
				<path
					d="M0,60 C300,120 600,20 900,80 C1050,110 1200,60 1200,60 L1200,120 L0,120 Z"
					fill="white"
					opacity="0.1"
				/>
			</svg>
		</div>
	</section>
</template>

<script setup>
// Hero section component
</script>
