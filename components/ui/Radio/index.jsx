import cn from 'classnames';
import React from 'react';
import s from './index.module.scss';


function Radio({ onChange = () => {}, checked, disabled, children, ...props }) {
  return (
    <div className={cn(s.content, { checked })}>
      <label className={cn(s.label)}>
        <div className={cn(s.box)}>
          <input
          readOnly
          type='radio'
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={cn(s.radio)}
          {...props} />
          <div className={cn(s.mask)}>
            <div className={cn(s.check)}>
              <span>
                <div className={cn(s.line1)}></div>
                <div className={cn(s.line2)}></div>
              </span>
            </div>
          </div>
        </div>
        <div className={cn(s.ctx)}>
          {
            children
          }
        </div>
      </label>
    </div>
  );
}

export default Radio;
