import React from 'react';
import '../mycourse_style/pythonContent.css';

function SQL() {
  return (
    <div className='python-content'>
      <div className='python-video-section'>
        <h2>SQL Videos</h2>
        <div className='python-main'>
          <div className='video-item'>
            <video controls width="250" height="200">
              <source src="/videos/pyVideo1.mp4" type="video/mp4" />
            </video>
            <p>Learn SQL basic</p>
          </div>
          <div className='video-item'>
            <video controls width="250" height="200">
              <source src="/videos/pyVideo1.mp4" type="video/mp4" />
            </video>
            <p>Learn CRUD operation</p>
          </div>
          <div className='video-item'>
            <video controls width="250" height="200">
              <source src="/videos/pyVideo1.mp4" type="video/mp4" />
            </video>
            <p>Learn Lists</p>
          </div>
          <div className='video-item'>
            <video controls width="250" height="200">
              <source src="/videos/pyVideo1.mp4" type="video/mp4" />
            </video>
            <p>Learn Linked List</p>
          </div>
        </div>
      </div>
      <div className='python-material-section'>
        <h2>SQL Learning Materials</h2>
        <div className='notes'>
          <div className='note-item'>
            <p>Download query Notes</p>
            <a href='/notes/array_notes.pdf' download>Download</a>
          </div>
          <div className='note-item'>
            <p>Download CRUD Notes</p>
            <a href='/notes/string_notes.pdf' download>Download</a>
          </div>
          <div className='note-item'>
            <p>Download List Notes</p>
            <a href='/notes/list_notes.pdf' download>Download</a>
          </div>
          <div className='note-item'>
            <p>Download Linked List Notes</p>
            <a href='/notes/linkedlist_notes.pdf' download>Download</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SQL;
