import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardActions, CardContent, Grid, IconButton } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { useTranslation } from 'react-i18next';
import Cardtk from '../Card/Cardtk';

const MainCard = ({ language, mainMenuSelection }) => {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [displayItems, setDisplayItems] = useState([]);

  // Memoize the function to avoid recreation on every render
  const getRandomItems = useCallback(() => {
    const shuffledItems = [...items].sort(() => 0.5 - Math.random());
    return shuffledItems.slice(0, 20);
  }, [items]);

  // Set items when the translation changes
  useEffect(() => {
    const fetchedItems = t('quotes', { returnObjects: true });
    setItems(fetchedItems);
  }, [t]);

  // Update displayItems only when items change
  useEffect(() => {
    setDisplayItems(getRandomItems());
  }, [getRandomItems]);

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  const handleRefresh = () => {
    setDisplayItems(getRandomItems());
  };

  return (
    <Card
      sx={{
        height: '70%',
        overflow: 'hidden',
        borderRadius: '5px',
        width: '85%',
        '@media (min-width: 600px)': {
          width: '75%',
          height: '95%',
        },
        '@media (min-width: 900px)': {
          width: '55%',
          height: '95%',
        },
        '@media (min-width: 1200px)': {
          width: '45%',
          height: '95%',
        },
      }}
    >
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
          {displayItems.map((item, index) => (
            <Grid item xs={3} key={`${item.title}-${index}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Cardtk
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                title={item.title}
                description={item.description}
                bg={item.bg}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="refresh" onClick={handleRefresh} style={{ marginTop: '-12px' }}>
          <CachedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MainCard;
