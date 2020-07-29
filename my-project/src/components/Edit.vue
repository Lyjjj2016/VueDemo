<template>
  <div class="edit container">
    <!--弹出框-->
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">编辑用户</h1>
    <!--点击更新用户信息-->
    <form v-on:submit="updateCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name" />
        </div>

        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone" />
        </div>

        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email" />
        </div>

        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education" />
        </div>

        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool" />
        </div>

        <div class="form-group">
          <label>专业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession" />
        </div>

        <div class="form-group">
          <label>个人简介</label>
          <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">确认</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Alert from './Alert.vue';
  export default {
    name: 'add',
    data() {
      return {
        customer: {}
      }
    },
    methods: {
      //根据id获取用户数据
      fetchCustomer(id) {
        this.$http.get("http://localhost:3004/users/" + id)
          .then((response) => {
            this.customer = response.data;
          })
      },

      //更新用户信息
      updateCustomer(e) {
        if (!this.customer.name || !this.customer.phone || !this.customer.email) {
          //console.log("请添加对应信息");
          this.alert = "请添加相应信息";
        } else {
          var updateCustomer = {
            name: this.customer.name,
            phone: this.customer.phone,
            email: this.customer.email,
            education: this.customer.education,
            graduationschool: this.customer.graduationschool,
            profession: this.customer.profession,
            profile: this.customer.profile
          }
          //将数据传到json文件中
          this.$http.put("http://localhost:3004/users/" + this.$route.params.id, updateCustomer)
            .then((response) => {
              //跳转到主页
              this.$router.push({
                path: "/",
                query: {
                  alert: "用户信息更新成功！"
                }
              });
            })
          //阻止默认事件
          e.preventDefault();
        }
        e.preventDefault();
      }
    },
    //实例创建之后调用created函数
    created() {
      this.fetchCustomer(this.$route.params.id);
    },
    components: {
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
