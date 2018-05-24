<template>
  <div class="order-body">
    <div class="order-title">
      chengzstroy的消费历史记录
    </div>
    <Table :columns="columns" :data="orders" :row-class-name="rowClassName"></Table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        columns: [
          {
            title: '日期',
            key: 'date',
            className: 'table-date-column'
          },
          {
            title: '物品',
            key: 'name',
            className: 'table-item-column'
          },
          {
            title: '购买方式',
            key: 'type',
            className: 'table-type-column'
          },
          {
            title: '价格',
            key: 'price',
            className: 'table-price-column'
          }
        ],
        orders: [],
      }
    },
    mounted() {
      this.$req.get("user/orders").then(res => {
        this.orders = res.data.data;
      })
    },
    methods: {
      rowClassName(row, index) {
        if (index % 2 === 1) {
          return 'even-row';
        }
        return 'odd-row'
      }
    }
  }
</script>

<style>
  .order-body {
    margin: 40px auto;
    width: 900px;
    min-height: 500px;
  }
  .order-title {
    font-size: 24px;
    color: whitesmoke;
    margin-bottom: 5px;
  }
  .ivu-table .even-row td {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .ivu-table .odd-row td {
    background-color: #183F59;
  }
  .ivu-table td.table-date-column {
    font-size: 14px;
    color: #7092A5;
  }
  .ivu-table td.table-item-column {
    font-size: 14px;
    color: #ffffff;
  }
  .ivu-table td.table-type-column {
    font-size: 14px;
    color: #ffffff;
  }
  .ivu-table td.table-price-column {
    font-size: 14px;
    color: #ffffff;
  }

</style>
