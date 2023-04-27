import Mock, { Random } from 'mockjs';
import setupMock, {
  successResponseWrap,
} from '../setup-mock';
/**
 * 友情链接
 */
const module = 'links'

let data = Mock.mock({
  "rows|10": [{
      'id': '@id', 
      "name": '@name',
      "picture":Random.dataImage('200x100', 'Hello Mock.js!'),
      "link":'@url',
      "status|0-1": 0,
      'createdTime': '@date("yyyy-MM-dd")',
  }],
  total:1
});
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