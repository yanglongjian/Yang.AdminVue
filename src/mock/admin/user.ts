import Mock, { Random } from 'mockjs';
import setupMock, {
  successResponseWrap,
  failResponseWrap,
} from '../setup-mock';
import { isLogin } from '@/utils/auth';
/**
 * 用户管理
 */
const module = 'user'

let data = Mock.mock({
  //生成100条数据 数组
  "rows|20": [{
    'id': '@increment',
    'account': '@last',
    'nickName': '@cname(3)',
    "avatar": Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
    "email": '@email',
    'mobile': /^1(5|3|7|8)[0-9]{9}$/,
    "roles|1": [
      "管理员",
      "开发人员",
      "项目经理"
    ],
    "status|0-1": 0,
    "remark|2": "★★★",
    'createdTime': '@date("yyyy-MM-dd")',
  }],
  total: 150
})


setupMock({
  setup() {
    Mock.mock(`/api/${module}/read`, (params: any) => {
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

    Mock.mock(`/api/${module}/readUserRoles`, (params: any) => {
      return successResponseWrap({
        rows: [{ id: 1, name: '超级管理员' }, { id: 2, name: '开发' }, { id: 3, name: '技术' }, { id: 4, name: '访客' }],
        checkedKeys: [2, 4]
      });
    });
    Mock.mock(`/api/${module}/setUserRoles`, (params: any) => {
      return successResponseWrap('设置成功');
    });

    Mock.mock(`/api/${module}/readUserModules`, (params: any) => {
      return successResponseWrap({
        "checkedKeys": [],
        "rows": [
          {
            "id": "08db2c7c81ee4293809358ab2f53fdd9",
            "name": "系统管理",
            "children": [
              {
                "id": "08db2c7c856b4d5d8f80c2a167cc0030",
                "name": "用户信息",
                "children": [
                  {
                    "id": "08db2c7c857c4b65894a5a2f765f397c",
                    "name": "读取",
                    "children": [
                    ]
                  },
                  {
                    "id": "08db2c7c858f403d8c36bbbfb86f55f7",
                    "name": "新增",
                    "children": []
                  },
                  {
                    "id": "08db2c7c85a040728f960fbdc3b1a018",
                    "name": "更新",
                    "children": [
                    ]
                  },
                  {
                    "id": "08db2c7c85b244ca895e1bbdb0098876",
                    "name": "删除",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2c856a9e4825854fb963a2c4a58d",
                    "name": "重置密码",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db4098a6404f078f1807afc0eb3d4f",
                    "name": "读取用户角色",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db4098a6584f6c8309f220425cdb6c",
                    "name": "设置用户角色",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2ce54b9c405f8735c2d20b2a3c23",
                    "name": "设置用户权限",
                    "children": [

                    ]
                  }
                ]
              },
              {
                "id": "08db2c7c84e841c18b3d707b3dcb972b",
                "name": "角色信息",
                "children": [
                  {
                    "id": "08db2c7c84f8439b8600befe96f7b1a5",
                    "name": "读取",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2c7c850a4999822a68b04c978f5e",
                    "name": "新增",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2c7c851b439582d30d093dadff91",
                    "name": "更新",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2c7c852c420a8bff1752a006fd8e",
                    "name": "删除",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2ce5494e4f00850ff461da515b54",
                    "name": "读取角色权限",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2ce549af43fe8fd46a3a550d24a6",
                    "name": "设置角色权限",
                    "children": [

                    ]
                  }
                ]
              },
              {
                "id": "08db2cf6fc6548178e8101722febde2b",
                "name": "模块信息",
                "children": [
                  {
                    "id": "08db2cf6fcfd489f8d82879180b81856",
                    "name": "读取",
                    "children": [

                    ]
                  }
                ]
              },
              {
                "id": "08db2c7c82d14fb386ba2dc193e3caca",
                "name": "数据字典",
                "children": [
                  {
                    "id": "08db2c7c830242b58547637d7967e2a7",
                    "name": "读取",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2c7c834f469584f2df831ec684c9",
                    "name": "新增",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2c7c837e44df834249bdad06b758",
                    "name": "更新",
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2c7c83b44fa1832e49b3765422a9",
                    "name": "删除",
                    "children": [

                    ]
                  }
                ]
              },
              {
                "id": "08db2c7c853c496d8b0c756c82a01e70",
                "name": "服务器信息",
                "children": [
                  {
                    "id": "08db2ce54a284c7084cb1cca719c9fcd",
                    "name": "读取服务器信息",
                    "code": null,
                    "children": [

                    ]
                  },
                  {
                    "id": "08db2ce6b63e43a089472c234d343b31",
                    "name": "读取服务器状态",
                    "children": [

                    ]
                  }
                ]
              }
            ]
          }
        ]
      });
    });
    Mock.mock(`/api/${module}/setUserModules`, (params: any) => {
      return successResponseWrap('设置成功');
    });
  },
});
