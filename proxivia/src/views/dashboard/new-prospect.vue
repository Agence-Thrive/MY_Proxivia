<template>
    <div class="content">
        <b-row class="row-content">
            <b-col align="start" md="3"><span>Nouveaux prospects apportés par Proxivia</span></b-col>
            <b-col md="6"></b-col>
            <b-col align="end" md="3">
                <button type="submit" class="btn_demands">Voir toutes les demandes</button>
            </b-col>
        </b-row>
        <div class="container-fluid section-card">
            <b-row align="center">
                <!-- card 1 -->
                <b-col class="col-card">
                    <div class="card-prospect">
                        <img src="../../assets/images/card1.png" />
                        <div class="card-info">
                            <div style="width: 60%">
                                <span>Publié il y à 20 minutes</span>
                            </div>
                            <div style="width: 40%">Disponible</div>
                        </div>
                        <div class="card-name">
                            <span class="title-name">Anne-Marie Dupond</span>
                            <span style="color: #818E94;">Paris 16ème</span>
                            <span style="color: #818E94;">score: 80%</span>
                        </div>
                        <div>
                            <a style="text-decoration: underline; " href="#"
                                >Voir la demande</a
                            >
                        </div>
                    </div>
                </b-col>
                <!-- card 2 -->
                <b-col class="col-card">
                    <div class="card-prospect">
                        <img src="../../assets/images/card2.png" />
                        <div class="card-info">
                            <div style="width: 60%">
                                <span>Publié il y à 20 minutes</span>
                            </div>
                            <div style="width: 40%">Disponible</div>
                        </div>
                        <div class="card-name">
                            <span class="title-name">Gérard Miguel</span>
                            <span style="color: #818E94;">Fontainebleu</span>
                            <span style="color: #818E94;">score: 70%</span>
                        </div>
                        <div>
                            <a style="text-decoration: underline; " href="#"
                                >Voir la demande</a
                            >
                        </div>
                    </div>
                </b-col>
                <!-- card 3 -->
                <b-col class="col-card">
                    <div class="card-prospect">
                        <img src="../../assets/images/card3.png" />
                        <div class="card-info">
                            <div style="width: 60%">
                                <span>Publié il y à 20 minutes</span>
                            </div>
                            <div style="width: 40%">Disponible</div>
                        </div>
                        <div class="card-name">
                            <span class="title-name">Sophie Lac</span>
                            <span style="color: #818E94;">Giverny</span>
                            <span style="color: #818E94;">score: 85%</span>
                        </div>
                        <div>
                            <a style="text-decoration: underline; " href="#"
                                >Voir la demande</a
                            >
                        </div>
                    </div>
                </b-col>
                <!-- card 4 -->
                <b-col class="col-card">
                    <div class="card-prospect">
                        <img src="../../assets/images/card4.png" />
                        <div class="card-info">
                            <div style="width: 60%">
                                <span>Publié il y à 20 minutes</span>
                            </div>
                            <div style="width: 40%">Disponible</div>
                        </div>
                        <div class="card-name">
                            <span class="title-name">Henry Bernard</span>
                            <span style="color: #818E94;">Auvers-sur-Oise</span>
                            <span style="color: #818E94;">score: 94%</span>
                        </div>
                        <div>
                            <a style="text-decoration: underline; " href="#"
                                >Voir la demande</a
                            >
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="css">
	/* card */
	.container-fluid.section-card {
		padding-bottom: 30px;
	}
	span.title-name {
		font-size: 18px;
		color: black;
	}
	.card-name {
		display: grid;
		margin-top: 30px;
		margin-bottom: 40px;
	}
	.card-info {
		display: inline-flex;
		width: 100%;
		max-width: 100%;
		padding: 2%;
		color: #D3D8DA;
		font-weight: 200;
	}
	.card-prospect {
		width: 310px;
		height: 370px;
		box-shadow: 0px 2px 4px rgba(23, 23, 23, 0.18);
	}
	/* BTN */
    .btn_demands {
        filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
        background-color: #fff;
        color: #d23367;
        border: 1.5px solid #d23367;
        padding: 7px 20px;
        border-radius: 4px;
        margin-right: 3%;
        -webkit-transition: 0.8s;
        font-size: 14px;
        cursor: pointer;
    }

    .btn_demands:hover{
        filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.21));
        color: #fff;
        border-radius: 6px;
        background: #d23367 radial-gradient(circle, transparent 1%, #d81e5cd5 1%) center/15000%;
    }

    .btn_demands:active {
        background-color: #d23367;
        background-size: 100%;
        transition: background 0s;
    }
	.btn-demands {
		filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
		overflow: visible;
		width: 200px;
		height: 40px;
		background-color: #fff !important;
		border: 1.5px solid #d23367 !important;
		color: #d23367 !important;
		border-radius: 4px !important;
		cursor: pointer;
	}
</style>
