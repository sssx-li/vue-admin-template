import { globalConfig } from '@/config';
const catchName = `${globalConfig.projectName}_${process.env.BASE_ENV}`;

export const tokenKey = `${catchName}_token`;
