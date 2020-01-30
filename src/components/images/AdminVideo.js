import React from 'react';
import Video from '../../images/admindemo.mp4';

const AdminVideo = () => (
  // eslint-disable-next-line
  <video id="admin-video" controls autoplay muted loop width="100%"> 
    <source src={Video} type="video/mp4" />
  </video>
);

export default AdminVideo;
