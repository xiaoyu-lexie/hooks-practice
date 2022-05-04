import React from 'react';

const Link = ({className, href, children}) => {

  const onClickHandler = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({}, '', href);

    // this is to tell React that url has just changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <div>
      <a onClick={onClickHandler} className={className} href={href}>
        {children}
      </a>
    </div>
  )
};

export default Link;