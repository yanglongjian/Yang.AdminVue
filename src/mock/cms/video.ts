

import Mock from 'mockjs';
import setupMock, {
  successResponseWrap,
} from '../setup-mock';
/**
 * 视频管理
 */
const module = 'video'

let data = Mock.mock({
  "rows": [
    { "hash_id": "Aox276Zp5Qm7Vz8Z", "uid": 1166042, "is_vertical": 0, "view_num": "3.1万", "video_str_duration": "112:24", "duration": 6743, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/07/06/838929089a6e48245e566196c8518d3d.png", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/07/06/838929089a6e48245e566196c8518d3d.png", "player": "https://v.douyu.com/show/Aox276Zp5Qm7Vz8Z", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=Aox276Zp5Qm7Vz8Z", "title": "2021-07-06 直播录像", "content": "", "is_short": 0, "comments": "5", "barrages": "6", "post_id": "108299731625545562", "create_time": 1625545561, "ishide": false, "resolution": ["high", "normal"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=22504385\u0026source=1" },
    { "hash_id": "Aox276ZpQ187Vz8Z", "uid": 1166042, "is_vertical": 0, "view_num": "4.4万", "video_str_duration": "20:60", "duration": 1259, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/07/06/de3ef825464dcd6cc02434a521784ef7.png", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/07/06/de3ef825464dcd6cc02434a521784ef7.png", "player": "https://v.douyu.com/show/Aox276ZpQ187Vz8Z", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=Aox276ZpQ187Vz8Z", "title": "2021-07-06 直播录像", "content": "", "is_short": 0, "comments": "12", "barrages": "10", "post_id": "707303441625544752", "create_time": 1625544745, "ishide": false, "resolution": ["high", "normal"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=22504041\u0026source=1" },
    { "hash_id": "GnzXvbRZnalv462l", "uid": 1166042, "is_vertical": 0, "view_num": "2.1万", "video_str_duration": "18:43", "duration": 1122, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/28/bf5955731bf010f11aedaa1a9ef9ccb8.png", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/28/bf5955731bf010f11aedaa1a9ef9ccb8.png", "player": "https://v.douyu.com/show/GnzXvbRZnalv462l", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=GnzXvbRZnalv462l", "title": "2021-06-28 直播录像", "content": "", "is_short": 0, "comments": "6", "barrages": "392", "post_id": "123109021624868492", "create_time": 1624868489, "ishide": false, "resolution": ["super", "high", "normal"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=22288560\u0026source=1" }, { "hash_id": "ERALvEaprDbv1Vw0", "uid": 1166042, "is_vertical": 0, "view_num": "2.0万", "video_str_duration": "19:41", "duration": 1180, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/21/0e68d37383472131fe8270e1026a44fd.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/21/2eef1e3622336aa8c23f91805c9d9ee1.jpg", "player": "https://v.douyu.com/show/ERALvEaprDbv1Vw0", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=ERALvEaprDbv1Vw0", "title": "2021-06-21 直播录像", "content": "", "is_short": 0, "comments": "9", "barrages": "3522", "post_id": "689047931624289582", "create_time": 1624289566, "ishide": false, "resolution": ["high", "normal"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=22098965\u0026source=1" }, { "hash_id": "jwzOvpOqjNLWZVRm", "uid": 1166042, "is_vertical": 0, "view_num": "5466", "video_str_duration": "11:11", "duration": 670, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/20/febd0b3e7ad42de040a3f0b82b38b329.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/20/d27a6f9adb625bf8e5f556562c6379cf.jpg", "player": "https://v.douyu.com/show/jwzOvpOqjNLWZVRm", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=jwzOvpOqjNLWZVRm", "title": "2021-06-20 直播录像", "content": "", "is_short": 0, "comments": "1", "barrages": "358", "post_id": "564294741624120022", "create_time": 1624120020, "ishide": false, "resolution": ["high", "normal", "super"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=22036678\u0026source=1" }, { "hash_id": "worZv0kG9ajWJBk3", "uid": 1166042, "is_vertical": 0, "view_num": "4742", "video_str_duration": "96:42", "duration": 5801, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/19/2c66c3658b1811264ef924861b42e1be.png", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/19/2c66c3658b1811264ef924861b42e1be.png", "player": "https://v.douyu.com/show/worZv0kG9ajWJBk3", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=worZv0kG9ajWJBk3", "title": "2021-06-19 直播录像", "content": "", "is_short": 0, "comments": "1", "barrages": "1261", "post_id": "447403341624039771", "create_time": 1624039751, "ishide": false, "resolution": ["super", "high", "normal"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=22012670\u0026source=1" }, { "hash_id": "JmbBMkZQyJ0740XA", "uid": 1166042, "is_vertical": 0, "view_num": "9782", "video_str_duration": "40:33", "duration": 2432, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/17/dad1c57d9e2842175d1e19b3cf96087e.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/17/20d0c772a21cecf1cfc08d145f14c667.jpg", "player": "https://v.douyu.com/show/JmbBMkZQyJ0740XA", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=JmbBMkZQyJ0740XA", "title": "2021-06-17 直播录像", "content": "", "is_short": 0, "comments": "1", "barrages": "3327", "post_id": "298171111623862922", "create_time": 1623862920, "ishide": false, "resolution": ["super", "high", "normal"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21957053\u0026source=1" }, { "hash_id": "Kp1QM84Oz3JMk4bj", "uid": 1166042, "is_vertical": 0, "view_num": "1.4万", "video_str_duration": "119:60", "duration": 7199, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/17/a455dee92a84629b21bbc89cea614e34.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/17/f899fba5eed53427d9d46ba6b4983159.jpg", "player": "https://v.douyu.com/show/Kp1QM84Oz3JMk4bj", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=Kp1QM84Oz3JMk4bj", "title": "2021-06-17 直播录像", "content": "", "is_short": 0, "comments": "3", "barrages": "7338", "post_id": "623530891623862022", "create_time": 1623862006, "ishide": false, "resolution": ["super", "high", "normal"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21956720\u0026source=1" }, { "hash_id": "2Bj8vGmRqJQMObnd", "uid": 1166042, "is_vertical": 0, "view_num": "9800", "video_str_duration": "69:16", "duration": 4155, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/15/a0421f37de69245340748aa174da6973.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/15/a019ee372afd132bd377018e7064468c.jpg", "player": "https://v.douyu.com/show/2Bj8vGmRqJQMObnd", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=2Bj8vGmRqJQMObnd", "title": "2021-06-15 直播录像", "content": "", "is_short": 0, "comments": "3", "barrages": "6869", "post_id": "309838261623764281", "create_time": 1623764265, "ishide": false, "resolution": ["high", "normal"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21923183\u0026source=1" }, { "hash_id": "8pa9v55dLkpvVrqA", "uid": 1166042, "is_vertical": 0, "view_num": "1.4万", "video_str_duration": "90:27", "duration": 5426, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/14/fc38f684119d84ecb0c0665e4d59e218.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/14/93d71c7fe39d1823b03656e8248d3b40.jpg", "player": "https://v.douyu.com/show/8pa9v55dLkpvVrqA", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=8pa9v55dLkpvVrqA", "title": "2021-06-14 直播录像", "content": "", "is_short": 0, "comments": "0", "barrages": "8481", "post_id": "461732241623607682", "create_time": 1623607666, "ishide": false, "resolution": ["high", "normal", "super"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21871829\u0026source=1" }, { "hash_id": "Aox2760da2VWVz8Z", "uid": 1166042, "is_vertical": 0, "view_num": "6144", "video_str_duration": "78:56", "duration": 4735, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/12/0e81c1292acc31068b8ffd64029d8665.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/12/67cdc958c489092c16b224bd9337605e.jpg", "player": "https://v.douyu.com/show/Aox2760da2VWVz8Z", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=Aox2760da2VWVz8Z", "title": "2021-06-12 直播录像", "content": "", "is_short": 0, "comments": "4", "barrages": "2950", "post_id": "766628391623512642", "create_time": 1623512640, "ishide": false, "resolution": ["normal", "super", "high"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21842385\u0026source=1" }, { "hash_id": "ZB5Kv9bdbpl7a93x", "uid": 1166042, "is_vertical": 0, "view_num": "8627", "video_str_duration": "39:08", "duration": 2347, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/12/62b38acaa8a8811507da10adcb5667bf.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/12/1b39dc4d2b2e5773b6f74a35e9033f06.jpg", "player": "https://v.douyu.com/show/ZB5Kv9bdbpl7a93x", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=ZB5Kv9bdbpl7a93x", "title": "2021-06-12 直播录像", "content": "", "is_short": 0, "comments": "2", "barrages": "2919", "post_id": "381657081623431012", "create_time": 1623431011, "ishide": false, "resolution": ["high", "normal", "super"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21818649\u0026source=1" }, { "hash_id": "GnzXvbRLLelv462l", "uid": 1166042, "is_vertical": 0, "view_num": "8021", "video_str_duration": "119:60", "duration": 7199, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/11/175211b176e4ca0458b953f7297332d9.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/11/61c144b9ce2759a7d3296cb75df719b5.jpg", "player": "https://v.douyu.com/show/GnzXvbRLLelv462l", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=GnzXvbRLLelv462l", "title": "2021-06-11 直播录像", "content": "", "is_short": 0, "comments": "2", "barrages": "7045", "post_id": "512761091623345573", "create_time": 1623345556, "ishide": false, "resolution": ["high", "normal", "super"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21790216\u0026source=1" }, { "hash_id": "Kg1VWROLLVrvGbNA", "uid": 1166042, "is_vertical": 0, "view_num": "5404", "video_str_duration": "42:52", "duration": 2571, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/11/749b7ece7a80e02af1907a32ee6c3e06.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/11/2d28ef7ec0effd7d26befc375cafca4b.jpg", "player": "https://v.douyu.com/show/Kg1VWROLLVrvGbNA", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=Kg1VWROLLVrvGbNA", "title": "2021-06-11 直播录像", "content": "", "is_short": 0, "comments": "2", "barrages": "4521", "post_id": "851050461623344704", "create_time": 1623344701, "ishide": false, "resolution": ["high", "normal", "super"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21789719\u0026source=1" }, { "hash_id": "a4Jj7lzryJbWDk01", "uid": 1166042, "is_vertical": 0, "view_num": "1.5万", "video_str_duration": "120:09", "duration": 7208, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/10/7d7fe92a769f4772b9790cb63d79aff4.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/10/44819419d7d4436423d7b546f21185f0.jpg", "player": "https://v.douyu.com/show/a4Jj7lzryJbWDk01", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=a4Jj7lzryJbWDk01", "title": "2021-06-10 直播录像", "content": "", "is_short": 0, "comments": "17", "barrages": "7643", "post_id": "208247701623336604", "create_time": 1623336601, "ishide": false, "resolution": ["high", "normal", "super"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21786231\u0026source=1" }, { "hash_id": "DO84vroPKO07edGr", "uid": 1166042, "is_vertical": 0, "view_num": "7504", "video_str_duration": "23:14", "duration": 1393, "type": "video", "thumb": "https://sta-op.douyucdn.cn/vod-cover/2021/06/09/fbcf3d0c704e6ee87625874fbf0efd7a.jpg", "thumb_ver": "https://sta-op.douyucdn.cn/vod-cover/2021/06/09/00c1893b492b431858b18a538e88d95b.jpg", "player": "https://v.douyu.com/show/DO84vroPKO07edGr", "from": "斗鱼", "swf": "https://vswf.douyucdn.cn/share/vshare.swf?vid=DO84vroPKO07edGr", "title": "2021-06-09 直播录像", "content": "", "is_short": 0, "comments": "5", "barrages": "1099", "post_id": "130488251623171272", "create_time": 1623171270, "ishide": false, "resolution": ["high", "normal", "super"], "like_num": 0, "tag2": 155, "scheme_url": "douyuapp://vodSpec?sid=21740596\u0026source=1" }],
  total: 24
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