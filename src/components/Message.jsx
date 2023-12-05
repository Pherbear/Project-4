import React from 'react';

const Message = ({ message_data, data }) => {
  const { message, created, relation } = message_data;

  async function getUserName(relation) {
    const record = await data.collection('users').getOne('RECORD_ID', {
      expand: 'relField1,relField2.subRelField',
    });

    console.log("relation " + record)
  }


  return (
    <div className="message">
      <p>
        <strong>{"sender"}</strong>: {message}
      </p>
      <p className="timestamp">{created}</p>
    </div>
  );
};

export default Message;