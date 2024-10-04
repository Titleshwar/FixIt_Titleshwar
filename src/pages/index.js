import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import NewsletterModal from '@site/src/components/NewsletterModal'; // Import the modal component
import { FaBell, FaTwitter } from 'react-icons/fa'; // Import icons

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Updated HomepageHeader to accept setModalOpen as a prop
function HomepageHeader({ setModalOpen }) {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/compilers/intro">
            Compiler Frameworks and Toolchains ⏱️
          </Link>

          {/* Button Container for Notify and Follow buttons */}
          <div className={styles.buttonContainer}>
            {/* Bell button to open the modal */}
            <button
              onClick={() => setModalOpen(true)}
              className={clsx(styles.bellButton, 'button button--secondary')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaBell style={{ marginRight: '5px' }} />
              Notify
            </button>

            {/* Twitter follow button */}
            <Link 
              to="https://twitter.com/CompilerSutra" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={clsx(styles.twitterButton, 'button button--secondary')}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <FaTwitter style={{ marginRight: '5px' }} />
              Follow
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const handleModalClose = () => setModalOpen(false);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader setModalOpen={setModalOpen} /> {/* Pass setModalOpen here */}
      <main>
        <HomepageFeatures />
        {isModalOpen && <NewsletterModal onClose={handleModalClose} />} {/* Show the modal */}
      </main>
    </Layout>
  );
}
