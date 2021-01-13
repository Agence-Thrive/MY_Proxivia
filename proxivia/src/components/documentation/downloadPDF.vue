<template>
    <div class="border-0 shadow mb-3 documents-card">
        <div class="col-8">
            <b-icon icon="file-text" class="mr-3"></b-icon>
            {{ title }}
        </div>
        <small class="col-4">
            <a
                :href="getDownloadUrl"
                :download="downloadName"
                class="float-right"
            >
                Télécharger le document
            </a>
        </small>
    </div>
</template>

<script>
export default {
    computed: {
        getDownloadUrl() {
            return `${this.publicPath}documentation/pdf/${this.downloadName}`;
        },
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
    props: {
        title: String,
        downloadName: String,
    },
};
</script>
