import Mock, { Random } from 'mockjs';
import setupMock, {
  successResponseWrap,
} from '../setup-mock';
/**
 * 栏目管理
 */
const module = 'channel'

let data = Mock.mock([
  {
    'id': '@increment',
    'name': '首页',
    'link': '/index.html',
    "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
    "orderCode": 1,
    "status|0-1": 0,
    'createdTime': '@date("yyyy-MM-dd")',
  },
  {
    'id': '@increment',
    'name': '代码人生',
    'link': '',
    "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
    "orderCode": 1,
    "status|0-1": 0,
    'createdTime': '@date("yyyy-MM-dd")',
    "children": [
      {
        'id': '@increment',
        'name': 'NetCore',
        'link': '/article.html',
        "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
        "orderCode": 1,
        "status|0-1": 0,
        'createdTime': '@date("yyyy-MM-dd")',
      },
      {
        'id': '@increment',
        'name': 'vue',
        'link': '/article.html',
        "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
        "orderCode": 1,
        "status|0-1": 0,
        'createdTime': '@date("yyyy-MM-dd")',
      },
      {
        'id': '@increment',
        'name': 'css',
        'link': '/article.html',
        "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
        "orderCode": 1,
        "status|0-1": 0,
        'createdTime': '@date("yyyy-MM-dd")',
      },
    ]
  },
  {
    'id': '@increment',
    'name': '课程',
    'link': '',
    "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
    "orderCode": 1,
    "status|0-1": 0,
    'createdTime': '@date("yyyy-MM-dd")',
    "children": [
      {
        'id': '@increment',
        'name': 'NetCore',
        'link': '/article.html',
        "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
        "orderCode": 1,
        "status|0-1": 0,
        'createdTime': '@date("yyyy-MM-dd")',
      },
      {
        'id': '@increment',
        'name': 'vue',
        'link': '/article.html',
        "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
        "orderCode": 1,
        "status|0-1": 0,
        'createdTime': '@date("yyyy-MM-dd")',
      },
      {
        'id': '@increment',
        'name': 'css',
        'link': '/article.html',
        "picture": Random.dataImage('200x100', 'Hello Mock.js!'),
        "orderCode": 1,
        "status|0-1": 0,
        'createdTime': '@date("yyyy-MM-dd")',
      },
    ]
  },
]);
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