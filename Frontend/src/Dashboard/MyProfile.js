import React, { useState, useEffect } from 'react';
import '../Dash_Style/MyProfile.css';
import { imageDB, txtDB } from '../firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { getDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import { v4 } from 'uuid';

function MyProfile() {
  const [img, setImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  const [profileImgUrl, setProfileImgUrl] = useState([]);
  const [coverImgUrl, setCoverImgUrl] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);

  const fetchProfileData = async () => {
    try {
      const docRef = doc(txtDB, 'profile', 'profileDetails');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setName(data.name || '');
        setEmail(data.email || '');
        setPhone(data.phone || '');
        setDescription(data.description || '');
      }
    } catch (error) {
      console.error('Error fetching profile details:', error);
    }
  };

  const fetchProfilePicture = () => {
    listAll(ref(imageDB, "profile")).then((result) => {
      const latestImage = result.items[result.items.length - 1];
      getDownloadURL(latestImage).then((url) => {
        setProfileImgUrl([url]);
      });
    }).catch((error) => {
      console.error('Error fetching profile picture:', error);
    });
  };

  const fetchCoverPicture = () => {
    listAll(ref(imageDB, "cover")).then((result) => {
      const latestImage = result.items[result.items.length - 1];
      getDownloadURL(latestImage).then((url) => {
        setCoverImgUrl([url]);
      });
    }).catch((error) => {
      console.error('Error fetching cover picture:', error);
    });
  };

  const handleProfileUpload = () => {
    if (img !== null) {
      const imgRef = ref(imageDB, `profile/${v4()}`);
      uploadBytes(imgRef, img).then((snapshot) => {
        console.log('Profile picture uploaded:', snapshot);
        getDownloadURL(snapshot.ref).then((url) => {
          setProfileImgUrl([url]);
        });
      }).catch((error) => {
        console.error('Error uploading profile picture:', error);
      });
    }
  };

  const handleCoverUpload = () => {
    if (coverImg !== null) {
      const imgRef = ref(imageDB, `cover/${v4()}`);
      uploadBytes(imgRef, coverImg).then((snapshot) => {
        console.log('Cover picture uploaded:', snapshot);
        alert('Cover picture uploaded successfully');
        getDownloadURL(snapshot.ref).then((url) => {
          setCoverImgUrl([url]);
        });
      }).catch((error) => {
        console.error('Error uploading cover picture:', error);
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(txtDB, 'profile', 'profileDetails');
      await updateDoc(docRef, {
        name,
        email,
        phone,
        description
      });
      setEditMode(false);
    } catch (error) {
      console.error('Error saving profile details:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
    fetchProfilePicture();
    fetchCoverPicture();
  }, []);

  return (
    <div className='my_profile'>
      <div className='cover_photo'>
        <input type='file' onChange={(e) => setCoverImg(e.target.files[0])} />
        <div onClick={handleCoverUpload}>Upload Cover</div>
        {coverImgUrl.map((url) => (
          <img className='cover_picture_render' key={url} src={url} alt="Cover" />
        ))}
      </div>
      <div className='profile_pic'>
        <input type='file' onChange={(e) => setImg(e.target.files[0])} />
        <div onClick={handleProfileUpload}>Upload Profile</div>
        {profileImgUrl.map((url) => (
          <img className='profile_picture_render' key={url} src={url} alt="Profile" height={200} />
        ))}
      </div>
      <div className='input_text'>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
            <textarea className='textarea1' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <div className='save_profile_details_button' type="submit">Save</div>
          </form>
        ) : (
          <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Description: {description}</p>
            <div className='save_profile_details_button' onClick={() => setEditMode(true)}>Edit</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProfile;