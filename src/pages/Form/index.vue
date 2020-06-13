<template>
  <div>
    <div class="form-box">
    <el-row :gutter="20">
      <el-col :span="7"><div class="grid-item">
        <label class="grid-label">上课日期：</label>
<!--        <el-input-->
<!--          placeholder="开始日期 ~ 结束日期"-->
<!--          suffix-icon="el-icon-date"-->
<!--          v-model="input1">-->
<!--        </el-input>-->
        <el-date-picker
          v-model="date1"
          type="monthrange"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @blur="sub"
        >
        </el-date-picker>
      </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-item">
          <label class="grid-label">所在班级：</label>
          <el-select v-model="myclass" placeholder="请选择班级"
                     @blur="sub">
            <el-option
              v-for="item in classList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-item">
          <label class="grid-label">上课老师：</label>
          <el-select v-model="teacher" placeholder="请选择老师" @blur="sub">
            <el-option
              v-for="item in teacherList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-item">
          <div class="grid-btn" @click="show=!show">
            <i class="el-icon-edit"></i>
            <span>&nbsp;{{show?'收起':'展开'}}&nbsp;</span>
            <i :class="[{'el-icon-arrow-down':!show},{'el-icon-arrow-up':show}]"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>
    <el-collapse-transition>
    <div class="form-box" v-show="show">
    <el-row :gutter="20">
      <el-col :span="7"><div class="grid-item">
        <label class="grid-label">点名日期：</label>
<!--        <el-input-->
<!--          placeholder="开始日期 ~ 结束日期"-->
<!--          suffix-icon="el-icon-date"-->
<!--          v-model="input1">-->
<!--        </el-input>-->

        <el-date-picker
          v-model="date2"
          type="monthrange"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @blur="sub">
        </el-date-picker>
      </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-item">
          <label class="grid-label">报读课程：</label>
          <el-select v-model="course" placeholder="请选择课程" @blur="sub">
            <el-option
              v-for="item in courseList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    </div>
    </el-collapse-transition>
  </div>
</template>
<script>
export default {
  name:'todolist',
  data(){
    return {
      show:false,
      date1: '',
      date2: '',
      myclass:'',
      classList:[{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      teacher:'',
      teacherList:[],
      course:'',
      courseList:[]
    }
  },
  methods:{
    sub(e){
      console.log(e.target||e.$el)
    }
  }
}
</script>
<style>
.form-box{
  padding-bottom: 15px;
}
.grid-item{
  display: flex;
  white-space: nowrap;
  align-items: center;
}
.grid-label{
  height: 100%;
}
.grid-btn{
  height:40px;
  display: flex;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
