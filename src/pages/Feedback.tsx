import React, { useState, useEffect } from 'react';
import FeedbackDialog from '../components/FeedbackDialog';

function Feedback() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  useEffect(() => {
    // Open dialog automatically when navigating to this page
    setIsDialogOpen(true);
  }, []);

  return (
    <FeedbackDialog
      isOpen={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
    />
  );
}

export default Feedback;
