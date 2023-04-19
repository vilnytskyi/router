export function render(
  jsx: Function,
  type: any,
  props: Record<string | number, unknown>,
  key: string
) {
  if (typeof type.cssInterop === "function" && !props.__skipCssInterop) {
    return type.cssInterop(jsx, type, props, key);
  } else {
    return jsx(type, props, key);
  }
}