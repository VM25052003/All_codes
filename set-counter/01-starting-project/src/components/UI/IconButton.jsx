import { memo } from 'react';
import { log } from '../../log.js';

/* Simply using memo here won't work. Looking closely at props received, children is text received on button that won't change. Icon prop receives pointer to a component name, and translates it to jsx code, but they are not dynamic, as no defined inside Counter component, but imported from other files. But then rest of props on buttons, means the increment/ decrementHandler, the nested functions. So would be recreated every time. Idea is to useCallback() there*/
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);
  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
})


export default IconButton
