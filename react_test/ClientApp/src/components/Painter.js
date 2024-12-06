import React, { useState, useEffect } from 'react';


function painter_box(props) {
  return (
    <canvas id="myCanvas" width="200" height="200" style= {{ border: '1px solid black' }}> </canvas>
  );
}

export function Painter(props) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get_canvas_content();
  }, []);

  async function get_canvas_content() {
    const response = await fetch('get_canvas_content');
    const data = await response.json();
  }

  let contents = loading ?
    <p><em>Loading your image ... </em></p>
    : painter_box();


  return (
    <div>
      <h1>Painter</h1>
      {contents}
    </div>
  );
}

