const dom = weex.requireModule('dom')

export function getBoundingClientRectBase(element, func) {
  dom && dom.getComponentRect(element, func)
}

export function getBoundingClientRect(element, func, delay = 50) {
  setTimeout(() => dom && dom.getComponentRect(element, func), delay)
}

export function getBoundingClientRectAsync(element) {
  return new Promise(resolve => {
    setTimeout(() => dom && dom.getComponentRect(element, res => res.result && resolve(res.size)), 0)
  })
}
