import React from 'react';
import './Post.css';
const Post = () => {
  return (
    <>
      <div className="post">
        <div className="post-img">
          <img
            src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="content">
          <h2 className="title">Fknjldflsnfmoprsmv ererlkrjvneoirdkmvklimv fkjn</h2>
          <p className="info">
            <a href="" className="author">
              Kene ojukwu
            </a>
            <time>2023-10-30</time>
          </p>
          <p className="summary">jknlvdnfmvdlk dfjklnvdflkmv vfjklnmvlkdf</p>
        </div>
      </div>

      <div className="post">
        <div className="post-img">
          <img
            src="https://plus.unsplash.com/premium_photo-1663852297654-56d979cf72d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="content">
          <h2 className="title">Fknjldflsnfmoprsmv ererlkrjvneoirdkmvklimv fkjn</h2>
          <p className="info">
            <a href="" className="author">
              Kene ojukwu
            </a>
            <time>2023-10-30</time>
          </p>
          <p className="summary">jknlvdnfmvdlk dfjklnvdflkmv vfjklnmvlkdf</p>
        </div>
      </div>
    </>
  );
};

export default Post;
