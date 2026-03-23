<template>
    <table class="data-table">
        <thead>
        <tr>
            <th
                v-for="header in table.headers"
                :key="header"
                class="data-table__th"
            >
                {{ header }}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="(row, rowIndex) in table.rows"
            :key="rowIndex"
            class="data-table__row"
        >
            <td
                v-for="(cell, cellIndex) in row"
                :key="cellIndex"
                class="data-table__td"
            >
                {{ cell }}
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script
    setup
    lang="ts"
>
import type { ITableConfig } from "@/definitions/slide/Slide";

defineProps<{
    table: ITableConfig
}>();
</script>

<style
    scoped
    lang="scss"
>
.data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;

    &__th {
        text-align: left;
        font-weight: 600;
        padding: 8px 12px;
        background: #f0f0f0;
        border-bottom: 2px solid #ddd;
    }

    &__row {
        &:nth-child(even) {
            background: #fafafa;
        }
    }

    &__td {
        padding: 8px 12px;
        border-bottom: 1px solid #eee;
        color: #333;
    }
}
</style>
