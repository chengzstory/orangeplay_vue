<template>
  <div class="userinfo-body background">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:8090/user/upload"
        :with-credentials="true"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :disabled="isEdit">
        <img :src="user.avatar" class="avatar" v-if="isEdit">
        <img :src="userForm.avatar" class="avatar img-opacity" v-if="!isEdit">
        <i class="el-icon-plus avatar-uploader-icon" v-if="!isEdit"></i>
      </el-upload>


    <div v-show="!isEdit">
      <ul>
        <li>
          <label>昵称</label>
          <Input style="width: 200px" size="small" v-model="userForm.nickname"/>
        </li>

        <li>
          <label>性别:</label>
          <RadioGroup v-model="userForm.gender">
            <Radio label="保密"></Radio>
            <Radio label="男"></Radio>
            <Radio label="女"></Radio>
          </RadioGroup>
        </li>

        <li>
          <label>出生年月</label>
          <DatePicker type="date" placeholder="Select date" style="width: 172px" size="small" v-model="userForm.birth"></DatePicker>
        </li>

        <li>
          <label>手机</label>
          <Input style="width: 200px" size="small" v-model="userForm.phone"/>
        </li>

        <li>
          <label>邮箱</label>
          <Input style="width: 200px" size="small" v-model="userForm.email"/>
        </li>

        <li>
          <el-button type="primary" size="small" @click="isEdit = true">返回</el-button>
          <el-button type="primary" size="small" @click="submit" style="float: right">保存</el-button>
        </li>
      </ul>
    </div>

    <div v-show="isEdit">
      <ul>
        <li>
          <label>昵称:</label>
          <Tag color="green">{{user.nickname}}</Tag>
        </li>

        <li>
          <label>性别:</label>
          <Tag color="yellow">{{user.gender}}</Tag>
        </li>

        <li>
          <label>年龄:</label>
          <Tag color="green">21</Tag>
          <Tag color="green">鼠</Tag>
          <Tag color="green">摩羯座</Tag>
        </li>

        <li>
          <label>手机:</label>
          <Tag color="green">{{user.phone}}</Tag>
        </li>

        <li>
          <label>邮箱:</label>
          <Tag color="green">{{user.email}}</Tag>
        </li>

        <li>
          <el-button type="primary" size="small" @click="isEdit=false">编辑</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isEdit: true,
        user: {},
        userForm: {},
        filename: '',
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.userForm.avatar = URL.createObjectURL(file.raw);
        this.filename = res.data;
      },
      beforeAvatarUpload(file) {
        const isImg = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isImg) {
          this.$message.error('上传头像图片只能是 JPG/PNG/BMP 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isImg && isLt2M;
      },
      submit() {
        this.userForm.avatar = this.filename;
        this.$req.post('/user/modify', this.userForm).then(() => {
          this.$message.success('修改用户成功');
          this.isEdit = true;
          this.getUser();
        });

      },
      getUser() {
        this.$req.get('user').then(res => {
          this.user = res.data.data;

          if (this.user.avatar === '' || this.user.avatar === null) {
            this.user.avatar = 'static/default.jpg';
          } else {
            this.user.avatar = 'http://localhost:8090/' + this.user.avatar;
          }
          this.userForm = JSON.parse(JSON.stringify(this.user));
        })
      }

    },
    mounted() {
      this.getUser();
    }
  }
</script>

<style lang="scss" scoped>
  .background {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .userinfo-body {
    background-color: #163855;
    margin: 50px auto;
    border-radius: 20px;
    width: 600px;
    padding: 20px;
    min-height: 500px;
    label {
      color: whitesmoke;
      margin-right: 10px;
      font-size: 14px;
    }
    .avatar-uploader {
      width: 70px;
      margin: 20px auto;
      border-radius: 70px;
      border: 1px solid gray;
      height: 70px;
      position: relative;
      overflow: hidden;
      .avatar {
        width: 70px;
        height: 70px;
      }
      .avatar-uploader-icon {
        font-size: 20px;
        color: whitesmoke;
        position: absolute;
        top: 25px;
        left: 25px;
        z-index: 2;
      }
      .avatar-uploader-icon:hover {
        color: #409EFF;
      }
      .img-opacity {
        opacity: 0.6;
      }
    }

    li {
      margin: 10px auto;
      width: 250px;
    }
    .nickname {
      margin: 10px auto;
      width: max-content;
    }
    .gender {
      margin: 10px auto;
      width: max-content;
    }
    .birth {
      margin: 10px auto;
      width: max-content;
    }
    .phone {
      margin: 10px auto;
      width: max-content;
    }
    .email {
      margin: 10px auto;
      width: max-content;
    }
    .btm-btn {
      margin-left: 130px;
    }
  }
</style>
