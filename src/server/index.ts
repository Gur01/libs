import data from './data';

export interface AllLybraries {
    order: number;
    fullname: string;
    libraries: number;
}

export type Library = typeof data[0];

export const getRegions = (): AllLybraries[] => data.map(lib => ({
    order: lib.order,
    fullname: lib.fullname,
    libraries: lib.libraries
}));

export const getInfoById = (id: number):  Library | undefined => data.find(lib => lib.order === id);