<template>
   <div class="file-manage">
     <!--左侧菜单-->
     <div v-if="windowWidth > 715" class="file-aside">
       <div class="gi-title" :class="{ 'is-fill': false, shadow: false }">
         <a-row
           justify="space-between"
           align="center"
           class="wrapper"
           :style="{ 'border-bottom-style': 'dashed' }"
         >
           <h3 class="title">文件管理</h3>
           <a-space>
             <slot></slot>
           </a-space>
         </a-row>
       </div>
 
       <a-menu
         :style="{ width: '220px', height: '100%', 'border-radius': '2px' }"
         :default-open-keys="['0']"
         :default-selected-keys="[currentKey]"
       >
         <a-sub-menu key="0">
           <template #icon>
             <icon-apps />
           </template>
           <template #title>文件类型</template>
           <a-menu-item
             v-for="item in fileTypeList"
             :key="item.value.toString()"
             @click="onClickMenuItem(item)"
           >
             <template #icon>
               <y-svg :size="28" :name="item.menuIcon"></y-svg>
             </template>
             <span>{{ item.name }}</span>
           </a-menu-item>
         </a-sub-menu>
       </a-menu>
     </div>
 
     <!--右侧内容-->
     <div class="file-main">
       <!-- 面包屑导航 -->
       <!-- <file-nav-path></file-nav-path> -->
 
       <a-row justify="space-between" class="row-operate">
         <!-- 左侧区域 -->
         <a-space>
           <a-dropdown>
             <a-button type="primary" shape="round">
               <template #icon><icon-upload /></template>
               <template #default>上传</template>
             </a-button>
             <template #content>
               <a-doption>
                 <template #icon><y-svg name="upload-file" /></template>
                 <span>上传文件</span>
               </a-doption>
               <a-doption>
                 <template #icon><y-svg name="upload-folder" /></template>
                 <span>上传文件夹</span>
               </a-doption>
             </template>
           </a-dropdown>
 
           <a-input-group>
             <a-select style="width: 150px" placeholder="请选择" v-model="selectType">
               <a-option v-for="item in fileTypeList" :key="item.value">
                 <template #icon>
                   <component :is="item.icon" size="18" color="#999"></component>
                 </template>
                 <template #default>{{ item.name }}</template>
               </a-option>
             </a-select>
             <a-input placeholder="请输入关键词..." allow-clear v-model="searchKey"> </a-input>
             <a-button type="primary" @click="handleSearch">
               <template #icon><icon-search /></template>
               <template #default>搜索</template>
             </a-button>
           </a-input-group>
         </a-space>
 
         <!-- 右侧区域 -->
         <a-space v-if="windowWidth > 715">
           <a-button
             v-if="isBatchMode"
             :disabled="!selectedFileIdList.length"
             type="primary"
             status="danger"
             @click="handleMulDelete"
             ><template #icon><icon-delete /></template
           ></a-button>
           <a-button type="primary" @click="isBatchMode = !isBatchMode">
             <template #icon><icon-select-all /></template>
             <template #default>{{
               isBatchMode ? "取消批量" : "批量操作"
             }}</template>
           </a-button>
           <a-button-group>
             <a-tooltip content="传输列表" position="bottom">
               <a-button>
                 <template #icon>
                   <icon-swap />
                 </template>
               </a-button>
             </a-tooltip>
             <a-tooltip content="排序" position="bottom">
               <a-button>
                 <template #icon>
                   <icon-filter />
                 </template>
               </a-button>
             </a-tooltip>
             <a-tooltip content="视图" position="bottom">
               <a-button @click="handleChangeViewMode">
                 <template #icon>
                   <icon-apps v-if="viewMode === 'grid'" />
                   <icon-list v-else />
                 </template>
               </a-button>
             </a-tooltip>
           </a-button-group>
         </a-space>
       </a-row>
 
     
       <a-spin :loading="loading" class="file-wrap">
 
         <!-- 文件列表-宫格模式 -->
         <file-grid-comp
           v-show="fileList.length && viewMode === 'grid'"
           :data="fileList"
           :is-batch-mode="isBatchMode"
           :selected-file-id-list="selectedFileIdList"
           @click="handleClickFile"
           @check="handleCheckFile"
           @right-menu-click="handleRightMenuClick"
         ></file-grid-comp>
 
         <!-- 文件列表-列表模式 -->
         <file-list-comp
           v-show="fileList.length && viewMode === 'list'"
           :data="fileList"
           :is-batch-mode="isBatchMode"
           @click="handleClickFile"
           @right-menu-click="handleRightMenuClick"
         ></file-list-comp>
 
         <a-empty v-show="!fileList.length"></a-empty>
       </a-spin>
     </div>
   </div>
 </template>
 
 <script setup lang="ts">
 import { ref, onMounted } from "vue";
 import { useWindowSize } from "@vueuse/core";
 import { fileTypeList, imageTypeList } from "@/api/global";
 import { Message, Modal } from "@arco-design/web-vue";
 
 import FileGridComp from "@/components/file/file-grid.vue"
 import FileListComp from "@/components/file/file-list.vue"
 // import ThePreviewVideo from "../../components/the-preview-video"
 // import ThePreviewAudio from "../../components/the-preview-audio"
 // import TheFileRename from "../../components/the-file-rename"
 // import TheFileMove from "../../components/the-file-move"
 import { read } from "@/api/cms/material";
 
 const currentKey = ref("0");
 const loading = ref(false);
 const searchKey=ref('');
 const selectType=ref('全部');
 const selectedFileIdList = ref<any>([]);
 const viewMode = ref("grid");
 // 批量操作
 const isBatchMode = ref(false);
 
 const { width: windowWidth } = useWindowSize();
 // 点击事件
 const onClickMenuItem = async(item: any) => {
  fileType.value=item.value;
  await getListData();
 };
 
 const handleSearch=()=>{
 
 }
 
 // 文件列表数据
 const handleChangeViewMode = () => {
   viewMode.value=viewMode.value=='grid'?'list':'grid';
 };
 
 const fileList = ref<any[]>([]);
 const fileType = ref("0");
 
 const getListData = async () => {
   try {
     loading.value = true;
     isBatchMode.value = false;
     const { data } = await read({ fileType: fileType.value });
     fileList.value = data;
   } catch (error) {
     return error;
   } finally {
     loading.value = false;
   }
 };
 
 onMounted(() => {
   getListData();
 });
 
 // 点击文件
 const handleClickFile = (item: any) => {
   //Message.success(`点击了文件-${item.name}`);
   if (imageTypeList.includes(item.extendName)) {
     if (item.src) {
       const imgList: string[] = fileList.value
         .filter((i) => imageTypeList.includes(i.extendName))
         .map((a) => a.src || "");
       const index = imgList.findIndex((i) => i === item.src);
       // if (imgList.length) {
       //   viewerApi({
       //     options: {
       //       initialViewIndex: index
       //     },
       //     images: imgList
       //   })
       // }
     }
   }
   if (item.extendName === "mp4") {
     //ThePreviewVideo(item)
   }
   if (item.extendName === "mp3") {
     //ThePreviewAudio(item)
   }
 };
 
 // 勾选文件
 const handleCheckFile = (item: any) => {
   selectedFileIdList.value.push(item.id);
   //fileStore.addSelectedFileItem(item)
 };
 // 鼠标右键
 const handleRightMenuClick = (mode: string, fileInfo: any) => {
   Message.success("点击了" + mode);
   if (mode === "delete") {
     Modal.warning({
       title: "提示",
       content: "是否删除该文件？",
       hideCancel: false,
     });
   }
   if (mode === "rename") {
     //TheFileRename(fileInfo)
   }
   if (mode === "move") {
     //TheFileMove(fileInfo)
   }
   if (mode === "detail") {
     //router.push({ path: "/file/detail" })
   }
 };
 
 // 批量删除
 const handleMulDelete = () => {
   Modal.warning({
     title: "提示",
     content: "是否确认删除？",
     hideCancel: false,
   });
 };
 </script>
 
 <style lang="less" scoped>
 .file-manage {
   --color-menu-dark-bg: #000c17;
   --color-menu-dark-hover: #165dff;
   --color-menu-light-bg:#fff;
 
   display: flex;
   flex: 1;
   height: 100%;
   overflow: hidden;
 
   .gi-title {
     z-index: 99;
     box-sizing: border-box;
     flex-shrink: 0;
     height: 44px;
     padding: 0 16px;
 
     > .wrapper {
       box-sizing: border-box;
       height: 100%;
       border-bottom-color: var(--color-neutral-3);
       border-bottom-width: 1px;
     }
 
     &.is-fill {
       padding: 0;
 
       > .wrapper {
         padding: 0 16px;
       }
     }
 
     &.shadow {
       box-shadow: 0 2px 6px rgba(0, 0, 0, 8%);
 
       > .wrapper {
         border: 0;
       }
     }
 
     .title {
       margin-block-start: 0;
       margin-block-end: 0;
       font-size: 16px;
       font-weight: normal;
       color: var(--color-text-1);
     }
   }
 
   .file-aside {
     height: fit-content;
     margin: 16px 0 16px 16px;
     background: var(--color-bg-1);
     border-radius: 2px;
   }
 
 
   .file-main {
     display: flex;
     flex: 1;
     flex-direction: column;
     margin: 16px;
     overflow: hidden;
     background: var(--color-bg-1);
     border-radius: 4px;
 
     .row-operate {
       padding-bottom: 12px;
       margin: 12px 16px;
       border-bottom: 1px dashed var(--color-border-3);
     }
 
     .file-wrap {
       box-sizing: border-box;
       display: flex;
       flex: 1;
       flex-direction: column;
       padding: 0 16px 16px;
       overflow: hidden;
     }
   }
 }
 </style>
 