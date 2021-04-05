import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import c from 'classnames'
import s from './index.module.scss'

const routers = [
  {
    path: '/',
    label: '首页',
    match: {
      exat: true,
      query: '/'
    },
  },
  {
    path: '/announcement',
    label: '公告',
    match: {
      query: '/announcement'
    }
  },
  {
    path: '/infomation',
    label: '资讯',
    match: {
      query: '/infomation'
    }
  },
  {
    path: '/support',
    label: '游戏支持',
    match: {
      query: '/support'
    }
  },
  {
    path: '/about',
    label: '关于我们',
    match: {
      query: '/about'
    }
  },
]

export default function Header () {
  const router = useRouter()
  const [isModal, setModal] = useState(false);

  return (
    <header className={c("flex items-center justify-center", s.header)}>
      <div className={c(s.block)}>
        <nav role="navigation" className={c(s.nav)}>
          <div className="flex justify-center items-center">
            <img width="133" height="40" className="logo" src="/img/logo@1x.png" srcSet="/img/logo@2x.png 2x"
              alt="奇妙加速器" />
            <img width="36" height="15" className="tag ml-2" src="/img/logo-tag@1x.png"
              srcSet="/img/logo-tag@2x.png 2x" alt="免费" />
          </div>
          <ul className="flex flex-1 items-center justify-between">
            {
              routers.map((route) =>
              <li key={route.path}
              className={c("text-center flex-1 text-white text-opacity-50 hover:text-opacity-100 transition-opacity",
              {[s.active]: route.match.exat ? router.route === route.match.query : router.route.includes(route.match.query) })}>
                <Link href={route.path}>
                  <a>{route.label}</a>
                </Link>
              </li>)
            }
          </ul>
        </nav>

        <div className="flex-1"></div>

        <div id="user-info">
          <button id="register" onClick={() => setModal(true)}>
            登录
          </button>
        </div>
      </div>
    </header>
  )
}
