import React from 'react';
export default function Avatar({
  url = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  size = 200,
}) {
  return (
    <div>
      <img src={url} size={size} />
    </div>
  );
}
