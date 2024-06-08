type RemoveUnderscore<T extends string> = T extends `${infer L}_${infer R}`
    ? RemoveUnderscore<`${L}${Capitalize<R>}`>
    : T;

export type { RemoveUnderscore };