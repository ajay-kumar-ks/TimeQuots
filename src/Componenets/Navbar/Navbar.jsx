import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import {
  Avatar, Divider, ListItemIcon, Menu, MenuItem,
  InputLabel, FormControl, Select, SelectChangeEvent
} from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';
import TranslateIcon from '@mui/icons-material/Translate';

export default function Navbar({ language, setLanguage, mainMenuSelection, setMainMenuSelection }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [languages, setLanguages] = React.useState([
    { value: "en", label: 'English' },
    { value: "es", label: 'Spanish' },
    { value: "fr", label: 'French' },
    { value: "de", label: 'German' },
    { value: "zh", label: 'Chinese' },
    { value: "ja", label: 'Japanese' },
    { value: "ko", label: 'Korean' },
    { value: "ru", label: 'Russian' },
    { value: "pt", label: 'Portuguese' },
    { value: "it", label: 'Italian' }
  ]);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
  };

  const handleMainMenuChange = (event: SelectChangeEvent<string>) => {
    setMainMenuSelection(event.target.value);
  };

  const handleTranslateClick = () => {
    setLanguages((prevLanguages) => {
      const selected = prevLanguages.find(lang => lang.value === language);
      const others = prevLanguages.filter(lang => lang.value !== language);
      return selected ? [selected, ...others] : prevLanguages;
    });
    setAnchorEl2(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#1A2130' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Time Quotes
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="translate"
            sx={{ mr: 2 }}
            onClick={handleClick2}
          >
            <TranslateIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick3}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="user"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>

        {/* Language Menu */}
        <Menu
          anchorEl={anchorEl2}
          id="language-menu"
          open={open2}
          onClose={handleClose2}
          onClick={handleClose2}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="language-select-label">Language</InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                label="Language"
                onChange={handleLanguageChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {languages.map((lang) => (
                  <MenuItem key={lang.value} value={lang.value}>{lang.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </MenuItem>
          <MenuItem onClick={handleTranslateClick}>
            <ListItemIcon>
              <TranslateIcon />
            </ListItemIcon>
            Translate
          </MenuItem>
        </Menu>

        {/* Main Menu */}
        <Menu
          anchorEl={anchorEl3}
          id="main-menu"
          open={open3}
          onClose={handleClose3}
          onClick={handleClose3}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="main-menu-select-label">Main Menu</InputLabel>
              <Select
                labelId="main-menu-select-label"
                id="main-menu-select"
                value={mainMenuSelection}
                label="Main Menu"
                onChange={handleMainMenuChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="bhagavad-gita">Bhagavad Gita</MenuItem>
                <MenuItem value="bible">Bible</MenuItem>
                <MenuItem value="quotes">Quotes</MenuItem>
              </Select>
            </FormControl>
          </MenuItem>
        </Menu>

        {/* Account Menu */}
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
}
