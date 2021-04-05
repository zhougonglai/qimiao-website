import c from 'classnames'
import useSWR from 'swr'
import Header from '@components/common/Header'
import Pagination from '@components/ui/Pagination'

import s from './index.module.scss'
import Link from 'next/link'

export default function Infomation () {

  const { data } = useSWR(`${process.env.NEXT_PUBLIC_APIPATH}/news?${new URLSearchParams({
    class_type: 0,
    size: 5
  })}`)

  return (<>
      <Header />
      <main>
        <section className={c(s.title)}>
          <img src="/img/infomation/title@1x.png" width="2560" height="320" className={c('object-cover')}/>
        </section>
        <section className={c(s.infomation, 'flex justify-center py-5')}>
          <div className={c(s.block)}>
            <div className={c(s.content)}>
              <nav aria-label="breadcrumb">
                <ol className={c(s.breadcrumb)}>
                  <li className={c(s.item, 'transition-colors')}>
                    <a href="/">首页</a>
                  </li>
                  <li className={c(s.item, s.active)} aria-current="page">
                    游戏资讯
                  </li>
                </ol>
              </nav>

              <ul className={c(s.news)}>
                {
                  data?.data?.list?.map(news =>
                    <li key={news.id} className={c(s.item)}>
                      <Link href={`/infomation/${news.id}`}>
                        <a className="h-full w-full flex flex-col justify-between">
                          <div className={c(s.title)}>
                            {news.title}
                          </div>
                          <p className={c(s.desc)}>
                            {news.summary}
                          </p>
                        </a>
                      </Link>
                    </li>)
                }
              </ul>

              <Pagination current={1} total={data?.data?.total} controls className={c('my-5')}/>
            </div>
          </div>
        </section>
      </main>
    </>)
}
