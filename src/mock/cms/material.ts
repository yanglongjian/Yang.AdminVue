import Mock from 'mockjs';
import setupMock, {
  successResponseWrap,
} from '../setup-mock';
/**
 * 素材管理
 */
const module = 'material'

let data = [
  {
    id: "001",
    name: "文件夹",
    extendName: "",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: true,
    filePath: "/"
  },
  {
    id: "002",
    name: "文件夹1",
    extendName: "",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: true,
    filePath: "/"
  },
  {
    id: "003",
    name: "哈哈",
    extendName: "doc",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "004",
    name: "致你-予星",
    extendName: "mp3",
    src: "https://webfs.ali.kugou.com/202205080014/0b56ab5801cafaaf59d94eb86622e826/part/0/960111/KGTX/CLTX001/2ee15e52cecb80545bcaf91431a73dc8.mp3",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "094",
    name: "摇滚-电音",
    extendName: "mp3",
    src: "http://music.163.com/song/media/outer/url?id=447925558.mp3",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "005",
    name: "视频",
    extendName: "mp4",
    src: "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "006",
    name: "压缩包",
    extendName: "zip",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "007",
    name: "项目",
    extendName: "rar",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "008",
    name: "数据表格",
    extendName: "xls",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "009",
    name: "PPT演示",
    extendName: "ppt",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "010",
    name: "文本",
    extendName: "txt",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "011",
    name: "未知文件",
    extendName: "",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "012",
    name: "首页",
    extendName: "html",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    filePath: "/",
    isDir: false
  },
  {
    id: "013",
    name: "样式",
    extendName: "css",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "014",
    name: "代码",
    extendName: "js",
    src: null,
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "106",
    name: "图片",
    extendName: "png",
    src: "https://cdn.midjourney.com/fba03016-9827-47f3-9ddd-d36bea73ad86/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "107",
    name: "头像",
    extendName: "png",
    src: "https://cdn.midjourney.com/a7c163e3-e1b2-4a2a-9812-4f628401ad9e/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "108",
    name: "头像1",
    extendName: "png",
    src: "https://cdn.midjourney.com/06eeadb2-2cc2-4f02-8556-911bb3a2c8ff/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "109",
    name: "头像2",
    extendName: "png",
    src: "https://cdn.midjourney.com/2d6525d2-7ef9-4ef2-b655-1e3cb9c17681/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "110",
    name: "头像3",
    extendName: "png",
    src: "https://cdn.midjourney.com/c6999f58-3f0e-4e2f-80d7-5b818ddb4ec6/grid_0.png",
    updateTime: "2022-06-14 10:44:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "111",
    name: "头像4",
    extendName: "png",
    src: "https://cdn.midjourney.com/e647383e-415c-42f5-8a67-42751886fee5/grid_0.png",
    updateTime: "2022-06-14 10:44:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "112",
    name: "头像5",
    extendName: "png",
    src: "https://cdn.midjourney.com/39eca528-d9d3-4291-a850-addedb13ee11/grid_0.png",
    updateTime: "2022-06-14 10:44:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "113",
    name: "头像6",
    extendName: "png",
    src: "https://cdn.midjourney.com/e59319d7-391f-43ce-a51a-40620bf387be/grid_0.png",
    updateTime: "2022-06-14 10:44:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "114",
    name: "头像7",
    extendName: "png",
    src: "https://cdn.midjourney.com/3968544f-0cd2-48a9-956c-54e69f576c98/grid_0.png",
    updateTime: "2022-06-14 10:44:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "115",
    name: "头像8",
    extendName: "png",
    src: "https://cdn.midjourney.com/d56f9278-21b6-4f53-a6f9-97d216ea1306/grid_0.png",
    updateTime: "2022-06-14 10:44:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "120",
    name: "头像9",
    extendName: "png",
    src: "https://cdn.midjourney.com/e37eb2bd-dfc5-455d-9179-70fecb135649/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "120",
    name: "摄影-校园",
    extendName: "png",
    src: "https://cdn.midjourney.com/f62a0a1e-db78-4287-85d4-1da85cf6a9b6/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "121",
    name: "摄影-校园2",
    extendName: "png",
    src: "https://cdn.midjourney.com/68bcd71d-9790-4624-8581-15687ca966fa/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "122",
    name: "摄影-校园3",
    extendName: "png",
    src: "https://cdn.midjourney.com/9232270d-82e1-40a2-acc1-b6dd4f2c2b97/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "123",
    name: "摄影-花",
    extendName: "png",
    src: "https://cdn.midjourney.com/89cf310a-9627-4cec-8158-ddfa15f04cb4/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "124",
    name: "摄影-01",
    extendName: "png",
    src: "https://cdn.midjourney.com/eeda04d9-73da-4661-a0c6-7b80bee7e785/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "125",
    name: "摄影-02",
    extendName: "png",
    src: "https://cdn.midjourney.com/da8b919b-7126-4477-ba61-8f0acd3d6e4a/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "126",
    name: "图片01",
    extendName: "png",
    src: "https://cdn.midjourney.com/03e28960-c53c-43c3-9c8d-3302f7ec808a/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "127",
    name: "图片02",
    extendName: "png",
    src: "https://cdn.midjourney.com/846c3aa9-b02c-45e3-bd65-b190bd937bd7/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  },
  {
    id: "128",
    name: "图片03",
    extendName: "png",
    src: "https://cdn.midjourney.com/4db75f92-977e-4a41-9bed-13af4f775a8d/grid_0.png",
    updateTime: "2022-01-20 18:30:00",
    isDir: false,
    filePath: "/"
  }
]

setupMock({
  setup() {
    Mock.mock(`/api/${module}/read`, () => {
      return successResponseWrap(data);
    });
    Mock.mock(`/api/${module}/create`, (params: any) => {
      return successResponseWrap('添加成功');
    });
    Mock.mock(`/api/${module}/update`, (params: any) => {
      return successResponseWrap('更新成功');
    });
    Mock.mock(`/api/${module}/delete`, (params: any) => {
      return successResponseWrap('删除成功');
    });
  },
});