const handleLogout = () => {
    fetch('/api/logout')
      .then(() => {
        window.location.replace("/")
      });
}
