import { App } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart, LineChart, PieChart, RadarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
} from 'echarts/components';
import Chart from './chart/index.vue';
import YSearch from './y-search/index.vue';
import YForm from './y-form/index.vue';
import YTabForm from './y-tab-form/index.vue';
import YTable from './y-table/index.vue';
import YSvg from './y-svg/index.vue';
//import Breadcrumb from './breadcrumb/index.vue';

// Manually introduce ECharts modules to reduce packing size

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
]);

export default {
  install(Vue: App) {
    Vue.component('Chart', Chart);
    Vue.component('YSearch', YSearch);
    Vue.component('YForm', YForm);
    Vue.component('YTabForm', YTabForm);
    Vue.component('YTable', YTable);
    Vue.component("YSvg",YSvg)
    //Vue.component('Breadcrumb', Breadcrumb);
  },
};
