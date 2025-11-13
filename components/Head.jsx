import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Pratham Sharma is a passionate fullstack software developer, leveraging web development skills to create impactful applications."
      />
      <meta
        name="keywords"
        content="pratham sharma, vs-code portfolio, vscode-portfolio, pratham sharma portfolio, web developer portfolio, full stack developer"
      />
      <meta
        name="keywords"
        content="software development, software developer portfolio, web developer, full stack developer, React developer, Node.js, software engineering, agile development, coding portfolio, programming projects"
      />


      <meta property="og:title" content="Pratham Sharma's Portfolio" />
      <meta
        property="og:description"
        content="A full stack developer crafting innovative solutions using modern web technologies."
      />
      <meta property="og:image" content="https://imgur.com/a/OAcRzgh" />
      
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Pratham Sharma',
};
