import Mock from 'mockjs';
import setupMock, { successResponseWrap, failResponseWrap, } from '../setup-mock';

import { isLogin } from '@/utils/auth';
const module = 'identity'

setupMock({
  setup() {
    // 登录
    Mock.mock(`/api/${module}/token`, (params: any) => {
      const { account, password } = JSON.parse(params.body);
      if (account === 'admin' && password === '123456') {
        return successResponseWrap(
          {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIkFjY291bnQiOiJhZG1pbiIsIkF2YXRhciI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS8zMjI5MDM3MiIsIk5pY2tOYW1lIjoi566h55CG5ZGYIiwiSXNTeXN0ZW0iOnRydWUsIklwIjpudWxsLCJVc2VyVHlwZSI6MSwiTG9naW5UaW1lIjoiMjAyMy0wNC0xMVQxNDo0OTowMy43MzM3NjcyKzA4OjAwIiwiaWF0IjoxNjgxMTk1NzQzLCJuYmYiOjE2ODExOTU3NDMsImV4cCI6MTY4MTE5Njk0MywiaXNzIjoiTmV0Q29yZVdlYkFwaSIsImF1ZCI6IlREZXNpZ24gQWRtaW4ifQ.IzsGslJs9Vf1FsfUEtCwoQ3hVgUI7at_DNjXAAa-Ovg",
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5IiwiZSI6Ikl6c0dzbEpzOVZmMUZzZlVFdEN3b1EzaFZnVUk3YXRfRE5qWEFBYS1PdmciLCJzIjo5MCwibCI6NywiayI6Ijl1ZEdWdWQiLCJpYXQiOjE2ODExOTU3NDMsIm5iZiI6MTY4MTE5NTc0MywiZXhwIjoxNjgxODAwNTQzLCJpc3MiOiJOZXRDb3JlV2ViQXBpIiwiYXVkIjoiVERlc2lnbiBBZG1pbiJ9.LnPbd0WALvEU3WYlNZj6Wf1FecNU6N6ArAhO_jzy8Jc"
          });
      }
      return failResponseWrap('账号或者密码错误');
    });



    // 用户信息
    Mock.mock(`/api/${module}/profile`, () => {
      if (isLogin()) {
        const role = window.localStorage.getItem('userRole') || 'admin';
        return successResponseWrap(
          {
            "id": 1,
            "account": "admin",
            "nickName": "管理员",
            "avatar": "https://cdn.midjourney.com/06eeadb2-2cc2-4f02-8556-911bb3a2c8ff/grid_0.png",
            "mobile": "18150370180",
            "email": "admin@qq.com",
            "isSystem": true,
            "status": 1,
            "remark": null,
            "createdTime": "2023-03-24 23:29:14",
            "userDetail": null,
            "userRoleList": [
              {
                "id": 1,
                "userId": 1,
                "roleId": 1
              }
            ],
            "roleList": [
              {
                "id": 1,
                "name": "系统管理员",
                "isSystem": false,
                "isAdmin": false,
                "isDefault": false,
                "status": 0,
                "remark": null,
                "createdTime": "0001-01-01 00:00:00"
              }
            ],
            "roles": null,
            "permissionList": [
              "Root.Admin",
              "Root.Admin.Common",
              "Root.Admin.Common.UploadImage",
              "Root.Admin.Identity.Token",
              "Root.Admin.Identity.Logout",
              "Root.Admin.Identity.Profile",
              "Root.Admin.Identity.ChangePassword",
              "Root.Admin.Role",
              "Root.Admin.Role.Read",
              "Root.Admin.Role.Create",
              "Root.Admin.Role.Update",
              "Root.Admin.Role.Delete",
              "Root.Admin.Role.ReadRoleModules",
              "Root.Admin.Role.SetRoleModules",
              "Root.Admin.User",
              "Root.Admin.User.Read",
              "Root.Admin.User.Create",
              "Root.Admin.User.Update",
              "Root.Admin.User.Delete",
              "Root.Admin.User.ResetPassword",
              "Root.Admin.User.SetRoles",
              "Root.Admin.User.ReadRoles",
              "Root.Admin.User.ReadUserModules",
              "Root.Admin.User.SetUserModules",
              "Root.Admin.Module",
              "Root.Admin.Module.Read",

              "Root.CMS",
              "Root.CMS.Advert",
              "Root.CMS.Advert.Read",
              "Root.CMS.Advert.Create",
              "Root.CMS.Advert.Update",
              "Root.CMS.Advert.Delete",
              "Root.CMS.Article",
              "Root.CMS.Article.Read",
              "Root.CMS.Article.Create",
              "Root.CMS.Article.Update",
              "Root.CMS.Article.Delete",
              "Root.CMS.Bnaner",
              "Root.CMS.Bnaner.Read",
              "Root.CMS.Bnaner.Create",
              "Root.CMS.Bnaner.Update",
              "Root.CMS.Bnaner.Delete",
              "Root.CMS.Channel",
              "Root.CMS.Channel.Read",
              "Root.CMS.Channel.Create",
              "Root.CMS.Channel.Update",
              "Root.CMS.Channel.Delete",
              "Root.CMS.Gather",
              "Root.CMS.Gather.Read",
              "Root.CMS.Gather.Create",
              "Root.CMS.Gather.Update",
              "Root.CMS.Gather.Delete",
              "Root.CMS.Links",
              "Root.CMS.Links.Read",
              "Root.CMS.Links.Create",
              "Root.CMS.Links.Update",
              "Root.CMS.Links.Delete",
              "Root.CMS.Notice",
              "Root.CMS.Notice.Read",
              "Root.CMS.Notice.Create",
              "Root.CMS.Notice.Update",
              "Root.CMS.Notice.Delete",
              "Root.CMS.Tags",
              "Root.CMS.Tags.Read",
              "Root.CMS.Tags.Create",
              "Root.CMS.Tags.Update",
              "Root.CMS.Tags.Delete",
            ]
          }

        );
      }
      return failResponseWrap('未登录');
    });


    // 登出
    Mock.mock(`/api/${module}/logout`, () => {
      return successResponseWrap(null);
    });
    //修改密码
    Mock.mock(`/api/${module}/changePassword`, () => {
      return successResponseWrap('修改成功');
    });
    
  },
});
