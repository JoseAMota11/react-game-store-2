const Link = ({ to, className, children }) => {
  const preventReload = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', to);
    const navigationEvent = new PopStateEvent('navigate');
    window.dispatchEvent(navigationEvent);
  };

  return (
    <a className={className} href={to} onClick={preventReload}>
      {children}
    </a>
  );
};

export default Link;
