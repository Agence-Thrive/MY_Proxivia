<template>
    <div class="content">
        <b-row class="row-content">
            <b-col align="start" md="3"><span>Historique des mises à jour</span></b-col>
            <b-col md="6"></b-col>
            <b-col align="end" md="3">
                <button type="submit" class="btn_prospect">Voir toutes les mises à jours</button>
             </b-col>
        </b-row>
        <div>
            <b-table
                hover
                :head-variant="headVariant"
                :items="items"
                :fields="fields"
                :borderless="borderless"
            ></b-table>
            <b-pagination
                style="padding: 1%;"
                align="right"
                pills
            ></b-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            borderless: true,
            headVariant: 'light',
            fields: [
                {
                    key: "fonctionnalite",
                    sortable: true,
                    label: "FONCTIONNALITÉ",
                },
                {
                    key: "objet",
                    sortable: false,
                    label: "OBJET",
                },
                {
                    key: "status",
                    sortable: true,
                    label: "STATUS",
                },
                {
                    key: "disponibilite",
                    sortable: true,
                    label: "DISPONIBILITÉS",
                },
                {
                    key: "date",
                    sortable: true,
                    label: "DATE",
                },
                {
                    key: "detail",
                    sortable: true,
                    label: "DÉTAILS",
                },
            ],
            items: [
                {
                    isActive: true,
                    detail: 'Changement des CGV',
                    fonctionnalite: "Juridique",
                    objet: "Modification mandat de vente",
                    status: "A venir",
                    disponibilite: "Tous les membres",
                    date: "02/05/2020",
                },
                {
                    isActive: true,
                    detail: "Ajout d'un interview d'un ... ",
                    fonctionnalite: "Formation",
                    objet: 'Vidéo "Présentation du viager"',
                    status: "A venir",
                    disponibilite: "Premium uniquement",
                    date: "02/05/2020",
                },
                {
                    isActive: true,
                    detail: 'Connectez votre compte G...',
                    fonctionnalite: "Calendrier",
                    objet: "API Google Calendar",
                    status: "En ligne",
                    disponibilite: "Premium uniquement",
                    date: "02/05/2020",
                },
                {
                    isActive: true,
                    detail: 'Ajout automatique de vos ...',
                    fonctionnalite: "Messagerie",
                    objet: "Synchronisation de vo	s contacts",
                    status: "En cours",
                    disponibilite: "Tous les membres",
                    date: "02/05/2020",
                },
            ],
        };
    },

}
</script>

<style lang="css">
	/* tableau */
	thead.thead-light > tr > th {
		background-color: #f1f3f9 !important;
	}

	tr:nth-child(2n){
		background: var(--color-light);
	}

	/* BTN */
	.btn-historique {
		filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
		overflow: visible;
		width: 210px;
		height: 40px;
		background-color: #fff !important;
		border: 1.5px solid #d23367 !important;
		color: #d23367 !important;
		border-radius: 4px !important;
		cursor: pointer;
	}
</style>
