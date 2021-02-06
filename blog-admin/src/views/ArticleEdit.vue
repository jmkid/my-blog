<template>
  <div id="articleEdit">
    <div class="edit-head">
      <el-input
          type="textarea"
          :rows="1"
          resize="none"
          :placeholder="place"
          v-model="title"
          show-word-limit
          maxlength="100"
          class="head-item1">
      </el-input>

      <el-button type="primary" class="head-item2" @click="centerDialogVisible = true">发表文章</el-button>
    </div>

    <div class="editDiv">
      <quill-editor
          class="leftDiv"
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
      </quill-editor>
      <div v-html="content" class="rightDiv">

      </div>
    </div>

    <el-dialog
        title="发布文章"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
      <!--  上传图片  -->
      <span>请选择本博文的图片：</span>
      <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <!--   分类信息   -->
      <div class="tagItem">
        <label class="tag-label" for="tagValue">文章标签：</label>
        <el-input
            v-model="tagValue"
            placeholder="请输入内容"
            id="tagValue"
            maxlength="10"
            style="width: 80%"
            show-word-limit></el-input>
      </div>
      <!--  取消和发表  -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button
            type="primary"
            @click="sendBlog()"
            style="background-color: #409EFF">发 表 文 章</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import {
  quillEditor
} from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import axios from 'axios'
import qs from 'qs';

export default {
  name: "articleEdit",
  components: {
    quillEditor
  },
  data() {
    return {
      tagValue: '',
      imageUrl: '',
      title: '',
      place: '',
      centerDialogVisible: false,
      content: ``,
      str: '',
      editorOption: {
        placeholder: "请在这里输入",
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'], //引用，代码块
            [{
              'header': 1
            }, {
              'header': 2
            }], // 标题，键值对的形式；1、2表示字体大小
            [{
              'list': 'ordered'
            }, {
              'list': 'bullet'
            }], //列表
            [{
              'script': 'sub'
            }, {
              'script': 'super'
            }], // 上下标
            [{
              'indent': '-1'
            }, {
              'indent': '+1'
            }], // 缩进
            [{
              'direction': 'rtl'
            }], // 文本方向
            [{
              'size': ['small', false, 'large', 'huge']
            }], // 字体大小
            [{
              'header': [1, 2, 3, 4, 5, 6, false]
            }], //几级标题
            [{
              'color': []
            }, {
              'background': []
            }], // 字体颜色，字体背景颜色
            [{
              'font': []
            }], //字体
            [{
              'align': []
            }], //对齐方式
            ['clean'], //清除字体样式
            ['image', 'video'] //上传图片、上传视频
          ]
        }
      }
    }
  },
  methods: {
    onEditorReady(editor) { // 准备编辑器
    },
    onEditorBlur() {
    }, // 失去焦点事件
    onEditorFocus() {
    }, // 获得焦点事件
    onEditorChange(e) {
      // console.log(e.html)
    }, // 内容改变事件
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      let reader = new FileReader(); //实例化文件读取对象
      reader.readAsDataURL(file.raw); //将文件读取为 DataURL,也就是base64编码
      reader.onload = function (ev) { //文件读取成功完成时触发
        let dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
      }
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    sendBlog() {
      // console.log(this.title === "")
      if (this.title !== "") {
        if (this.content !== "") {
          if (this.tagValue !== "") {
            let data = "title=" + this.title + "&content=" + this.content + "&tagValue=" + this.tagValue + "&imgUrl=" + this.imageUrl
            axios.post('/api/addArticle', data, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then(res => {
              console.log(res)
            }).catch(err => {
              console.log(err)
            })
            this.centerDialogVisible = false
          } else {
            this.$message({
              showClose: true,
              message: '请输入文章的标签',
              type: 'error'
            });
          }
        } else {
          this.$message({
            showClose: true,
            message: '请输入文章的内容',
            type: 'error'
          });
        }
      } else {
        this.$message({
          showClose: true,
          message: '请输入文章的标题',
          type: 'error'
        });
      }
    },
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    let date = new Date();
    this.place = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  }
}
</script>

<style scoped lang="scss">
#articleEdit {
  height: 100%;
}

.edit-head {
  display: flex;

  .head-item1 {
    flex: 40;
    margin-right: 20px;
  }

  .head-item2 {
    flex: 1;
    font-size: 14px;
    background-color: red;
    height: 30px;
    line-height: 5px;
  }
}

.editDiv {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
}

.leftDiv {
  flex: 1;
  height: 82vh;
  overflow: scroll;
}

.rightDiv {
  flex: 1;
  padding: 0 10px 10px 10px;
  border: 1px black solid;
  height: 80.5vh;
  overflow: scroll;
}

.tagItem {
  display: block;
  white-space: nowrap;

  .tag-label {

  }

  #tagValue {

  }

}


.avatar-uploader .el-upload {
  border: 2px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

</style>
