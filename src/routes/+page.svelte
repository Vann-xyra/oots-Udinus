
<script lang="ts">
	import { enhance } from '$app/forms';
	import ProjectRow from '$lib/components/ProjectRow.svelte';
	import {
		achievements,
		contact,
		photos,
		profile,
		projects
	} from '$lib/data';

	let theme = $state<'dark' | 'light'>('dark');
	let menuOpen = $state(false);
	let sending = $state(false);
	let message = $state('');
	let messageType = $state<'success' | 'error' | ''>('');

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
	}
</script>

<svelte:head>
	<title>Evan Alfian — Portfolio</title>
	<meta
		name="description"
		content="Portfolio Evan Alfian Putra Pratama, siswa XI TJKT 1 SMK Negeri 8 Semarang."
	/>
	<meta name="theme-color" content="#0c0c0b" />
</svelte:head>

<div class="site-shell" data-theme={theme}>
	<header class="site-header">
		<div class="header-inner">
			<a class="brand" href="#home">evan<span>.</span>alfian</a>

			<nav class:open={menuOpen} class="main-nav">
				<a href="#projects" onclick={() => (menuOpen = false)}>Projects</a>
				<a href="#achievement" onclick={() => (menuOpen = false)}>Achievement</a>
				<a href="#about" onclick={() => (menuOpen = false)}>About</a>
				<a href="#contact" onclick={() => (menuOpen = false)}>Contact</a>
			</nav>

			<div class="header-actions">
				<button
					class="theme-button"
					onclick={toggleTheme}
					aria-label="Toggle theme"
				>
					{theme === 'dark' ? '☼' : '☾'}
				</button>

				<button
					class="menu-button"
					onclick={() => (menuOpen = !menuOpen)}
					aria-label="Toggle navigation"
					aria-expanded={menuOpen}
				>
					{menuOpen ? '✕' : '☰'}
				</button>
			</div>
		</div>
	</header>

	<main>
		<!-- HERO -->
		<section id="home" class="hero section-wrap">
			<p class="eyebrow"><span></span>{profile.role}</p>

			<h1>
				Creating<br />
				<span>Possibilities.</span>
			</h1>

			<div class="hero-bottom">
				<p>
					Connecting ideas through technology, networking, and creativity.
					Learn, experiment, and develop ideas into works.
				</p>

				<a href="#projects" class="primary-button">
					Explore my work <span>↗</span>
				</a>
			</div>

			<div class="hero-meta">
				<span>{profile.className} · {profile.school}</span>
				<span>{profile.location} · 2026</span>
			</div>
		</section>

		<!-- PROJECTS -->
		<section id="projects" class="content-section section-wrap">
			<div class="section-heading">
				<div>
					<p class="eyebrow">01 / SELECTED WORKS</p>
					<h2>Selected Projects<span>.</span></h2>
				</div>

				<p class="section-note">
					Beberapa karya dan proyek yang pernah saya kerjakan.
				</p>
			</div>

			<div class="project-list">
				{#each projects as project (project.number)}
					<ProjectRow {project} />
				{/each}
			</div>
		</section>

		<!-- ACHIEVEMENTS -->
		<section id="achievement" class="content-section section-wrap">
			<div class="section-heading">
				<div>
					<p class="eyebrow">02 / MILESTONES</p>
					<h2>Achievements & Recognition<span>.</span></h2>
				</div>

				<p class="section-note">
					Pencapaian, pengalaman, dan dokumentasi perjalanan saya.
				</p>
			</div>

			<div class="achievement-grid">
				{#each achievements as item (item.title)}
					<article class="achievement-card">
						<div class="achievement-image">
							<img
								src={item.image}
								alt={item.title}
								loading="lazy"
							/>
						</div>

						<div class="achievement-meta">
							<span>{item.category}</span>
							<span>{item.year}</span>
						</div>

						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</article>
				{/each}
			</div>
		</section>

		<!-- ABOUT -->
		<section id="about" class="content-section section-wrap">
			<div class="section-heading">
				<div>
					<p class="eyebrow">03 / WHO I AM</p>
					<h2>About Me<span>.</span></h2>
				</div>
			</div>

			<div class="about-grid">
				<div class="portrait-frame">
					<img
						src={photos.portrait}
						alt="Foto profil Evan Alfian"
						loading="lazy"
					/>
				</div>

				<div class="about-content">
					<p class="about-bio">{profile.bio}</p>

					<div class="facts">
						<div>
							<span>NAME</span>
							<strong>{profile.name}</strong>
						</div>
						<div>
							<span>SCHOOL</span>
							<strong>{profile.school}</strong>
						</div>
						<div>
							<span>CLASS</span>
							<strong>{profile.className}</strong>
						</div>
						<div>
							<span>LOCATION</span>
							<strong>{profile.location}</strong>
						</div>
					</div>

					<div class="skills-area">
						<p class="eyebrow">SKILLS & TOOLS</p>

						<div class="skill-list">
							{#each profile.skills as skill}
								<span>{skill}</span>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- CONTACT -->
		<section id="contact" class="content-section section-wrap">
			<div class="section-heading">
				<div>
					<p class="eyebrow">04 / GET IN TOUCH</p>
					<h2>Let's Connect<span>.</span></h2>
				</div>

				<p class="section-note">
					Punya pertanyaan atau ingin berdiskusi? Silakan kirim pesan.
				</p>
			</div>

			<div class="contact-grid">
				<div class="contact-info">
					<p>
						Terbuka untuk berdiskusi, bertukar ide, dan belajar hal baru.
					</p>

					<a href="mailto:{contact.email}">{contact.email}</a>
					<a href={contact.github} target="_blank" rel="noreferrer">
						GitHub ↗
					</a>
				</div>

				<form
					class="contact-form"
					method="POST"
					action="?/kirim"
					use:enhance={() => {
						sending = true;
						message = '';
						messageType = '';

						return async ({ result, update }) => {
							sending = false;
							await update({
								reset: result.type === 'success'
							});

							if (result.type === 'success') {
								message = 'Pesan berhasil dikirim. Terima kasih!';
								messageType = 'success';
							} else {
								message = 'Pesan gagal dikirim. Silakan coba lagi.';
								messageType = 'error';
							}
						};
					}}
				>
					<label>
						<span>Nama</span>
						<input
							name="nama"
							type="text"
							placeholder="Nama kamu"
							autocomplete="name"
							required
						/>
					</label>

					<label>
						<span>Email</span>
						<input
							name="email"
							type="email"
							placeholder="nama@email.com"
							autocomplete="email"
							required
						/>
					</label>

					<label>
						<span>Pesan</span>
						<textarea
							name="pesan"
							rows="5"
							placeholder="Tulis pesan..."
							required
						></textarea>
					</label>

					<button
						class="primary-button submit-button"
						type="submit"
						disabled={sending}
					>
						{sending ? 'Sending...' : 'Send message ↗'}
					</button>

					{#if message}
						<p class="form-message" class:success={messageType === 'success'} class:error={messageType === 'error'} aria-live="polite">
							{message}
						</p>
					{/if}
				</form>
			</div>
		</section>
	</main>

	<footer class="site-footer">
		<a class="brand" href="#home">evan<span>.</span>alfian</a>

		<p>Designed & developed by Evan Alfian · 2026</p>

		<a href="#home">Back to top ↑</a>
	</footer>
</div>
