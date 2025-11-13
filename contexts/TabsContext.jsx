import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const TabsContext = createContext();

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within TabsProvider');
  }
  return context;
};

export const TabsProvider = ({ children }) => {
  const router = useRouter();
  
  // Default tabs - 6 tabs open by default
  const defaultTabs = [
    { icon: '/react_icon.svg', filename: 'home.jsx', path: '/', closeable: false },
    { icon: '/html_icon.svg', filename: 'about.html', path: '/about', closeable: true },
    { icon: '/css_icon.svg', filename: 'contact.css', path: '/contact', closeable: true },
    { icon: '/json_icon.svg', filename: 'experience.json', path: '/experience', closeable: true },
    { icon: '/yaml_icon.svg', filename: 'education.yaml', path: '/education', closeable: true },
    { icon: '/pdf_icon.svg', filename: 'resume.pdf', path: '/resume', closeable: true }
  ];

  const [tabs, setTabs] = useState(defaultTabs);

  const allPages = [
    { icon: '/react_icon.svg', filename: 'home.jsx', path: '/', closeable: false },
    { icon: '/html_icon.svg', filename: 'about.html', path: '/about', closeable: true },
    { icon: '/css_icon.svg', filename: 'contact.css', path: '/contact', closeable: true },
    { icon: '/js_icon.svg', filename: 'projects.js', path: '/projects', closeable: true },
    { icon: '/json_icon.svg', filename: 'experience.json', path: '/experience', closeable: true },
    { icon: '/yaml_icon.svg', filename: 'education.yaml', path: '/education', closeable: true },
    { icon: '/pdf_icon.svg', filename: 'resume.pdf', path: '/resume', closeable: true },
    { icon: '/markdown_icon.svg', filename: 'github.md', path: '/github', closeable: true },
    { icon: '/vscode_icon.svg', filename: 'settings.json', path: '/settings', closeable: true },
  ];

  // Open tab when navigating to a page
  useEffect(() => {
    const currentPath = router.pathname;
    const pageExists = allPages.find(p => p.path === currentPath);
    
    if (pageExists) {
      setTabs(prevTabs => {
        // Check if tab is already open
        const tabExists = prevTabs.find(t => t.path === currentPath);
        if (!tabExists) {
          // If we have 6 or more tabs, remove the oldest closeable tab
          let newTabs = [...prevTabs];
          if (newTabs.length >= 6) {
            // Find the first closeable tab (not home.jsx) and remove it
            const closeableIndex = newTabs.findIndex(t => t.closeable);
            if (closeableIndex !== -1) {
              newTabs.splice(closeableIndex, 1);
            }
          }
          // Add new tab
          return [...newTabs, pageExists];
        }
        return prevTabs;
      });
    }
  }, [router.pathname]);

  const closeTab = (pathToClose) => {
    // Don't close if it's the home tab
    if (pathToClose === '/') return;

    setTabs(prevTabs => {
      const filtered = prevTabs.filter(tab => tab.path !== pathToClose);
      
      // If we're closing the active tab, navigate to the previous tab or home
      if (router.pathname === pathToClose) {
        const closingIndex = prevTabs.findIndex(t => t.path === pathToClose);
        const newActiveTab = prevTabs[closingIndex - 1] || prevTabs[0];
        router.push(newActiveTab.path);
      }
      
      return filtered;
    });
  };

  const openTab = (page) => {
    const pageInfo = allPages.find(p => p.path === page.path);
    if (pageInfo) {
      setTabs(prevTabs => {
        const tabExists = prevTabs.find(t => t.path === page.path);
        if (!tabExists) {
          return [...prevTabs, pageInfo];
        }
        return prevTabs;
      });
      router.push(page.path);
    }
  };

  return (
    <TabsContext.Provider value={{ tabs, closeTab, openTab, allPages }}>
      {children}
    </TabsContext.Provider>
  );
};

