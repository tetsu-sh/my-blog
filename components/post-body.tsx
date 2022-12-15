import markdownStyles from "./markdown-styles.module.css";

import React from "react";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="post">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
export default PostBody;
