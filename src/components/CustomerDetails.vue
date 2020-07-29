<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
      {{customer.name}}
      <span class="pull-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/'+customer.id">
          编辑
        </router-link>
        <button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">
          删除
        </button>

      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-earphone">&nbsp;{{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope">&nbsp;{{customer.email}}</span>
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-education">&nbsp;{{customer.education}}</span>
      </li>
      <li class="list-group-item">
        <span class=" glyphicon glyphicon-home ">&nbsp;{{customer.graduationschool}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-wrench">&nbsp;{{customer.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-pencil">&nbsp;{{customer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'cumstomerdetails',
    data() {
      return {
        customer: ""
      }
    },
    methods: {
      //根据id获取用户信息
      fetchCustomers(id) {
        this.$http.get("http://localhost:3004/users/" + id)
          .then((response) => {
            //console.log(response);
            this.customer = response.data;
          })
      },
      //根据id删除用户信息
      deleteCustomer(id) {
        this.$http.delete("http://localhost:3004/users/" + id)
          .then((response) => {
            this.$router.push({
              path: "/",
              query: {
                alert: "用户信息删除成功！"
              }
            });
          })
      }
    },
    created() {
      this.fetchCustomers(this.$route.params.id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
