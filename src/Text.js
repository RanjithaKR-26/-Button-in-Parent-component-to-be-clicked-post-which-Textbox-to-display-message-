import React from 'react';
function Text({ date }) {
  return (
    <>
      <input type="text" value={date} onChange={e => e.target.value} />
    </>
  );
}
export default Text;
