import { findRepeatField } from '../utils';
import { firstCharToLocaleLowerCase } from '../utils/string';

const defaultModel = {
  state: {},
};

/**
 * @author stark.wang
 * @blog http://shudong.wang
 * The file enables `models` to import all models
 * in a one-shot manner. There should not be any reason to edit this file.
 */
const files = require.context('./models', false, /\.js$/);
const globalModels = {};
files.keys().forEach((key) => {
  const filename = key.replace(/(\.\/|\.js)/g, '');
  globalModels[filename] = files(key).default || defaultModel;
});

// 加载页面级 model
const pageModelsContext = require.context('../views', true, /(models\/(.*)|model)\.js$/);
const pageModels = {};
pageModelsContext.keys().forEach((filePath) => {
  // 去除首尾无用字符并分割
  const filePathSplitArr = filePath
    .slice(0, filePath.length - 3)
    .slice(2)
    .split('/');

  // 处理 pageName
  let pageName = '';
  let findPageNameSuccess = false;
  while (!findPageNameSuccess && filePathSplitArr.length) {
    // 首字母改为小写
    pageName += `/${firstCharToLocaleLowerCase(filePathSplitArr.shift())}`;
    // pageName 找完
    if (/(models|.model$)/.test(filePathSplitArr[0])) findPageNameSuccess = true;
  }
  pageName = pageName.slice(1);

  // 处理 modelName
  // Home/index.model.js | Home/home.model.js
  if (filePathSplitArr.length === 1) {
    const [model] = filePathSplitArr;
    const [modelName] = model.split('.');
    // 转换规则
    // Home/index.model.js -> home
    // Home/home.model.js -> home/home
    const filename = modelName === 'index' ? pageName : `${pageName}/${modelName}`;
    pageModels[filename] = pageModelsContext(filePath).default || defaultModel;
    return;
  }
  // Home/models/card.model.js | Home/models/course.js
  if (filePathSplitArr.length === 2) {
    // 如果以 .model 结尾，则去除
    const modelName = /.model$/.test(filePathSplitArr[1])
      ? filePathSplitArr[1].replace(/.model/g, '')
      : filePathSplitArr[1];
    const filename = `${pageName}/${modelName}`;
    pageModels[filename] = pageModelsContext(filePath).default || defaultModel;
  }
});
console.log('globalModels', globalModels);
console.log('pageModels', pageModels);

// 判断 globalModels 与 pageModels 名称冲突
findRepeatField(pageModels, globalModels).forEach((modelName) =>
  console.error(`${modelName} model 冲突！`),
);

export default { globalModels, pageModels };
