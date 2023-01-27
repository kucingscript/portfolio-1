function Social() {
  const links = [
    {
      href: "https://www.instagram.com/kucingscript/",
      icon: "bx bxl-instagram",
      delay: 300,
    },
    {
      href: "https://www.linkedin.com/in/ar-rasyid-sarifullah-71b1b11b1/?locale=ms_MY",
      icon: "bx bxl-linkedin",
      delay: 400,
    },
    {
      href: "https://github.com/rasyidzkun",
      icon: "bx bxl-github",
      delay: 500,
    },
  ];

  return (
    <div className="home__social">
      {links.map((item, index) => {
        return (
          <a
            href={item.href}
            className="home__social-icon"
            target={"_blank"}
            key={index}
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <i className={item.icon}></i>
          </a>
        );
      })}
    </div>
  );
}

export default Social;
