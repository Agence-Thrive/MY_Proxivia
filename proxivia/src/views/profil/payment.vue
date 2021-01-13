<template>
	<div class="content">
        <b-row class="row-content">
            <b-col align="start" md="2"></b-col>
            <b-col md="2"></b-col>
            <b-col align="end" md="8" style="left: 26px;">
				<md-button type="submit" class="btn-search"><md-icon style="color: #d23367;">search</md-icon></md-button>
				<md-button type="submit" class="btn-upload"><i style="margin: 0 5px;" class="material-icons-outlined">swap_vertical_circle</i>
					Export/Import</md-button>
				<md-button type="submit" class="btn-historique">Ajouter un paiement</md-button>
			</b-col>
        </b-row>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* section */
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

.col {
    align-self: center;
}

.row-content{
    padding: 2vh;
    align-items: center;
}
/* BTN */
	.btn-search {
		filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
		overflow: visible;
		width: 55px;
		min-width: 55px;
		height: 40px;
		background-color: #fff !important;
		border: 1.5px solid #d23367 !important;
		color: #d23367 !important;
		border-radius: 4px !important;
		cursor: pointer;
	}
	.btn-upload {
		filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
		overflow: visible;
		width: 190px;
		height: 40px;
		background-color: #fff !important;
		border: 1.5px solid #d23367 !important;
		color: #d23367 !important;
		border-radius: 4px !important;
		cursor: pointer;
	}
	.btn-historique {
		filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
		overflow: visible;
		width: 200px;
		height: 40px;
		background-color: #d23367 !important;
		border: 1.5px solid #d23367 !important;
		color: #fff !important;
		border-radius: 4px !important;
		cursor: pointer;
	}
</style>
