<template>
  <a-spin :loading="state.loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: 0 }"
      :body-style="{
        paddingTop: '20px',
      }"
      :title="'内容数据'"
    >
      <template #extra>
        <a-link>查看更多</a-link>
      </template>
      <Chart height="289px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { graphic } from "echarts";
import dayjs from "dayjs";
import useChartOption from "@/hooks/chart-option";
function graphicFactory(side: any) {
  return {
    type: "text",
    bottom: "8",
    ...side,
    style: {
      text: "",
      textAlign: "center",
      fill: "#4E5969",
      fontSize: 12,
    },
  };
}
const graphicElements = ref([
  graphicFactory({ left: "2.6%" }),
  graphicFactory({ right: 0 }),
]);
const xAxis = ref<string[]>([]);

const state = reactive({
  loading: false,
  chartsData: <any>[],
});



const fetchData = () => {
  const presetData = [58, 81, 53, 90, 64, 88, 49, 79];
  var data = new Array(8).fill(0).map((el, idx) => ({
    x: dayjs()
      .day(idx - 2)
      .format("YYYY-MM-DD"),
    y: presetData[idx],
  }));

  data.forEach((el: any, idx: any) => {
    xAxis.value.push(el.x);
    state.chartsData.push(el.y);
    if (idx === 0) {
      graphicElements.value[0].style.text = el.x;
    }
    if (idx === data.length - 1) {
      graphicElements.value[1].style.text = el.x;
    }
  });
};
fetchData();


const { chartOption } = useChartOption(() => {
  return {
    grid: {
      left: "2.6%",
      right: "0",
      top: "10",
      bottom: "30",
    },
    xAxis: {
      type: "category",
      offset: 2,
      data: xAxis.value,
      boundaryGap: false,
      axisLabel: {
        color: "#4E5969",
        formatter(value: number, idx: number) {
          if (idx === 0) return "";
          if (idx === xAxis.value.length - 1) return "";
          return `${value}`;
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        interval: (idx: number) => {
          if (idx === 0) return false;
          if (idx === xAxis.value.length - 1) return false;
          return true;
        },
        lineStyle: {
          color: "#E5E8EF",
        },
      },
      axisPointer: {
        show: true,
        lineStyle: {
          color: "#23ADFF",
          width: 2,
        },
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisLabel: {
        formatter(value: any, idx: number) {
          if (idx === 0) return value;
          return `${value}k`;
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#E5E8EF",
        },
      },
    },
    tooltip: {
      trigger: "axis",
      formatter(params) {
        const [firstElement] = params as any[];
        return `<div>
            <p class="tooltip-title">${firstElement.axisValueLabel}</p>
            <div class="content-panel"><span>访客</span><span class="tooltip-value">${(
              Number(firstElement.value) * 10000
            ).toLocaleString()}</span></div>
          </div>`;
      },
      className: "echarts-tooltip-diy",
    },
    graphic: {
      elements: graphicElements.value,
    },
    series: [
      {
        data: state.chartsData,
        type: "line",
        smooth: true,
        // symbol: 'circle',
        symbolSize: 12,
        emphasis: {
          focus: "series",
          itemStyle: {
            borderWidth: 2,
          },
        },
        lineStyle: {
          width: 3,
          color: new graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: "rgba(30, 231, 255, 1)",
            },
            {
              offset: 0.5,
              color: "rgba(36, 154, 255, 1)",
            },
            {
              offset: 1,
              color: "rgba(111, 66, 251, 1)",
            },
          ]),
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(17, 126, 255, 0.16)",
            },
            {
              offset: 1,
              color: "rgba(17, 128, 255, 0)",
            },
          ]),
        },
      },
    ],
  };
});
</script>

<style scoped lang="less"></style>
