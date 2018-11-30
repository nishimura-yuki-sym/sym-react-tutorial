export function bindAll(instance) {
  // インスタンスのメソッドをすべてbindする
  const methods = getProtoMethodNames(instance);
  methods.forEach((methodName) => {
    instance[methodName] = instance[methodName].bind(instance);
  });
}

const getProtoMethodNames = (instance) => {
  // インスタンスに定義されたメソッド名を取得
  const proto = Object.getPrototypeOf(instance);
  return Object.getOwnPropertyNames(proto).filter((name) => {
    return name !== 'constructor' && typeof proto[name] === 'function';
  });
};
