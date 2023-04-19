import Mock from 'mockjs';
import setupMock, {
  successResponseWrap,
} from '../setup-mock';
/**
 * 模块管理
 */
const module = 'module'

let data = [
    {
      "id": "08db2c7c81ee4293809358ab2f53fdd9",
      "parentId": "",
      "postion": "系统管理",
      "area": "Admin",
      "orderCode": 0,
      "name": "系统管理",
      "code": "Root.Admin",
      "controller": "",
      "action": "",
      "isController": false,
      "accessType": 0,
      "children": [
        {
          "id": "08db2c7c822e430e83689cfd84945a91",
          "parentId": "08db2c7c81ee4293809358ab2f53fdd9",
          "postion": "系统管理",
          "area": "Admin",
          "orderCode": 0,
          "name": "通用",
          "code": "Root.Admin.Common",
          "controller": "Common",
          "action": null,
          "isController": true,
          "accessType": 1,
          "children": [
            {
              "id": "08db2c7c82b2432d80857b63500ab5d9",
              "parentId": "08db2c7c822e430e83689cfd84945a91",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 1,
              "name": "上传图片",
              "code": "Root.Admin.Common.UploadImage",
              "controller": "Common",
              "action": "UploadImage",
              "isController": false,
              "accessType": 0,
              "children": null
            }
          ]
        },
        {
          "id": "08db2c7c83fa4de08030ec08e29e6af9",
          "parentId": "08db2c7c81ee4293809358ab2f53fdd9",
          "postion": "系统管理",
          "area": "Admin",
          "orderCode": 0,
          "name": "登录认证",
          "code": "Root.Admin.Identity",
          "controller": "Identity",
          "action": null,
          "isController": true,
          "accessType": 1,
          "children": [
            {
              "id": "08db2c7c842d402a8b6b1641f8cada9a",
              "parentId": "08db2c7c83fa4de08030ec08e29e6af9",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 1,
              "name": "获取身份认证Token",
              "code": "Root.Admin.Identity.Token",
              "controller": "Identity",
              "action": "Token",
              "isController": false,
              "accessType": 0,
              "children": null
            },
            {
              "id": "08db3a592c454c1687184d871cd258e6",
              "parentId": "08db2c7c83fa4de08030ec08e29e6af9",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 2,
              "name": "用户信息",
              "code": "Root.Admin.Identity.Profile",
              "controller": "Identity",
              "action": "Profile",
              "isController": false,
              "accessType": 1,
              "children": null
            },
            {
              "id": "08db2c7c84c74bc682ac2c6b791ccada",
              "parentId": "08db2c7c83fa4de08030ec08e29e6af9",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 3,
              "name": "用户登出",
              "code": "Root.Admin.Identity.Logout",
              "controller": "Identity",
              "action": "Logout",
              "isController": false,
              "accessType": 1,
              "children": null
            },
            {
              "id": "08db2c7c84d74eb9851798d69589ea17",
              "parentId": "08db2c7c83fa4de08030ec08e29e6af9",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 4,
              "name": "修改密码",
              "code": "Root.Admin.Identity.ChangePassword",
              "controller": "Identity",
              "action": "ChangePassword",
              "isController": false,
              "accessType": 1,
              "children": null
            }
          ]
        },
        {
          "id": "08db2c7c856b4d5d8f80c2a167cc0030",
          "parentId": "08db2c7c81ee4293809358ab2f53fdd9",
          "postion": "系统管理",
          "area": "Admin",
          "orderCode": 1,
          "name": "用户信息",
          "code": "Root.Admin.User",
          "controller": "User",
          "action": null,
          "isController": true,
          "accessType": 2,
          "children": [
            {
              "id": "08db2c7c857c4b65894a5a2f765f397c",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 1,
              "name": "读取",
              "code": "Root.Admin.User.Read",
              "controller": "User",
              "action": "Read",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c858f403d8c36bbbfb86f55f7",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 2,
              "name": "新增",
              "code": "Root.Admin.User.Create",
              "controller": "User",
              "action": "Create",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c85a040728f960fbdc3b1a018",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 3,
              "name": "更新",
              "code": "Root.Admin.User.Update",
              "controller": "User",
              "action": "Update",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c85b244ca895e1bbdb0098876",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 4,
              "name": "删除",
              "code": "Root.Admin.User.Delete",
              "controller": "User",
              "action": "Delete",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c856a9e4825854fb963a2c4a58d",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 5,
              "name": "重置密码",
              "code": "Root.Admin.User.ResetPassword",
              "controller": "User",
              "action": "ResetPassword",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db4098a6404f078f1807afc0eb3d4f",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 6,
              "name": "读取用户角色",
              "code": "Root.Admin.User.ReadUserRoles",
              "controller": "User",
              "action": "ReadUserRoles",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db4098a6584f6c8309f220425cdb6c",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 7,
              "name": "设置用户角色",
              "code": "Root.Admin.User.SetUserRoles",
              "controller": "User",
              "action": "SetUserRoles",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c8bcdaf4262878c4575d285e266",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 8,
              "name": "读取用户权限",
              "code": "Root.Admin.User.ReadUserModules",
              "controller": "User",
              "action": "ReadUserModules",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2ce54b9c405f8735c2d20b2a3c23",
              "parentId": "08db2c7c856b4d5d8f80c2a167cc0030",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 9,
              "name": "设置用户权限",
              "code": "Root.Admin.User.SetUserModules",
              "controller": "User",
              "action": "SetUserModules",
              "isController": false,
              "accessType": 2,
              "children": null
            }
          ]
        },
        {
          "id": "08db2c7c84e841c18b3d707b3dcb972b",
          "parentId": "08db2c7c81ee4293809358ab2f53fdd9",
          "postion": "系统管理",
          "area": "Admin",
          "orderCode": 2,
          "name": "角色信息",
          "code": "Root.Admin.Role",
          "controller": "Role",
          "action": null,
          "isController": true,
          "accessType": 2,
          "children": [
            {
              "id": "08db2c7c84f8439b8600befe96f7b1a5",
              "parentId": "08db2c7c84e841c18b3d707b3dcb972b",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 1,
              "name": "读取",
              "code": "Root.Admin.Role.Read",
              "controller": "Role",
              "action": "Read",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c850a4999822a68b04c978f5e",
              "parentId": "08db2c7c84e841c18b3d707b3dcb972b",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 2,
              "name": "新增",
              "code": "Root.Admin.Role.Create",
              "controller": "Role",
              "action": "Create",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c851b439582d30d093dadff91",
              "parentId": "08db2c7c84e841c18b3d707b3dcb972b",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 3,
              "name": "更新",
              "code": "Root.Admin.Role.Update",
              "controller": "Role",
              "action": "Update",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c852c420a8bff1752a006fd8e",
              "parentId": "08db2c7c84e841c18b3d707b3dcb972b",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 4,
              "name": "删除",
              "code": "Root.Admin.Role.Delete",
              "controller": "Role",
              "action": "Delete",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2ce5494e4f00850ff461da515b54",
              "parentId": "08db2c7c84e841c18b3d707b3dcb972b",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 5,
              "name": "读取角色权限",
              "code": "Root.Admin.Role.ReadRoleModules",
              "controller": "Role",
              "action": "ReadRoleModules",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2ce549af43fe8fd46a3a550d24a6",
              "parentId": "08db2c7c84e841c18b3d707b3dcb972b",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 6,
              "name": "设置角色权限",
              "code": "Root.Admin.Role.SetRoleModules",
              "controller": "Role",
              "action": "SetRoleModules",
              "isController": false,
              "accessType": 2,
              "children": null
            }
          ]
        },
        {
          "id": "08db2cf6fc6548178e8101722febde2b",
          "parentId": "08db2c7c81ee4293809358ab2f53fdd9",
          "postion": "系统管理",
          "area": "Admin",
          "orderCode": 3,
          "name": "模块信息",
          "code": "Root.Admin.Module",
          "controller": "Module",
          "action": null,
          "isController": true,
          "accessType": 2,
          "children": [
            {
              "id": "08db2cf6fcfd489f8d82879180b81856",
              "parentId": "08db2cf6fc6548178e8101722febde2b",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 1,
              "name": "读取",
              "code": "Root.Admin.Module.Read",
              "controller": "Module",
              "action": "Read",
              "isController": false,
              "accessType": 0,
              "children": null
            }
          ]
        },
        {
          "id": "08db2c7c82d14fb386ba2dc193e3caca",
          "parentId": "08db2c7c81ee4293809358ab2f53fdd9",
          "postion": "系统管理",
          "area": "Admin",
          "orderCode": 4,
          "name": "数据字典",
          "code": "Root.Admin.Dict",
          "controller": "Dict",
          "action": null,
          "isController": true,
          "accessType": 2,
          "children": [
            {
              "id": "08db2c7c830242b58547637d7967e2a7",
              "parentId": "08db2c7c82d14fb386ba2dc193e3caca",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 1,
              "name": "读取",
              "code": "Root.Admin.Dict.Read",
              "controller": "Dict",
              "action": "Read",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c834f469584f2df831ec684c9",
              "parentId": "08db2c7c82d14fb386ba2dc193e3caca",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 2,
              "name": "新增",
              "code": "Root.Admin.Dict.Create",
              "controller": "Dict",
              "action": "Create",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c837e44df834249bdad06b758",
              "parentId": "08db2c7c82d14fb386ba2dc193e3caca",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 3,
              "name": "更新",
              "code": "Root.Admin.Dict.Update",
              "controller": "Dict",
              "action": "Update",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2c7c83b44fa1832e49b3765422a9",
              "parentId": "08db2c7c82d14fb386ba2dc193e3caca",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 4,
              "name": "删除",
              "code": "Root.Admin.Dict.Delete",
              "controller": "Dict",
              "action": "Delete",
              "isController": false,
              "accessType": 2,
              "children": null
            }
          ]
        },
        {
          "id": "08db2c7c853c496d8b0c756c82a01e70",
          "parentId": "08db2c7c81ee4293809358ab2f53fdd9",
          "postion": "系统管理",
          "area": "Admin",
          "orderCode": 5,
          "name": "服务器信息",
          "code": "Root.Admin.Server",
          "controller": "Server",
          "action": null,
          "isController": true,
          "accessType": 2,
          "children": [
            {
              "id": "08db2ce54a284c7084cb1cca719c9fcd",
              "parentId": "08db2c7c853c496d8b0c756c82a01e70",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 1,
              "name": "读取服务器信息",
              "code": "Root.Admin.Server.Read",
              "controller": "Server",
              "action": "Read",
              "isController": false,
              "accessType": 2,
              "children": null
            },
            {
              "id": "08db2ce6b63e43a089472c234d343b31",
              "parentId": "08db2c7c853c496d8b0c756c82a01e70",
              "postion": "系统管理",
              "area": "Admin",
              "orderCode": 2,
              "name": "读取服务器状态",
              "code": "Root.Admin.Server.ReadStatus",
              "controller": "Server",
              "action": "ReadStatus",
              "isController": false,
              "accessType": 2,
              "children": null
            }
          ]
        }
      ]
    }
];


setupMock({
    setup() {
      Mock.mock(`/api/${module}/read`, () => {
        return successResponseWrap(data);
      });
    },
  });
  