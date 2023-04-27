import Mock from 'mockjs';
import setupMock, {
  successResponseWrap,
} from '../setup-mock';
/**
 * 标签管理
 */
const module = 'tags'

let data =Mock.mock({
  "rows|10": [{
      'id': '@id', 
      "name|+1": [
        "前端",
        "后端",
        "vue",
        "js"
      ],
      "orderCode":1,
      "status|0-1": 0,
      'createdTime': '@date("yyyy-MM-dd")',
  }],
  total:10
})
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