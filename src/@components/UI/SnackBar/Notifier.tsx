import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';
// import { removeSnackbar } from './redux/actions';

let displayed = [] as any;

const Notifier = () => {
  const dispatch = useDispatch();
  //   const notifications = useSelector(
  //     (store) => store.notifications.notifications || [],
  //   );
  const notifications = [
    {
      message: 'Failed fetching data.',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'warning',
      },
    },
  ] as any;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: any) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: any) => {
    displayed = [...displayed.filter((key: any) => id !== key)];
  };

  React.useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }: any) => {
        if (dismissed) {
          // dismiss snackbar using notistack
          closeSnackbar(key);
          return;
        }

        // do nothing if snackbar is already displayed
        if (displayed.includes(key)) return;

        // display snackbar using notistack
        enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            // remove this snackbar from redux store
            // dispatch(removeSnackbar(myKey));
            removeDisplayed(myKey);
          },
        });

        // keep track of snackbars that we've displayed
        storeDisplayed(key);
      },
    );
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};

export default Notifier;
