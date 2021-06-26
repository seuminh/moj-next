export default function debounceFn(func, timeout = 300){
  let inDebounce = null;
  return args => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(args), timeout);
  };
}