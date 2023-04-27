/**
 * 状态
 */
export const statusOptions =[
    {
      label: '正常',
      value: 0,
      other: "green",
    },
    {
      label: '禁用',
      value: 1,
      other: "orange",
    },
  ];

  /**
   * Boolean值选项
   */
  export const booleanOptions =[
    {
      label: '是',
      value: true,
      other: "green",
    },
    {
      label: '否',
      value: false,
      other: "orange",
    },
  ];

  /**
   * 模块访问类型
   */
  export const accessTypeOptions =[
    {
      label: '匿名访问',
      value: 0,
      other: "green",
    },
    {
      label: '登录访问',
      value: 1,
      other: "blue",
    },
    {
      label: '角色访问',
      value: 2,
      other: "orange",
    },
  ];


  /**
   * 文件类型列表
   */
  export const fileTypeList = [
    { name: "全部", value: 0, menuIcon: "menu-file", icon: "icon-stamp" },
    { name: "图片", value: 1, menuIcon: "file-image", icon: "icon-file-image" },
    { name: "文档", value: 2, menuIcon: "file-txt", icon: "icon-file" },
    { name: "视频", value: 3, menuIcon: "file-video", icon: "icon-video-camera" },
    { name: "音频", value: 4, menuIcon: "file-music", icon: "icon-file-audio" },
    { name: "其他", value: 5, menuIcon: "file-other", icon: "icon-bulb" }
  ]
  // 图片类型
  export const imageTypeList = ["jpg", "png", "gif", "jpeg"]
  // WPS、Office文件类型
  const officeFileType = ["ppt", "pptx", "doc", "docx", "xls", "xlsx"]
  // 文件类型图标 Map 映射
  export const fileExtendNameIconMap = {
    mp3: "file-music",
    mp4: "file-video",
    dir: "file-dir",
    ppt: "file-ppt",
    doc: "file-wps",
    docx: "file-wps",
    xls: "file-excel",
    xlsx: "file-excel",
    txt: "file-txt",
    rar: "file-rar",
    zip: "file-zip",
    html: "file-html",
    css: "file-css",
    js: "file-js",
    other: "file-other" // 未知文件
  }