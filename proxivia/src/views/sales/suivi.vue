<template>
    <div class="content">
        <b-row class="row-content">
            <b-col class="p-0">
                <h5>Suivi de mes ventes</h5>
            </b-col>
        </b-row>

        <!-- User Interface controls -->

        <!-- Main table element -->

        <b-table
            v-if="actualProspects"
            show-empty
            responsive
            class="tableText"
            striped
            :items="actualProspects"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filterIncludedFields="filterOn"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            @filtered="onFiltered"
        >
            <template v-slot:cell(name)="row">
                <span class="font-weight-bold"
                    >{{ row.value.first }} {{ row.value.last }}</span
                >
            </template>

            <template v-slot:row-details="row">
                <b-card>
                    <ul>
                        <li v-for="(value, key) in row.item" :key="key">
                            {{ key }}: {{ value }}
                        </li>
                    </ul>
                </b-card>
            </template>

            <template v-slot:cell(progress)="row">
                <div style="display: flex">
                    {{ row.value }}%
                    <b-progress
                        v-if="parseInt(row.value) > 75"
                        class="table-progress-bar mt-auto mb-auto ml-auto mr-4"
                        :value="row.value"
                        :max="100"
                        variant="success"
                        animated
                    ></b-progress>

                    <b-progress
                        v-else-if="parseInt(row.value) > 50"
                        class="table-progress-bar mt-auto mb-auto ml-auto mr-4"
                        :value="row.value"
                        :max="100"
                        animated
                        variant="info"
                    ></b-progress>

                    <b-progress
                        v-else-if="parseInt(row.value) > 25"
                        class="table-progress-bar mt-auto mb-auto ml-auto mr-4"
                        :value="row.value"
                        :max="100"
                        animated
                        variant="warning"
                    ></b-progress>

                    <b-progress
                        v-else
                        class="table-progress-bar mt-auto mb-auto ml-auto mr-4"
                        :value="row.value"
                        :max="100"
                        animated
                        variant="danger"
                    ></b-progress>
                </div>
            </template>

            <template v-if="actualProspects[0]" v-slot:cell(status)="row">
                {{ log(row.value) }}
                <span :class="status[0].color">&#x25cf;</span>
                {{ status[0].text }}
            </template>

            <template v-if="actualProspects[0]" v-slot:cell(houseValue)="row">
                {{ row.value }}€
            </template>
            <template v-if="actualProspects[0]" v-slot:cell(commission)="row">
                {{ row.value }}€
            </template>

            <template v-if="actualProspects[0]" v-slot:cell(createdAt)="row">
                {{ getDate(row.value) }}
            </template>

            <template v-if="actualProspects[0]" v-slot:cell(option)="row">
                <div
                    size="sm"
                    @click="infos(row.item, row.index, $event.target)"
                    class="mr-1 table-modal"
                >
                    <font-awesome-icon
                        style="color: #3C485B"
                        icon="ellipsis-v"
                    />
                </div>
            </template>
        </b-table>

        <b-row>
            <b-col sm="10" md="9" class="my-1"></b-col>

            <b-col sm="2" md="3" class="my-1">
                <b-pagination
                    v-model="currentPage"
                    style="padding: 1%;"
                    align="right"
                    pills
                    :total-rows="totalRows"
                    :per-page="perPage"
                    size="sm"
                ></b-pagination>
            </b-col>
        </b-row>
        <!-- Info modal -->

        <b-modal
            :id="infoModal.id"
            :title="infoModal.title"
            ok-only
            @hide="resetInfoModal"
        >
            <pre>{{ infoModal.content }}</pre>
        </b-modal>
    </div>
</template>

<style>
.table-modal {
    background: #fff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #2c28281c;
    opacity: 1;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.table-row {
    height: 7vh;
    text-align: left;
    vertical-align: middle !important;
}
.table-th {
    background: #f1f3f9 0% 0% no-repeat padding-box;
    opacity: 1;
    text-align: left;
    font-size: 11px;
    letter-spacing: 0px;
    color: #8898aa;
    opacity: 1;
    font-weight: normal;
}
.table th,
.table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: none !important;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: none !important;
}
.table-striped > tbody > tr:nth-child(2n + 1) > td,
.table-striped > tbody > tr:nth-child(2n + 1) > th {
    background: #f7fafc 0% 0% no-repeat padding-box;
    opacity: 1;
}
</style>

