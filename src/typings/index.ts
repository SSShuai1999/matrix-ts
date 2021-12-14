// 从联合类型中取出具体类型
export type PickUnit<T, U> = T extends U ? T : never;

// 从联合类型中丢弃具体类型
export type DropUnit<T, U> = T extends U ? never : T;

// 判断 X、Y，返回 `true` 或 `false`
export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
	? true
	: false;

// 用于 `<object>.<prop>`
export type stringToStruct<T extends string> = T extends `${infer L}.${infer R}`
	? { [P in L]: R }
	: never;

// 根据两个对象，判断相同的属性
export type EqualsFromStruct<
	A extends Record<C, any>,
	B extends Record<C, any>,
	C extends string
> = Equals<A[C], B[C]>;

// Record => Readonly<Record<K, T>>
export type ReadonlyRecord<K extends string, T> = Readonly<Record<K, T>>;
