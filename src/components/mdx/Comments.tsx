"use client";

import Giscus from "@giscus/react";

const Comments = () => {
  return (
    <Giscus
      id="comments"
      repo="shawbit/Blog"
      repoId="R_kgDOM4DveQ"
      category="Announcements"
      categoryId="DIC_kwDOM4Dvec4CkZXN"
      mapping="pathname"
      inputPosition="top"
      theme="dark_dimmed"
      lang="zh-CN"
      loading="lazy"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
    />
  );
};

export default Comments;
