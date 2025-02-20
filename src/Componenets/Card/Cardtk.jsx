import React, { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import './Cardtk.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 250,
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  p: 4,
  borderRadius: 4,
  border: '2px solid #e0e0e0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Cardtk = React.memo(({ index, activeIndex, setActiveIndex, title, description, bg }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setActiveIndex(index);
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsOpen(true);
      setActiveIndex(null);
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="card-wrapper">
      <div
        className={`card ${isFlipping ? 'flip' : ''}`}
        onClick={handleClick}
        style={{ zIndex: isFlipping || activeIndex === index ? 100 : 0 }}
      >
        <Box className="card-front">
          <img
            src={`${process.env.PUBLIC_URL}/picture/flute1.png`}
            alt="Flute"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Box className="card-back">
          <Typography variant="h5" align="center" sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography variant="body2" align="center" sx={{ fontFamily: 'Poppins', fontWeight: 300 }}>
            {description}
          </Typography>
        </Box>
      </div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-container"
      >
        <Box sx={{ ...style, background: bg }}>
          <Typography id="modal-modal-title" variant="h6" align="center" gutterBottom sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
           " {title} "
          </Typography>
          <Box style={{ width: '80%', display: 'flex', justifyContent: 'end' }}>
            <Typography id="modal-modal-description" align="center" style={{ marginTop: '5px', color: '#EB5B00', fontFamily: 'Noto Serif', fontWeight: 300 }}>
              - {description}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
});

export default Cardtk;
