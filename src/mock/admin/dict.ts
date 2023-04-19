import Mock from 'mockjs';
import setupMock, {
    successResponseWrap,
} from '../setup-mock';
/**
 * 数据字典
 */
 const module = 'dict'

let data = [
  {
      "id":1,
      "parentId":0,
      "name":"币种符号",
      "code":"CurrencySymbol",
      "value":"$",
      "type":0,
      "orderCode":0,
      "status":0,
      "remark":"币种符号,如￥,$",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":2,
      "parentId":0,
      "name":"币种",
      "code":"Symbol",
      "value":"USD",
      "type":0,
      "orderCode":1,
      "status":0,
      "remark":"币种单位",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":3,
      "parentId":0,
      "name":"团队等级",
      "code":"Level",
      "value":"3",
      "type":0,
      "orderCode":2,
      "status":0,
      "remark":"注意:修改团队等级层级,需要同时去修改对应的会员等级返佣配置",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":4,
      "parentId":0,
      "name":"采集页码",
      "code":"Gather",
      "value":"1",
      "type":0,
      "orderCode":3,
      "status":0,
      "remark":"视频采集的起始页码",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":5,
      "parentId":0,
      "name":"注册开关",
      "code":"RegisterSwitch",
      "value":"true",
      "type":0,
      "orderCode":5,
      "status":0,
      "remark":"填写true或false（1或0）开放关闭注册功能",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":6,
      "parentId":0,
      "name":"相同IP注册开关",
      "code":"RegisterIP",
      "value":"false",
      "type":0,
      "orderCode":6,
      "status":0,
      "remark":"填写true或false（1或0）开放关闭相同IP注册功能",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":7,
      "parentId":0,
      "name":"注册邀请码必填",
      "code":"RegisterCode",
      "value":"false",
      "type":0,
      "orderCode":7,
      "status":0,
      "remark":"填写true或false（1或0）注册是否必须填写邀请码",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":8,
      "parentId":0,
      "name":"默认邀请码",
      "code":"InviteCode",
      "value":"Th7zFW",
      "type":0,
      "orderCode":8,
      "status":0,
      "remark":"请创建顶级代理后填写键值",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":9,
      "parentId":0,
      "name":"默认等级有效天数",
      "code":"ValidDays",
      "value":"2",
      "type":0,
      "orderCode":9,
      "status":0,
      "remark":"新用户默认等级的有效天数,过期必须升级",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":10,
      "parentId":0,
      "name":"注册赠送奖励",
      "code":"RegisterReward",
      "value":"1",
      "type":0,
      "orderCode":10,
      "status":0,
      "remark":"新用户注册的奖励金额",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":11,
      "parentId":0,
      "name":"直推有效用户奖励金额",
      "code":"ValidUserReward",
      "value":"5",
      "type":0,
      "orderCode":10,
      "status":0,
      "remark":"邀请的下级用户充值金额&升级会员则视为有效用户",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":12,
      "parentId":0,
      "name":"签到奖励范围",
      "code":"SignReward",
      "value":"0.1|0.5",
      "type":0,
      "orderCode":11,
      "status":0,
      "remark":"签到奖励范围用|分割",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":13,
      "parentId":0,
      "name":"新用户免手续费提现次数",
      "code":"FreeWithdrawTimes",
      "value":"3",
      "type":0,
      "orderCode":12,
      "status":0,
      "remark":"新用户注册免费提现次数",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":14,
      "parentId":0,
      "name":"购买VIP等级返佣设置",
      "code":"VipRebate",
      "value":"0.05|0.03|0.02",
      "type":0,
      "orderCode":13,
      "status":0,
      "remark":"注意返佣的层级设置和团队等级设置的数量要一致,用|分开",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":15,
      "parentId":0,
      "name":"注册方式",
      "code":"RegisterType",
      "value":"email|mobile",
      "type":0,
      "orderCode":14,
      "status":0,
      "remark":"email|mobile,请勿写错,两种方式用|分开",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":16,
      "parentId":0,
      "name":"默认区号",
      "code":"DefaultAreaCode",
      "value":"86",
      "type":0,
      "orderCode":15,
      "status":0,
      "remark":"手机注册默认区号",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":17,
      "parentId":0,
      "name":"超级验证码",
      "code":"VerifyCode",
      "value":"999999",
      "type":0,
      "orderCode":16,
      "status":0,
      "remark":"手机注册超级验证码",
      "createdTime":"2023-04-13 17:06:37",
      "children":null
  },
  {
      "id":18,
      "parentId":0,
      "name":"默认语言",
      "code":"DefaultCulture",
      "value":"en",
      "type":0,
      "orderCode":17,
      "status":0,
      "remark":"文章公告的默认语言",
      "createdTime":"2023-04-14 11:36:04",
      "children":null
  },
  {
      "id":19,
      "parentId":0,
      "name":"会员到期本金退还",
      "code":"VipReturnAmount",
      "value":"1",
      "type":0,
      "orderCode":18,
      "status":0,
      "remark":"填写true或false（1或0）会员到期是否退还本金",
      "children":null
  }
];

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