import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

const Head = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="theme-color" content="#6236FF"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="msapplication-TileColor" content="#6236FF"/>
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="https://www.qimiao.com/favicon.ico?v=20210303214610" />
        <link rel="apple-touch-icon" href="https://www.qimiao.com/favicon.ico?v=20210303214610"/>
        <link rel="mask-icon" href="https://www.qimiao.com/favicon.ico?v=20210303214610" color="#00aba9"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0,viewport-fit=cover" />
        <link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/2.4.4/weui.min.css"/>
        <script type="text/javascript" src="https://res.wx.qq.com/open/libs/weuijs/1.2.1/weui.min.js"></script>
      </NextHead>
    </>
  )
}

export default Head
