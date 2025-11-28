const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground">
      <div className="container">
        <p className="font-body text-xs text-center text-primary-foreground/60">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
