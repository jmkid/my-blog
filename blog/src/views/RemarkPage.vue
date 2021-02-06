<template>
  <div id="remarkPage">
    <div class="contain">
      <div class="main">
        <h2>小巷闲聊</h2>
        <div class="text-mes">
          <div class="mes-data" v-for="item in mesData" v-bind:key="item.index">
            <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="头像">
            <span style="font-size: 20px">{{ item.name }}</span><br>
            <span style="font-size: 8px">{{ item.date }}</span>
            <p>{{ item.message }}</p>
          </div>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="nickName">
            <el-input v-model="ruleForm.nickName" placeholder="昵称" clearable></el-input>
          </el-form-item>
          <el-form-item prop="mailBox">
            <el-input v-model="ruleForm.nickName" placeholder="邮箱" clearable></el-input>
          </el-form-item>
          <el-form-item prop="checkMan">
            <el-input v-model="ruleForm.nickName" placeholder="人机验证 3 + 2 = ?" clearable></el-input>
          </el-form-item>
          <el-form-item prop="webUrl">
            <el-input v-model="ruleForm.nickName" placeholder="网站链接" clearable></el-input>
          </el-form-item>
          <el-form-item prop="desc">
            <el-input type="textarea" placeholder="确定不来一发吗骚年" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">发射</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemarkPage",
  data() {
    return {
      mesData: [{
        name: 'test1',
        date: '2020-10-16 20:20',
        message: "tes1文字测试长度测试排版测试aaaaaaaaa"
      }, {
        name: 'test1',
        date: '2020-10-16 20:20',
        message: "tes1文字测试长度测试排版测试aaaaaaaaa"
      },],
      ruleForm: {
        nickName: '',
        mailBox: '',
        checkMan: '',
        webUrl: '',
        desc: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        desc: [
          {required: true, message: '请填写活动形式', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped lang="scss">
.el-form-item {
  margin: 4vh 2vw 4vh -4vw
}

.el-input {
  float: left;
  margin-bottom: -20px;
}

.el-button {
  width: 100%;
}

.main {

}

.el-form {
  box-shadow: 0 0 10px #c8c7c7;
  width: 100%;
  margin: 0;
  padding: 0;
  float: left;
}

img {
  width: 48px;
  margin-right: 10px;
  border-radius: 100px;
  float: left;
}

.mes-data {
  box-shadow: 0 0 10px #c8c7c7;
  padding: 20px;
  margin-bottom: 20px;
}
</style>