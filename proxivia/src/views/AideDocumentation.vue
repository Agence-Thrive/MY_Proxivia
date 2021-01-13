<template>
    <div style="margin-right:25px">
        <div class="homepage-section">
            <div class="content">
                <div style="margin: 0 35px; padding: 20px 0">
                    <div class="section-title top">
                        <h4>Documents juridiques, fiscaux et commerciaux</h4>

                        <!-- download-name ne doit pas contenir de point, si oui a changer sur le fichier dans "public/documentation/pdf/nomduficher.pdf" (sinon erreur) -->
                        <downloadPDF
                            title="Démembrement de propriété - Qui vend quoi ? Dans quelles conditions?"
                            download-name="Démembrement_de_propriété_-_qui_vend_quoi___Dans_quelles_conditions___.pdf"
                        ></downloadPDF>

                        <downloadPDF
                            title="Droit de succession - Que devrez-vous payer sur votre part ?"
                            download-name="Droits_de_succession___que_devrez-vous_payer_sur_votre_part_____economie.pdf"
                        ></downloadPDF>

                        <downloadPDF
                            title="La revue fiscale notariale - Fiscalité de la rente viagère"
                            download-name="LA_REVUE_FISCALE_NOTARIALE-fiscalité_de_la_rente_viagère.pdf"
                        ></downloadPDF>
                    </div>

                    <div class="section-title">
                        <h4>Administratif</h4>

                        <div class="border-0 shadow mb-3 documents-card">
                            <div class="col-8">
                                <b-icon icon="file-text" class="mr-3"></b-icon>
                                Titre
                            </div>
                            <small class="col-4">
                                Téléchargement au format PDF
                            </small>
                        </div>
                    </div>

                    <div class="section-title">
                        <h4>Commercial</h4>

                        <div class="border-0 shadow mb-3 documents-card">
                            <div class="col-8">
                                <b-icon icon="file-text" class="mr-3"></b-icon>
                                Titre
                            </div>
                            <small class="col-4">
                                Téléchargement au format PDF
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import downloadPDF from "../components/documentation/downloadPDF";

export default {
    name: "aide-et-documentation",
    computed: {
        commercial() {
            var newArray = this.documents.filter((doc) => {
                return doc.categorie === "Commercial";
            });
            if (newArray.length === 0) {
                return "Aucune aide ou documentation n'est disponible dans cette catégorie pour le moment.";
            } else {
                return newArray;
            }
        },
        juridique() {
            var newArray = this.documents.filter((doc) => {
                return doc.categorie === "Juridique";
            });
            if (newArray.length === 0) {
                return "Aucune aide ou documentation n'est disponible dans cette catégorie pour le moment.";
            } else {
                return newArray;
            }
        },
        administratif() {
            var newArray = this.documents.filter((doc) => {
                return doc.categorie === "Administratif";
            });
            if (newArray.length === 0) {
                return "Aucune aide ou documentation n'est disponible dans cette catégorie pour le moment.";
            } else {
                return newArray;
            }
        },
    },
    components: {
        downloadPDF: downloadPDF,
    },
};
</script>

<style lang="scss" scoped>
.section-title {
    margin-bottom: 20px;
    margin-top: 30px;

    &.top {
        margin-top: 0;
    }

    h4 {
        font-weight: bold;
        color: var(--color-primary);
        margin-bottom: 20px;
    }
}

.documents-card {
    font-size: 1rem;
    border-radius: 50vh;
    padding: 20px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    small {
        color: var(--color-secondary);
    }
}
</style>
