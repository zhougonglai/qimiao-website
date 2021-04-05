import Header from '@components/common/Header';
import { Radio } from '@components/ui'
import { useSetState } from 'ahooks';
import c from 'classnames';
import s from '../styles/Index.module.scss'

export default function Home() {

  const [ state, setState ] = useSetState({
    checked: false
  })

  return (
    <>
      <Header />
      <main>
      </main>

      <footer>
      </footer>
    </>
  )
}
