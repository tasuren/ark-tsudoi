import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header id="header" class="hero">
      <div class="hero-wallpaper">
        <img src="/img/hero/photo con6.jpg" />
        <img src="/img/hero/photo con7.jpg" />
        <img src="/img/hero/photo con8.jpg" />
        <img src="/img/hero/photo con1.png" />
        <img src="/img/hero/photo con2.png" />
        <img src="/img/hero/photo con4.jpg" />
        <img src="/img/hero/photo con5.png" />
        <img src="/img/hero/3.jpg" />
      </div>

      <div class="hero-content">
        {/* 壁紙はCSS（`custom.css`）の`wallpaper-slide`とある部分にて設定を行う。HTMLではない。 */}
        <h2 class="hero__title heroFont">{siteConfig.title}</h2>

        <Link
          class="button button--secondary button--lg"
          to="/docs/ase/join"
        >
          <img src="/img/logos/ASElogo2.png" class="button-icon" />
          <span class="button-text">ASEサーバー参加方法はこちら</span>
        </Link>

        <Link
          class="button button--secondary button--lg"
          to="/docs/asa/join"
        >
          <img src="/img/logos/ASAlogo2.png" class="button-icon" />
          <span class="button-text">ASAサーバー参加方法はこちら</span>
        </Link>

      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="このサーバーは日本最大のサーバーです。24時間365日ASE・ASAともに全てのマップを提供していますぜひ参加して下さい"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
