import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

function EditProfile({ detailsAbtMe }) {
  const [editedImages, setEditedImages] = useState('');

  if (!detailsAbtMe) {
    return <p>No image available</p>;
  }

  return (
    <div>
      {detailsAbtMe.map((details) => (
        <AvatarEditor
          key={details.id} 
          image={URL.createObjectURL(details.image)}
          width={250}
          height={250}
          border={50}
          borderRadius={500}
          color={[255, 255, 255, 0.6]}
          scale={1.2}
          rotate={0}
        />
      ))}
    </div>
  );
}

export default EditProfile;