<style>
.tableText {
    text-align: left;
    font-size: 13px;
    letter-spacing: 0px;
    color: #172b4d;
    opacity: 1;
}
.template-title {
    text-align: left;
    font-size: 18px;
    letter-spacing: 0px;
    color: #172b4d;
    opacity: 1;
}
.table-progress-bar {
    width: 112px;
    height: 3px;
    color: green;
}
.table-dashboard {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #2c28281c;
    border-radius: 10px;
    opacity: 1;
    margin-left: 0;
}
.table-pagination {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #3c485b;
    opacity: 1;
}
.orange-point {
    color: #ffb901;
}
∏.blue-point {
    color: #11cdef;
}
.green-point {
    color: #2dce98;
}
</style>

<script>
export default {
    props: ["info"],
    data() {
        return {
            actualProspects: [],
            status: [
                { text: "oui", color: "orange-point" },
                { text: "non", color: "blue-point" },
                { text: "En attente notaire", color: "blue-point" },
                { text: "Validation", color: "green-point" },
            ],
            fields: [
                {
                    key: "lastname",
                    label: "Prospects",
                    sortable: true,
                    sortDirection: "desc",
                    tdClass: "table-row",
                    thClass: "table-th",
                },
                {
                    key: "createdAt",
                    label: "Arrivée",
                    sortable: true,
                    class: "text-center",
                    tdClass: "table-row",
                    thClass: "table-th",
                },
                {
                    key: "status",
                    label: "Status",
                    sortable: true,
                    tdClass: "table-row",
                    thClass: "table-th",
                },
                {
                    key: "houseValue",
                    label: "Valeur maison",
                    tdClass: "table-row",
                    thClass: "table-th",
                },
                {
                    key: "commission",
                    label: "Commission",
                    tdClass: "table-row",
                    thClass: "table-th",
                },
                {
                    key: "progress",
                    label: "Etat d'avancement",
                    tdClass: "table-row",
                    thClass: "table-th",
                },
                {
                    key: "option",
                    label: "",
                    tdClass: "table-row",
                    thClass: "table-th",
                },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 4,
            sortBy: "",
            sortDesc: false,
            sortDirection: "asc",
            filter: null,
            filterOn: [],
            infoModal: {
                id: "info-modal",
                title: "",
                content: "",
            },
        };
    },
    computed: {
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter((f) => f.sortable)
                .map((f) => {
                    return { text: f.label, value: f.key };
                });
        },
    },
    updated() {
        this.totalRows = this.actualProspects.length;
    },
    mounted() {
        // Call all the prospects
        this.actualProspects = this.info.prospects;
    },
    methods: {
        getDate(date) {
            var mm = date.slice(6, 7); // getMonth() is zero-based
            var dd = date.slice(8, 9);
            return [
                (dd > 9 ? "" : "0") + dd,
                (mm > 9 ? "" : "0") + mm,
                date.slice(0, 4),
            ].join("/");
        },
        infos(item, index, button) {
            this.infoModal.title = `Row index: ${index}`;
            this.infoModal.content = JSON.stringify(item, null, 2);
            this.$root.$emit("bv::show::modal", this.infoModal.id, button);
        },
        resetInfoModal() {
            this.infoModal.title = "";
            this.infoModal.content = "";
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    },
};
</script>

<style lang="css">
/* tableau */
thead.thead-light > tr > th {
    background-color: #f1f3f9 !important;
}

tr:nth-child(2n) {
    background: var(--color-light);
}

/* BTN */
.btn_prospect {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
    background-color: #fff;
    color: #d23367;
    border: 1.5px solid #d23367;
    padding: 7px 20px;
    border-radius: 4px;
    -webkit-transition: 0.8s;
    font-size: 14px;
    margin-right: 3%;
    cursor: pointer;
}

.btn_prospect:hover {
    filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.21));
    color: #fff;
    border-radius: 6px;
    background: #d23367 radial-gradient(circle, transparent 1%, #d81e5cd5 1%)
        center/15000%;
}

.btn_prospect:active {
    background-color: #d23367;
    background-size: 100%;
    transition: background 0s;
}
</style>
