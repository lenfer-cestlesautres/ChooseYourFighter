import React, { useState } from 'react';

import { Notification } from 'grommet';
import { Button } from 'grommet';
import { Box } from 'grommet';

export const Toast = (props:  {message: string}) => {
  const [visible, setVisible] = useState(false);

  const onOpen = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <>
      <Box pad="large" justify="center">
        <Button label="Что такое дом?" onClick={onOpen} />
      </Box>
      {visible && (
        <Notification
          toast
          message={props.message}
          onClose={onClose}
        />
      )}
    </>
  );
};

Toast.parameters = {
  chromatic: { disable: true },
};