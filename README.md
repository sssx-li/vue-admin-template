# vue-admin-template

## 项目安装

```
pnpm install
```

### 开发环境

```
pnpm run dev
```

### mock 环境

```
pnpm run dev:lock
```

### 生产打包

```
pnpm run build
```

### 格式化

```
pnpm run lint
```

### el-icon 、svg 及 iconify 图标的使用使用

#### el-icon

```
 element-plus自定义图标组件可配合el-icon及vue自带component组件使用

  1. 引入要使用的图标(该项目在register/registerIcon.ts目录中进行全局引入并注册)
    import {Avatar} from '@element-plus/icons-vue';
  2. 使用
    <Avatar/>

    <el-icon :size="20" style="color: #f60">
      <Avatar/>
    </el-icon>

    <component :is="`Avatar`" />

    <el-icon :size="20" style="color: #f60">
      <component :is="`Avatar`" />
    </el-icon>
```

#### svg

```
  1. 下载svg文件，并存放在src/assets/svgs目录下(该项目指定在此目录，可以在vue.config.js文件中进行修改)

  2. 使用: icon-custom-{{svgName}}
    <!-- icon 及 custom (前缀名)均可在vue.config.js进行修改，根据个人喜好设置 -->
    <icon-custom-logo />

    <el-icon :size="20" style="color: #f60">
      <icon-custom-logo />
    </el-icon>
```

#### iconify([访问地址](https://icon-sets.iconify.design/))

```
  项目中引入的图集webpack会自动进行安装，可直接使用

  1. 在官方网站找到想用的图标

  2. 复制图集及icon名, 例： clarity:accessibility-1-solid; 图集为clarity，图标名为accessibility-1-solid
  <icon-clarity-accessibility-1-solid/>

  <el-icon :size="20" style="color: #f60">
    <icon-clarity-accessibility-1-solid/>
  </el-icon>
```
