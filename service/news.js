import fetch from '@utils/fetch';

export const getNews = (params, options) => fetch(`${process.env.NEXT_PUBLIC_APIPATH}/news?${new URLSearchParams(params)}`, options)
