<template>
	<div class="content">
        <b-row class="row-content">
            <b-col align="start" md="2"></b-col>
            <b-col md="2"></b-col>
            <b-col align="end" md="8" style="left: 26px;">
				<b-dropdown id="dropdown-1" variant="outline-danger" text="Choisir une catégorie">
					<b-dropdown-item>First Action</b-dropdown-item>
					<b-dropdown-item>Second Action</b-dropdown-item>
					<b-dropdown-item>Third Action</b-dropdown-item>
				</b-dropdown>
				<md-button type="submit" class="btn-search2"><i style="margin: 0 5px;" class="material-icons-outlined">search</i>Recherche</md-button>
			</b-col>
        </b-row>
    </div>
</template>

<script>
export default {

}
</script>


<style lang="css">

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
	.dropdown-toggle {
		color: #d23367 !important;
		background-color: #ffffff !important;
		border-color: #d23367 !important;
	}
	.btn-outline-danger {
		filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
		color: #d23367 !important;
		border-color: #d23367 !important;
		border: 1.5px solid #d23367 !important;
		border-radius: 4px !important;
		height: 40px !important;
		margin: 6px 8px;
	}
	.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {
		color: #fff !important;
		background-color: #d23367 !important;
		border-color: #d23367 !important
	}
	.btn-search2 {
		filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
		overflow: visible;
		width: 150px;
		height: 40px !important;
		background-color: #fff !important;
		border: 1.5px solid #d23367 !important;
		color: #d23367 !important;
		border-radius: 4px !important;
		cursor: pointer;
	}

</style>
