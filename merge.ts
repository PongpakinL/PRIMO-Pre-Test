function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let i: number = 0,
        j: number = collection_2.length - 1,
        k: number = 0;
    const result: number[] = [];
    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        const a: number = i < collection_1.length ? collection_1[i] : Infinity;
        const b: number = j >= 0 ? collection_2[j] : Infinity;
        const c: number = k < collection_3.length ? collection_3[k] : Infinity;

        if (a <= b && a <= c) {
            result.push(a);
            i++;
        } else if (b <= a && b <= c) {
            result.push(b);
            j--;
        } else {
            result.push(c);
            k++;
        }
    }
    return result;
}