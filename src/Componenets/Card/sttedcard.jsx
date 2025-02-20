import React, { useState } from 'react';
import { Box, Typography, Modal } from '@mui/material';
import './Cardtk.css'; // Assuming you have custom styles in Cardtk.css
const [items, setItems] = useState([
  { title: 'Lyf is Though until you realise the meaning of life', description: 'Bhagavad Gita ', bg: '#AAD7D9' },
  { title: 'You cant run from the past , But you can run to a better tomorrow', description: 'Bhagavad Gita', bg: '#C1F2B0' },
  { title: 'yesterday is a history, Tomorrow is a mistry, But Today is a Gift', description: 'Bhagavad Gita ', bg: '#F6F4EB' },
  { title: 'It is better to live your own destiny imperfectly than to live an imitation of somebody else’s life with perfection.', description: 'Bhagavad Gita ', bg: '#FFCACC' },
  { title: 'Man is made by his belief. As he believes, so he is.', description: 'Bhagavad Gita ', bg: '#DBC4F0' },
  { title: ' There are three gates to this self-destructive hell: lust, anger, and greed. Renounce these three.', description: 'Bhagavad Gita ', bg: '#D4E2D4' },
  { title: 'Those who cannot renounce attachment to the results of their work are far from the path. ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: ' A Karma-yogi performs action by body, mind, intellect, and senses, without attachment, only for self-purification.', description: 'Bhagavad Gita ', bg: '#AAD7D9' },
  { title: ' Happiness derived from a combination of the senses and the sense objects is always a cause of distress and should be avoided by all means.', description: 'Bhagavad Gita ', bg: '#C1F2B0' },
  { title: 'A gift is pure when it is given from the heart to the right person at the right time and at the right place, and when we expect nothing in return ', description: 'Bhagavad Gita ', bg: '#F6F4EB' },
  { title: 'One should strive and employ oneself to uplift oneself. One should never dishonor oneself. The self is one’s friend as well as one’s enemy. ', description: 'Bhagavad Gita ', bg: '#FFCACC' },
  { title: ' As they approach me, so I receive them. All paths, Arjuna, lead to me.', description: 'Bhagavad Gita ', bg: '#DBC4F0' },
  { title: 'Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind. ', description: 'Bhagavad Gita ', bg: '#D4E2D4' },
  { title: 'Always perform your duty efficiently and without attachment to the results, because by doing work without attachment one attains the Supreme. ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: 'No one who does good work will ever come to a bad end, either here or in the world to come ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: 'What the outstanding person does, others will try to do. The standards such people create will be followed by the whole world. ', description: 'Bhagavad Gita ', bg: '#AAD7D9' },
  { title: 'When one’s mind dwells on the objects of Senses, fondness for them grows on him, from fondness comes desire, from desire anger. ', description: 'Bhagavad Gita ', bg: '#C1F2B0' },
  { title: 'Even the wise are confused about what is action and what is inaction. ', description: 'Bhagavad Gita ', bg: '#F6F4EB' },
  { title: 'With the intuitive discrimination, saturated in patience, with the mind absorbed in the soul, the Yogi, feeing his mind, all thoughts, will by slow degrees attain tranquillity. ', description: 'Bhagavad Gita ', bg: '#FFCACC' },
  { title: 'Curving back within myself I create again and again. ', description: 'Bhagavad Gita ', bg: '#DBC4F0' },
  { title: 'When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place. ', description: 'Bhagavad Gita ', bg: '#D4E2D4' },
  { title: 'They live in wisdom who see themselves in all and all in them, who have renounced every selfish desire and sense-craving tormenting the heart. ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: 'On this path effort never goes to waste, and there is no failure. Even a little effort toward spiritual awareness will protect you from the greatest fear. ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: 'A gift is pure when it is given from the heart to the right person, at the right time, at the right place and when we expect nothing in return. ', description: 'Bhagavad Gita ', bg: '#AAD7D9' },
  { title: 'The peace of God is with them whose mind and soul are in harmony, who are free from desire and wrath, who know their own soul. ', description: 'Bhagavad Gita ', bg: '#C1F2B0' },
  { title: 'The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal Peace.” ', description: 'Bhagavad Gita ', bg: '#F6F4EB' },
  { title: 'hat one is dear to me who runs not after the pleasant or away from the painful, grieves not, lusts not, but lets things come and go as they happen. ', description: 'Bhagavad Gita ', bg: '#FFCACC' },
  { title: 'The offering of wisdom is better than any material offering, Arjuna; for the goal of all work is spiritual wisdom.” ', description: 'Bhagavad Gita ', bg: '#DBC4F0' },
  { title: 'Sever the ignorant doubt in your heart with the sword of self-knowledge. Observe your discipline. Arise. ', description: 'Bhagavad Gita ', bg: '#D4E2D4' },
  { title: 'here is neither this world nor the world beyond nor happiness for the one who doubts. ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: 'Hell has three hates: lust, anger and greed. ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: 'Just as a reservoir is of little use when the whole countryside is flooded, scriptures are of little use to the illumined man or woman, who sees the Lord everywhere. ', description: 'Bhagavad Gita ', bg: '#AAD7D9' },
  { title: 'Even if you were the most sinful of sinners, Arjuna, you could cross beyond all sin by the raft of spiritual wisdom. ', description: 'Bhagavad Gita ', bg: '#C1F2B0' },
  { title: 'The deluded ones, who restrain their organs of action but mentally dwell upon the sense enjoyment, are called hypocrites. ', description: 'Bhagavad Gita ', bg: '#F6F4EB' },
  { title: 'You grieve for those who should not be grieved for, Yet you speak wise words. Neither for the dead nor those alive do the wise grieve for. ', description: 'Bhagavad Gita ', bg: '#FFCACC' },
  { title: 'Set thy heart upon thy work, but never on its reward. ', description: 'Bhagavad Gita ', bg: '#DBC4F0' },
  { title: 'All the scriptures lead to me; I am their author and their wisdom. ', description: 'Bhagavad Gita ', bg: '#D4E2D4' },
  { title: 'You should perform your duty with a view to guide people and for universal welfare. ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: 'All happiness in the material world has a beginning and an end, but happiness in Krishna is unlimited, and there is no end. ', description: 'Bhagavad Gita ', bg: '#92B4EC' },
  { title: 'For the senses wander, and when one lets the mind follow them, it carries wisdom away like a windblown ship on the waters. ', description: 'Bhagavad Gita ', bg: '#AAD7D9' }
]);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 250,
    // background:'#AAD7D9'
  // background:'#C1F2B0'
  // background:'#F6F4EB'
  // background:'#FFCACC'
  // background:'#DBC4F0'
  // background:'#D4E2D4'
  bgcolor: '#92B4EC', // Adjusted background color
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Adjusted box shadow
  p: 4,
  borderRadius: 4,
  border: '2px solid #e0e0e0', // Border color
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Cardtk({ index, activeIndex, setActiveIndex }) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setActiveIndex(index);
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      setIsOpen(true);
      setActiveIndex(null);
    }, 2000); // Match the animation duration (2 seconds in this case)
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
          <Typography variant="h5" align="center">Title</Typography>
          <Typography variant="body2" align="center">Description</Typography>
        </Box>
      </div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-container"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" align="center" gutterBottom>
          This is the content of the modal. You can customize this text or content as needed.
          </Typography>
          <Typography id="modal-modal-description" align="center">
            -Bhagavat geeta
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
