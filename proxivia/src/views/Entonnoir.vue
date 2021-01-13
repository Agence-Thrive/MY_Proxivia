<template>
    <div style="margin-right:25px">
        <div class="homepage-section">
			<div class="content">
				<div style="padding: 4vh; line-height: 30px;">
					<b-link href="/login">Page Connexion </b-link><br>
					<b-link href="/inscription">Page Inscription </b-link><br>
					<b-link href="/dashboard">Page Dashboard </b-link><br>
					<b-link href="/profil">Page Profil </b-link><br>
                    <b-link href="/mes-ventes">Page Suivi des ventes <b-badge>New</b-badge></b-link><br>
                    <b-link href="/juridique">Juridique <b-badge variant="info">Bientôt</b-badge></b-link><br>
                    <b-link href="/estimation-viager">Estimation viagère <b-badge variant="info">Bientôt</b-badge></b-link><br>
                    <b-link href="/commerce">Commerce <b-badge variant="info">Bientôt</b-badge></b-link>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.homepage-section {
    filter: drop-shadow(0px 2px 4px rgba(23, 23, 23, 0.18));
    background: #ffffff;
    border-radius: 10px;
    width: 100%;
    margin-right: 200px;
    margin-bottom: 15px;
}

.content {
    padding: 0;
}
</style>
