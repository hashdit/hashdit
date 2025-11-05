import React from 'react';
import Head from '@docusaurus/Head';

export default function SeoMeta({title, description, image}) {
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
    </Head>
  );
}