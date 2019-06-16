const getCtx = (selector) => {
  const pages = getCurrentPages();
  const ctx = pages[pages.length - 1];

  const componentCtx = ctx.selectComponent(selector);

  if (!componentCtx) {
    console.error('无法找到对应的组件，请按文档说明使用组件');
    return null;
  }
  return componentCtx;
}

export const stopReachBottom = (selector = '#load') => {
  getCtx(selector).stopReachBottom()
}

export const stopPullRefresh = (selector = '#load') => {
  getCtx(selector).stopPullRefresh()
}

export const setNoMore = (selector = '#load') => {
  getCtx(selector).setNoMore()
}