import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');
export type DateToFormat = (value: string, format?: string) => string;
export const dateToFormat = (value, format = 'YYYY.MM.DD') => dayjs(value).format(format);
