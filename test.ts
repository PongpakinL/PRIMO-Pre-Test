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

const collection_1: number[] = [1, 3, 5];
const collection_2: number[] = [7, 6, 5, 4, 3, 0];
const collection_3: number[] = [6, 7, 8, 9];

console.log(merge(collection_1, collection_2, collection_3));
console.log(
    JSON.stringify(merge(collection_1, collection_2, collection_3)) ===
        JSON.stringify([...collection_1, ...collection_2, ...collection_3].sort())
);
