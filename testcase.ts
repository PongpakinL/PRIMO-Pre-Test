import { merge } from './merge';

describe('merge function', () => {
    it('should merge three sorted arrays correctly', () => {
        const collection_1: number[] = [1, 3, 5];
        const collection_2: number[] = [7, 6, 5, 4, 3, 0];
        const collection_3: number[] = [6, 7, 8, 9];
        
        const expectedResult: number[] = [...collection_1, ...collection_2, ...collection_3].sort((a, b) => a - b);
        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual(expectedResult);
    });

    it('should handle empty arrays correctly', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [7, 6, 5, 4, 3, 0];
        const collection_3: number[] = [];

        const expectedResult: number[] = [...collection_1, ...collection_2, ...collection_3].sort((a, b) => a - b);
        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual(expectedResult);
    });

    // Add more test cases as needed
});
