// src/components/auth/AuthModal.tsx
import React from 'react';
import { Dialog, DialogContent, Typography, IconButton, Box } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <IconButton
        onClick={onClose}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Authentication Modal
        </Typography>
        <Typography>
          This is a placeholder for the full authentication modal.
          Replace this with the complete AuthModal component I provided earlier.
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
