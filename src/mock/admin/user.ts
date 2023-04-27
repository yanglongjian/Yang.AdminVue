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
let moduleData=Mock.mock([
  {
    "id": '@guid',
    "name": "系统管理",
    "children": [
      {
        "id": '@guid',
        "name": "用户信息",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [
            ]
          },
          {
            "id":'@guid',
            "name": "新增",
            "children": []
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [
            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "重置密码",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "读取用户角色",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "设置用户角色",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "设置用户权限",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "角色信息",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "读取角色权限",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "设置角色权限",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "模块信息",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          }
        ]
      }
    ]
  },
  {
    "id": '@guid',
    "name": "CMS",
    "children": [
      {
        "id":'@guid',
        "name": "Bnaner管理",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [
            ]
          },
          {
            "id":'@guid',
            "name": "新增",
            "children": []
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [
            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "栏目管理",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id":'@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "文章管理",
        "children": [
          {
            "id":'@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "视频管理",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "标签管理",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "素材管理",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id":'@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "采集管理",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id":'@guid',
        "name": "友情链接",
        "children": [
          {
            "id":'@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id":'@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id":'@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id":'@guid',
        "name": "友情链接",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "系统公告",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
      {
        "id": '@guid',
        "name": "站点配置",
        "children": [
          {
            "id": '@guid',
            "name": "读取",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "新增",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "更新",
            "children": [

            ]
          },
          {
            "id": '@guid',
            "name": "删除",
            "children": [

            ]
          }
        ]
      },
    ]
  }
])


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
        "rows": moduleData
      });
    });
    Mock.mock(`/api/${module}/setUserModules`, (params: any) => {
      return successResponseWrap('设置成功');
    });
  },
});
