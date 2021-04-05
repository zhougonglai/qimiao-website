import c from 'classnames'
import s from './index.module.scss'

export default function Pagination({ className ,current, onChange, controls = false, total = 0 }) {


  return (<div className={c(s.content, className)}>
    {
      controls
      ? <>
          <button className={c(s.page, s.action)}
          onClick={() => onChange(1)}
          disabled={current === 1}>
            首页
          </button>
          <button className={c(s.page, s.action)}
          onClick={() => onChange(current - 1)}
          disabled={current === 1}>
            上一页
          </button>
        </>
      : null
    }
    {
      total >= 5
      ?
        <>
          {
            current <= 3
          ? Array(current + 1).fill(current).map((e, i) =>
            <button className={c(s.page, {[s.active]: current === i + 1 })} onClick={() => onChange(i + 1)}>
              {i + 1}
            </button>)
          :<>
            <button className={c(s.page)} onClick={() => onChange(1)}>1</button>
            <div className={c(s.placehodle)}>...</div>
          </>
          }
          {
            current > 3 && current < total - 2
            ? [current - 1, current, current + 1]
              .map(page =>
                <button
                className={c(s.page, {[s.active]: current === page})}
                onClick={() => onChange(page)}
                key={page}>
                  {page}
                </button>)
            : null
          }
          {
            current >= total - 2
            ? Array(total).fill(current)
            .map((p, i) => i + 1)
            .slice(current - 2, total)
            .map((p, i) =>
              <button key={p} className={c(s.page, {[s.active]: current === p})} onClick={() => onChange(p)}>
                {p}
              </button>)
            : <>
                <div className={c(s.placehodle)}>...</div>
                <button className={c(s.page)} onClick={() => onChange(total)}>{total}</button>
              </>
          }
        </>
      : total === 0
        ? null
        : Array(total)
        .fill(total)
        .map((p, i) => i + 1).map((page, i) =>
        <button key={page} className={c(s.page, {[s.active]: current === page})}>
          {page}
        </button>)
    }
    {
      controls
      ? <>
          <button className={c(s.page, s.action)}
          onClick={() => onChange(current+ 1)}
          disabled={current === total}>
            下一页
          </button>
          <button className={c(s.page, s.action)}
          onClick={() => onChange(total)}
          disabled={current === total}>
            末页
          </button>
        </>
      : null
    }
  </div>)
}
