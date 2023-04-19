<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card :title="'服务器信息'">
          服务器名称: {{ state.serverData?.serverName }} <br />
          系统环境：{{ state.serverData?.systemOs }}    {{ state.serverData?.osArchitecture }}     <br />
          线程数：{{ state.serverData?.processorCount }}    <br />
          总内存: {{ state.serverStatus?.totalRAM }}  <br />
          运行时间：{{ state.serverStatus?.runTime }}
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :title="'IP信息'">
          外网IP:{{ state.serverData?.ip }}     <br />
          局域网IP:{{ state.serverData?.lanIp }}   <br />
          IP归属地:{{ state.serverData?.ipLocation }}  <br />
        </a-card></a-col
      >
      <a-col :span="6">
        <a-card :title="'项目信息'">
          项目框架：{{ state.serverData?.frameworkDescription }}  <br />
          启动时间：{{ state.serverData?.startTime }}  <br />
          内存占用：{{ state.serverData?.ramUse }}  <br />
        </a-card></a-col
      >
      <a-col :span="6">
        <a-card :title="'CPU使用情况'">
          <a-progress
            type="circle"
            :size="'large'"
            :percent="state.serverStatus?.cpuRate / 100"
          />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card :title="'内存使用情况'">
          <a-progress
            type="circle"
            :size="'large'"
            :percent="state.serverStatus?.ramRate / 100"
          />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { read, readStatus } from "@/api/admin/server";
import { reactive } from "vue";

const state = reactive({
  loading: false,
  serverData:{},
  serverStatus:{}
});

const handleFetch = async () => {
  state.loading=true;
  try {
    const { data } = await read();
    state.serverData=data;
    const res = await readStatus();
    state.serverStatus=res.data;
  } finally {
    state.loading = false;
  }
};
handleFetch();
</script>
